import React from 'react';
import { Moon, Calendar, BookOpen, Sparkles, Download, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useThoughts } from './ThoughtsContext.jsx';
import './dashboard.css';

function Dashboard() {
    const { thoughts, exportThoughts } = useThoughts();

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const thoughtsThisMonth = thoughts.filter(t => {
        const thoughtDate = new Date(t.date);
        return thoughtDate.getMonth() === currentMonth && 
               thoughtDate.getFullYear() === currentYear;
    });

    const latestMood = thoughts.length > 0 ? thoughts[0].moodType : 'No mood yet';

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    return (
        <div className='container-dashboard'>
            <nav>
                <div className='logo'>
                    <Moon size={40} className='dash-moon' />
                    <h1 className='dash-h1'>Lunar Diary</h1>
                </div>

                <div className='nav-links'>
                    <Link to='/blog' className='btn-thoughts'><Plus /> Add thoughts</Link>
                    <button onClick={exportThoughts} className='btn-export'>
                        <Download /> Export
                    </button>
                </div>
            </nav>

            <main>
                <div className='dash-boxes'>
                    <div className='dash-box'>
                        <BookOpen className='book-open' />
                        <p className='head'>Total Thoughts</p>
                        <p>{thoughts.length}</p>
                    </div>

                    <div className='dash-box'>
                        <Calendar className='calendar' />
                        <p className='head'>Total Thoughts this Month</p>
                        <p>{thoughtsThisMonth.length}</p>
                    </div>

                    <div className='dash-box'>
                        <Sparkles className='sparkles' />
                        <p className='head'>Latest Mood</p>
                        <p>{latestMood}</p>
                    </div>
                </div>


                <div className='thought-boxes'>
                    <h2>Thoughts</h2>

                    <div className="bottom">
                        {thoughts.length === 0 ? (
                            <p className='no-thoughts'>No thoughts yet. Click "Add thoughts" to create your first entry!</p>
                        ) : (
                            thoughts.map(thought => (
                                <Link 
                                    key={thought.id} 
                                    to={`/message/${thought.id}`} 
                                    className='thought-box'
                                >
                                    <img src='../FullMoon2010.png' className='moon-img' alt={thought.moodName} />
                                    <p className='date'>{formatDate(thought.date)}</p>
                                    <p className='thought-title'>{thought.moodName}</p>
                                    <p className='thought'>{thought.moodType}</p>
                                    <p className='thought-body'>
                                        {thought.message.length > 100 
                                            ? thought.message.substring(0, 100) + '...' 
                                            : thought.message}
                                    </p>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard;