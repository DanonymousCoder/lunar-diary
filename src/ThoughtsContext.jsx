import { createContext, useState, useContext, useEffect } from 'react';

const ThoughtsContext = createContext();

export const useThoughts = () => {
    const context = useContext(ThoughtsContext);
    if (!context) {
        throw new Error('useThoughts must be used within ThoughtsProvider');
    }
    return context;
};

export const ThoughtsProvider = ({ children }) => {
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        const savedThoughts = localStorage.getItem('lunarDiaryThoughts');
        if (savedThoughts) {
            try {
                setThoughts(JSON.parse(savedThoughts));
            } catch (error) {
                console.error('Error loading thoughts:', error);
            }
        }
    }, []);

    useEffect(() => {
        if (thoughts.length > 0) {
            localStorage.setItem('lunarDiaryThoughts', JSON.stringify(thoughts));
        }
    }, [thoughts]);

    const addThought = (thought) => {
        const newThought = {
            id: Date.now(),
            date: new Date().toISOString(),
            ...thought
        };
        setThoughts(prev => [newThought, ...prev]);
        return newThought.id;
    };

    const getThought = (id) => {
        return thoughts.find(t => t.id === parseInt(id));
    };

    const deleteThought = (id) => {
        setThoughts(prev => prev.filter(t => t.id !== id));
    };

    const exportThoughts = () => {
        const dataStr = JSON.stringify(thoughts, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `lunar-diary-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    };

    const value = {
        thoughts,
        addThought,
        getThought,
        deleteThought,
        exportThoughts
    };

    return (
        <ThoughtsContext.Provider value={value}>
            {children}
        </ThoughtsContext.Provider>
    );
};
