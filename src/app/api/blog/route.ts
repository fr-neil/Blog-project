import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/config/db';
import { writeFile } from 'fs/promises';
import BlogModel from '../../../lib/models/BlogModel';
const fs = require('fs');

const LoadDB = async () => {
    await connectDB();
};

LoadDB();

//Api endpoint to get all blogs
export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get('id');
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    } else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs });
    }
}

// Api endpoint for uploading blogs
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

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);

    fs.unlink(
        `./public${blog.image}`,
        (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Image deleted successfully');
        },
        await BlogModel.findByIdAndDelete(id),
    );

    return NextResponse.json({
        success: true,
        message: 'Blog deleted successfully',
    });
}
