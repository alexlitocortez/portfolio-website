import React from 'react';
import './BlogSection.css';
import blogImageOne from '/Users/l/portfolio-website/src/Images/blog_image_1 copy.jpg';
import blogImageTwo from '/Users/l/portfolio-website/src/Images/blog_image_2 copy.jpg';
import blogImageThree from '/Users/l/portfolio-website/src/Images/blog_image_3 copy.jpg';

function BlogSection() {
    return (
        <div>
            <section className='blog-wrapper'>
                <div className='blogWrapperZone'>
                    <h1 id='blogHeader'>Blog</h1>
                    <div className='blog-cards'>
                        <div className='box'>
                            <img className='blogImage' src={blogImageOne} />
                            <hr className='blog-hr' />
                            <h1>Why I Chose Coding?</h1>
                        </div>
                        <div className='box'>
                            <img className='blogImage' src={blogImageTwo} />
                            <hr className='blog-hr' />
                            <h1>Coding And Marketing</h1>
                        </div>
                        <div className='box'>
                            <img className='blogImage' src={blogImageThree} />
                            <hr className='blog-hr' />
                            <h1>Schedule For Learning</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogSection
