import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/config/db';
import { writeFile } from 'fs/promises';
import BlogModel from '../../../lib/models/BlogModel';

const LoadDB = async () => {
    await connectDB();
};

LoadDB();

export async function GET(req: Request) {
    console.log('GET request received');
    return NextResponse.json({ message: 'GET request received' });
}

export async function POST(req: Request) {
    const formData = await req.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    if (image instanceof Blob) {
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `public/uploads/${timestamp}_${image.name}`;
        await writeFile(path, buffer);
        const imgURL = `/uploads/${timestamp}_${image.name}`;

        const blogData = new BlogModel({
            title: `${formData.get('title')}`,
            description: `${formData.get('description')}`,
            category: `${formData.get('category')}`,
            author: `${formData.get('author')}`,
            image: `${imgURL}`,
            authorImg: `${formData.get('authorImg')}`,
        });

        await BlogModel.create(blogData);
        console.log('Blog saved successfully!');

        return NextResponse.json({
            success: true,
            message: 'Image uploaded successfully',
        });
    } else {
        // Handle the case where image is not a Blob (e.g., it's null or a string)
        console.error('Invalid Blog data');
    }
}
