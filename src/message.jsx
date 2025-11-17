import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { useThoughts } from './ThoughtsContext.jsx';
import './blog.css';

function Message() {
    const { id } = useParams();
    const { getThought, deleteThought } = useThoughts();
    const navigate = useNavigate();
    
    const thought = getThought(id);

    if (!thought) {
        return (
            <div className='container-blog'>
                <nav>
                    <Link to='/dashboard' className='back'>
                        <ArrowLeft /> Go back to dashboard
                    </Link>
                    <h1>Thought Not Found</h1>
                </nav>
                <main>
                    <p>This thought doesn't exist or has been deleted.</p>
                    <Link to='/dashboard' className='btn-submit'>Back to Dashboard</Link>
                </main>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this thought?')) {
            deleteThought(thought.id);
            navigate('/dashboard');
        }
    };

    return (
        <div className='container-blog'>
            <nav>
                <Link to='/dashboard' className='back'> 
                    <ArrowLeft /> Go back to dashboard
                </Link>
                <h1 className='msg-h1'>Your Thought</h1>
            </nav>

            <main className='message-detail'>
                <div className='thought-header'>
                    <img src='../FullMoon2010.png' className='moon-img-large' alt={thought.moodName} />
                    <div className='thought-info'>
                        <h2>{thought.moodName}</h2>
                        <p className='mood-type'>{thought.moodType}</p>
                        <p className='thought-date'>{formatDate(thought.date)}</p>
                    </div>
                </div>

                <div className='mood-text message-quote'>
                    <p>"{thought.quote}"</p>
                </div>

                <div className='thought-message'>
                    <h3>Your Reflection:</h3>
                    <p>{thought.message}</p>
                </div>

                <div className='message-actions'>
                    <button onClick={handleDelete} className='btn-delete'>
                        <Trash2 size={18} /> Delete Thought
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Message;