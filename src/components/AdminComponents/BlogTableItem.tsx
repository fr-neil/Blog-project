import React from 'react';
import Image from 'next/image';
import { assets } from '../../../assets/assets';

const BlogTableItem = ({
    authorImg,
    title,
    author,
    date,
    deleteBlog,
    id,
    mongoId,
}: {
    authorImg?: string;
    title?: string;
    author?: string;
    date?: string;
    deleteBlog: (id: string | number) => void;
    id: string | number;
    mongoId: string;
}): React.ReactElement => {
    const BlogDate = new Date(date || '');
    return (
        <tr className='bg-white border-b '>
            <th
                scope='row'
                className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
            >
                <Image
                    width={40}
                    height={40}
                    src={authorImg ? authorImg : assets.profile_icon}
                    alt=''
                ></Image>
                <p>{author ? author : 'No author'}</p>
            </th>
            <td className='px-6 py-4'>{title ? title : 'no title'}</td>
            <td className='px-6 py-4'>{BlogDate.toDateString()}</td>
            <td
                className='px-6 py-4 cursor-pointer active:bg-gray-600 active:text-white'
                onClick={() => deleteBlog(mongoId)}
            >
                x
            </td>
        </tr>
    );
};

export default BlogTableItem;
