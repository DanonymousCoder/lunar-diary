import React from 'react';
import { Moon, Calendar, BookOpen, Sparkles, Download } from 'lucide-react';
import { Link, Routes, Route } from 'react-router-dom';
import BlogNavigation from './blog.jsx';
import './dashboard.css';

function Dashboard() {
    return (
        <div className='container-dashboard'>
            <nav>
                <div className='logo'>
                    <Moon size={40} className='dash-moon' />
                    <h1 className='dash-h1'>Lunar Diary</h1>
                </div>

                <div className='nav-links'>
                    <Link to='/blog' className='btn-thoughts'>Add thoughts</Link>
                    <Link className='btn-export'>Export</Link>
                </div>
            </nav>

            <main>
                <div className='dash-boxes'>
                    <div className='dash-box'>
                        <BookOpen className='book-open' />
                        <p className='head'>Total Thoughts</p>
                        <p>0</p>
                    </div>

                    <div className='dash-box'>
                        <Calendar className='calendar' />
                        <p className='head'>Total Thoughts this Month</p>
                        <p>0</p>
                    </div>

                    <div className='dash-box'>
                        <Sparkles className='sparkles' />
                        <p className='head'>Latest Mood</p>
                        <p>null</p>
                    </div>
                </div>


                <div className='thought-boxes'>
                    <h2>Thoughts</h2>

                    <div className="bottom">
                        <div className='thought-box'>
                        <img src='' />
                        <p className='date'>null</p>
                        <p className='thought-title'>null</p>
                        <p className='thought'>null</p>
                        <p className='thought-body'>null</p>
                    </div>

                    <div className='thought-box'>
                        <img src='' />
                        <p className='date'>null</p>
                        <p className='thought-title'>null</p>
                        <p className='thought'>null</p>
                        <p className='thought-body'>null</p>
                    </div>

                    <div className='thought-box'>
                        <img src='' />
                        <p className='date'>null123</p>
                        <p className='thought-title'>null123</p>
                        <p className='thought'>null123</p>
                        <p className='thought-body'>null123</p>
                    </div>

                    <div className='thought-box'>
                        <img src='' />
                        <p className='date'>null123</p>
                        <p className='thought-title'>null123</p>
                        <p className='thought'>null123</p>
                        <p className='thought-body'>null123</p>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/blog' element={<BlogNavigation />} />
        </Routes>
    );
};

export default Navigation;