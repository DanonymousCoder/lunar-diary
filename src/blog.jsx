import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './blog.css';

function Blog() {

    const [selectedMood, setSelectedMood] = useState(null);
    const [messageValue, setMessageValue] = useState('');

    const addMessage = () => {

    };

    const quotes = [ 
        "In the darkness, we plant seeds of tomorrow's dreams.", 
        "Small crescent of hope light the path ahead.", 
        "Half-lit, yet fully determined. You're on your way", 
        "Almost there. Feel the momentum building within you.", 
        "Shine bright tonight. You are complete, radiant, whole.", 
        "Even light fades, gratitude illuminates your heart.", 
        "Reflection brings wisdom. Honor what was, embrace what's next.", 
        "Rest now. Quiet moon holds their own gentle power."
    ];


    const MoodText = () => {
        if (selectedMood === null) {
            return (
                <div className='mood-text'>
                    <p>Select a mood above to see your personalized message...</p>
                </div>
            );
        }
        
        const getValue = quotes[selectedMood];
        return (
            <div className='mood-text'>
                <p>{getValue}</p>
            </div>
        );
    };

    return (
        <div className='container-blog'>
            <nav>
                <Link to='/dashboard' className='back'><ArrowLeft /> Go back to dashboard</Link>
                <h1>New Thought</h1>
            </nav>

            <main>
                <p className='head'>How are you feeling now?</p>

                <div className='mood-boxes'>
                    <div className={`mood-box ${selectedMood == 0 ? 'selected' : ''}`} onClick={()  => setSelectedMood(0)}>
                        <img src='../FullMoon2010.jpg' className='moon-img' />
                        <p className='mood-title'>New moon</p>
                        <p className='mood'>Reflective</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 1 ?  'selected' : ''}`} onClick={() => setSelectedMood(1)}>
                        <img src='../FullMoon2010.jpg' className='moon-img' />
                        <p className='mood-title'>Waxing Crescent</p>
                        <p className='mood'>Hopeful</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 2 ? 'selected' : ''}`} onClick={() => setSelectedMood(2)}>
                        <img src='../FullMoon2010' className='moon-img' />
                        <p className='mood-title'>First Quarter</p>
                        <p className='mood'>Determined</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 3 ? 'selected' : ''}`} onClick={() => setSelectedMood(3)}>
                        <img src='../FullMoon2010.jpg' className='moon-img' />
                        <p className='mood-title'>Waxing Gibbous</p>
                        <p className='mood'>Excited</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 4 ? 'selected' : ''}`} onClick={() => setSelectedMood(4)}>
                        <img src='../FullMoon2010.jpg' className='moon-img' />
                        <p className='mood-title'>Full Moon</p>
                        <p className='mood'>Energized</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 5 ? 'selected' : ''}`} onClick={() => setSelectedMood(5)}>
                        <img src='../FullMoon2010.jpg' className='moon-img' />
                        <p className='mood-title'>Waning Gibbous</p>
                        <p className='mood'>Grateful</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 6 ? 'selected' : ''}`} onClick={() => setSelectedMood(6)}>
                        <img src='../FullMoon2010.jpg' className='moon-img' />
                        <p className='mood-title'>Last Quarter</p>
                        <p className='mood'>Contemplation</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 7 ? 'selected' : ''}`} onClick={() => setSelectedMood(7)}>
                        <img src='../FullMoon2010.jpg' className='moon-img' />
                        <p className='mood-title'>Waning Crescent</p>
                        <p className='mood'>Peaceful</p>
                    </div>
                </div>

                <MoodText />

                <form action="#">
                   <div className='text'>
                        <h3>Write your thought</h3>
                        <textarea onChange={() => setMessageValue(value)}>

                        </textarea>
                   </div>

                    <div className='form-submission'>
                        <Link to='/dashboard' className='btn-submit' onClick={addMessage} >Save Thought</Link>
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