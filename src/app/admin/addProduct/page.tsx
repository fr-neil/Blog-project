'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { assets } from '../../../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const page = () => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        title: '',
        description: '',
        category: 'Startup',
        author: 'Neil',
        authorImg: '/author_img.png',
    });

    const onChangeHandler = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((data) => ({ ...data, [name]: value }));
        console.log(data);
    };

    const onSubmitHandler = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);
        formData.append('image', image as Blob);

        const response = await axios.post('/api/blog', formData);
        if (response.data.success) {
            toast.success('Blog added successfully');
            setImage(false);
            setData({
                title: '',
                description: '',
                category: 'Startup',
                author: 'Neil',
                authorImg: '/author_img.png',
            });
        } else {
            toast.error('Failed to add blog');
        }
    };

    return (
        <>
            <form
                onSubmit={onSubmitHandler}
                className='pt-5 px-5 sm:pt-12 sm:px-16'
            >
                <p className='text-xl'>Upload thumbnail</p>
                <label htmlFor='image'>
                    {' '}
                    <Image
                        className='mt-4'
                        src={
                            !image
                                ? assets.upload_area
                                : URL.createObjectURL(image as Blob)
                        }
                        alt=''
                        width={140}
                        height={70}
                    ></Image>{' '}
                </label>
                <input
                    onChange={(e) => {
                        const files = e.target.files;
                        if (files && files.length > 0) {
                            setImage(files[0]);
                        }
                    }}
                    type='file'
                    id='image'
                    hidden
                    required
                ></input>
                <p className='text-xl mt-4 '>Blog Title</p>
                <input
                    name='title'
                    onChange={onChangeHandler}
                    value={data.title}
                    className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
                    type='text'
                    placeholder='Type here..'
                ></input>
                <p className='text-xl mt-4 '>Blog Description</p>
                <textarea
                    name='description'
                    onChange={onChangeHandler}
                    value={data.description}
                    className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
                    placeholder='Write content here..'
                    rows={6}
                ></textarea>
                <p className='text-xl mt-4'>Blog category</p>
                <select
                    name='category'
                    onChange={onChangeHandler}
                    value={data.category}
                    className='w-40 my-4 px-4 py-4 border text-gray-500'
                >
                    <option value='Startup'>Startup</option>
                    <option value='Technology'>Technology</option>
                    <option value='Lifestyle'>Lifestyle</option>
                </select>
                <br></br>
                <button
                    type='submit'
                    className='mt-8 w-40 h-12 bg-black text-white'
                >
                    ADD
                </button>
            </form>
        </>
    );
};

export default page;
