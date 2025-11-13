import React from 'react';
import { Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import './dashboard.css';

function Dashboard() {
    return (
        <div className='container-dashboard'>
            <nav>
                <div className='logo'>
                    <Moon size={50} className='dash-moon' />
                    <h1>Lunar Diary</h1>
                </div>

                <div className='nav-links'>
                    <Link></Link>
                    <Link></Link>
                </div>
            </nav>

            <main>

            </main>
        </div>
    )
}

export default Dashboard;