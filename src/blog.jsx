import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useThoughts } from './ThoughtsContext.jsx';
import './blog.css';

function Blog() {

    const [selectedMood, setSelectedMood] = useState(null);
    const [message, setMessage] = useState('');
    const { addThought } = useThoughts();
    const navigate = useNavigate();

    const moodNames = [
        'New Moon',
        'Waxing Crescent',
        'First Quarter',
        'Waxing Gibbous',
        'Full Moon',
        'Waning Gibbous',
        'Last Quarter',
        'Waning Crescent'
    ];

    const moodTypes = [
        'Reflective',
        'Hopeful',
        'Determined',
        'Excited',
        'Energized',
        'Grateful',
        'Contemplation',
        'Peaceful'
    ];

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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (selectedMood === null) {
            alert('Please select a mood before saving!');
            return;
        }

        if (!message.trim()) {
            alert('Please write your thought before saving!');
            return;
        }

        addThought({
            mood: selectedMood,
            moodName: moodNames[selectedMood],
            moodType: moodTypes[selectedMood],
            quote: quotes[selectedMood],
            message: message.trim()
        });

        navigate('/dashboard');
    };

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
                        <img src='../FullMoon2010.png' className='moon-img' />
                        <p className='mood-title'>New moon</p>
                        <p className='mood'>Reflective</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 1 ?  'selected' : ''}`} onClick={() => setSelectedMood(1)}>
                        <img src='../FullMoon2010.png' className='moon-img' />
                        <p className='mood-title'>Waxing Crescent</p>
                        <p className='mood'>Hopeful</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 2 ? 'selected' : ''}`} onClick={() => setSelectedMood(2)}>
                        <img src='../FullMoon2010.png' className='moon-img' />
                        <p className='mood-title'>First Quarter</p>
                        <p className='mood'>Determined</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 3 ? 'selected' : ''}`} onClick={() => setSelectedMood(3)}>
                        <img src='../FullMoon2010.png' className='moon-img' />
                        <p className='mood-title'>Waxing Gibbous</p>
                        <p className='mood'>Excited</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 4 ? 'selected' : ''}`} onClick={() => setSelectedMood(4)}>
                        <img src='../FullMoon2010.png' className='moon-img' />
                        <p className='mood-title'>Full Moon</p>
                        <p className='mood'>Energized</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 5 ? 'selected' : ''}`} onClick={() => setSelectedMood(5)}>
                        <img src='../FullMoon2010.png' className='moon-img' />
                        <p className='mood-title'>Waning Gibbous</p>
                        <p className='mood'>Grateful</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 6 ? 'selected' : ''}`} onClick={() => setSelectedMood(6)}>
                        <img src='../FullMoon2010.png' className='moon-img' />
                        <p className='mood-title'>Last Quarter</p>
                        <p className='mood'>Contemplation</p>
                    </div>
                    <div className={`mood-box ${selectedMood == 7 ? 'selected' : ''}`} onClick={() => setSelectedMood(7)}>
                        <img src='../FullMoon2010.png' className='moon-img' />
                        <p className='mood-title'>Waning Crescent</p>
                        <p className='mood'>Peaceful</p>
                    </div>
                </div>

                <MoodText />

                <form onSubmit={handleSubmit}>
                   <div className='text'>
                        <h3>Write your thought</h3>
                        <textarea 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Share your thoughts and feelings..."
                            rows="6"
                        />
                   </div>

                    <div className='form-submission'>
                        <button type='submit' className='btn-submit'>Save Thought</button>
                        <Link to='/dashboard' className='btn-cancel'>Cancel</Link>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default Blog;