'use client';
import BlogList from '@/components/BlogList';
import Header from '../components/Header';
import Footer from '@/components/Footer';
export default function Home() {
    return (
        <>
            <Header></Header>
            <BlogList></BlogList>
            <Footer></Footer>
        </>
    );
}
