'use client';
import BlogTableItem from '@/components/AdminComponents/BlogTableItem';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const page = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
    };

    const deleteBlog = async (mongoId) => {
        const response = await axios.delete(`/api/blog`, {
            params: { id: mongoId },
        });
        toast.success(response.data.message);
        fetchBlogs();
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className='flex-1 py-5 px-5 sm:py-12 sm:px-16'>
            <h1>All blogs</h1>
            <div className='relative h-[80vh] max-w-[850px] overflow-x-auto my-4 border border-gray-400 scrollbar-hide'>
                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
                        <tr>
                            <th
                                className='hidden sm:block px-6 py-3'
                                scope='col'
                            >
                                Author name
                            </th>
                            <th className='px-6 py-3' scope='col'>
                                Blog Title
                            </th>
                            <th className='px-6 py-3' scope='col'>
                                Date
                            </th>
                            <th className='px-6 py-3' scope='col'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((item, index) => (
                            <BlogTableItem
                                key={index}
                                mongoId={item._id}
                                authorImg={item.authorImg}
                                title={item.title}
                                author={item.author}
                                date={item.date}
                                deleteBlog={deleteBlog}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default page;
