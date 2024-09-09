'use client';
import React, { useMemo, useState, useEffect } from 'react';
import { assets, blog_data } from '../../../../assets/assets';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Define a type for blog data
// type BlogPost = {
//     id: number;
//     // Add other properties as needed
// };

// const BlogPage: React.FC<{ params: { id: string } }> = ({ params }) => {
//     const blogPost = useMemo(() => {
//         const postId = parseInt(params.id, 10);
//         return blog_data.find((post: BlogPost) => post.id === postId) || null;
//     }, [params.id]);

//     if (!blogPost) {
//         return <div>Blog post not found</div>;
//     }

//     return (
//         <div>
//             <h1>{params.id}</h1>
//             {/* Render other blog post details here */}
//         </div>
//     );
// };

const BlogPage = ({ params }) => {
    const [data, setData] = useState(null);

    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(params.id) === blog_data[i].id) {
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

    return data ? (
        <>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                    <Link href={'/'}>
                        <Image
                            src={assets.logo}
                            width={180}
                            alt=''
                            className='w-[130px] sm:w-auto  '
                        ></Image>
                    </Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                        Get started! <Image src={assets.arrow} alt=''></Image>
                    </button>
                </div>
                <div className='text-center my-24'>
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
                        {data?.title}
                    </h1>
                    <Image
                        className='mx-auto mt-6 border border-white rounded-full '
                        src={data?.author_img}
                        alt=''
                        width={60}
                        height={60}
                    ></Image>
                    <p className='mt-1 pb-2 text-lg max:w-[740] mx-auto'>
                        {data?.author}
                    </p>
                </div>
            </div>
            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                <Image
                    className='border border-white'
                    src={data.image}
                    width={1280}
                    height={720}
                    alt=''
                ></Image>
                <h1 className='my-8 text-[26px] font-semibold'>
                    Introduction:
                </h1>
                <p className=''>{data.description}</p>
                <h3 className='my-5 text-[18px] font-semibold'>
                    Step 1: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Fugiat magnam perspiciatis sit? Voluptas, mollitia
                    accusamus.
                </h3>
                <p className='my-3'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eum voluptatum, temporibus autem ipsum voluptate quod
                    dignissimos earum dicta magnam ipsam deserunt quia,
                    praesentium, distinctio iusto!
                </p>
                <p className='my-3'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eum voluptatum, temporibus autem ipsum voluptate quod
                    dignissimos earum dicta magnam ipsam deserunt quia,
                    praesentium, distinctio iusto!
                </p>
                <h3 className='my-5 text-[18px] font-semibold'>
                    Step 2: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Nobis sapiente earum dignissimos iure voluptates
                    excepturi totam perspiciatis dolores nostrum unde.
                </h3>
                <p className='my-3'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam minus magnam, officiis nam animi provident quidem
                    velit repellendus quibusdam magni nisi quasi ab id! Numquam
                    assumenda quam non nemo laudantium?
                </p>
                <p className='my-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam aperiam doloribus nesciunt veniam itaque quia
                    ratione quaerat quasi aliquam corrupti quis blanditiis
                    officiis modi saepe aut, maiores maxime voluptates quod
                    iusto deserunt!
                </p>
                <h3 className='my-5 text-[18px] font-semibold'>
                    Step 3: Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Modi ullam possimus, suscipit ut temporibus quasi
                    exercitationem deserunt ad iure nostrum consequatur nulla
                    repellat hic excepturi dolore. Veniam.
                </h3>
                <p className='my-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum obcaecati possimus laudantium deserunt tempora
                    nihil, a nesciunt tempore? Nulla eum nobis accusamus
                    praesentium odio.
                </p>
                <p className='my-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia quo distinctio beatae cumque voluptatem itaque
                    pariatur commodi excepturi, doloremque enim non iste quaerat
                    aperiam error repellendus quis minus dicta quidem modi rerum
                    in nobis tempora!
                </p>
                <h3 className='my-5 text-[18px] font-semibold'>Conclusion: </h3>
                <p className='my-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius similique atque impedit?
                </p>
                <div className='my-24'>
                    <p className='text-black font-semibold my-4'>
                        Share this blog article on social media
                    </p>
                    <div className='flex'>
                        <Image
                            src={assets.facebook_icon}
                            alt=''
                            width={50}
                        ></Image>
                        <Image
                            src={assets.twitter_icon}
                            alt=''
                            width={50}
                        ></Image>
                        <Image
                            src={assets.googleplus_icon}
                            alt=''
                            width={50}
                        ></Image>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    ) : (
        <div>Blog no longer exists.</div>
    );
};

export default BlogPage;
