import React from 'react';
import './blog.css';
import { Route, Routes } from 'react-router-dom';

function Blog() {
    return (
        <div className='container'>
            <h1>Testing</h1>
            <input type='text' />
        </div>
    );
};

function BlogNavigation() {
    return (
        <Routes>
            <Route path='/' element={<Blog />} />
        </Routes>
    );
}

export default BlogNavigation;