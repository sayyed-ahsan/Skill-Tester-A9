import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className=''>
            <article className='py-5 my-5 rounded-1 mx-5 blogs p-4'>
                <h3 className='pb-4 text-center'>What is the purpose of react-router?</h3>
                <p className='answer text-center'>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                </p>
            </article>
            <article className='py-5 my-5 rounded-1 mx-5 blogs p-4'>
                <h3 className='pb-4 text-center'>How does context API work?</h3>
                <p className='answer text-center'>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </article>
            <article className='py-5 my-5 rounded-1 mx-5 blogs p-4'>
                <h3 className='pb-4 text-center'>What is useRef?</h3>
                <p className='answer text-center'>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                </p>
            </article>
        </div>
    );
};

export default Blog;