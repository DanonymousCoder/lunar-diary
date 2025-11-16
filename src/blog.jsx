import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Blog() {
    return (
        <div className='container-blog'>
            <nav>
                <h1>New Thought</h1>
            </nav>

            <main>
                <p className='head'>How are you feeling now?</p>

                <div className='mood-boxes'>
                    <div className='mood-box'>
                        <img src='../FullMoon2010.jpg' className='moon-img' />
                        <p className='mood-title'>New moon</p>
                        <p className='mood'>Reflective</p>
                    </div>
                    <div className='mood-box'>
                        <img src='../FullMoon2010.jpg' className='moon-img' />
                        <p className='mood-title'>New moon</p>
                        <p className='mood'>Reflective</p>
                    </div>
                </div>

                <form action="#">
                    <textarea>

                    </textarea>

                    <div className='form-submission'>
                        <button type='submit' className='btn-submit'>Save Thought</button>
                        <Link to='/dashboard' className='btn-cancel'>Cancel</Link>
                    </div>
                </form>
            </main>
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