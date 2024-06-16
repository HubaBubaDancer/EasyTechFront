import React from 'react';
import InfoBoxes from './InfoBoxes';
import './App.css';

const App = () => {
    const data = [
        { title: 'Box 1', description: 'Description for Box 1' },
        { title: 'Box 2', description: 'Description for Box 2' },
        { title: 'Box 3', description: 'Description for Box 3' },
        { title: 'Box 4', description: 'Description for Box 4' },
        { title: 'Box 5', description: 'Description for Box 5' },
        { title: 'Box 6', description: 'Description for Box 6' },
    ];

    return (
        <div className="App">
            <header className="App-header">
                <h1>Info Boxes</h1>
            </header>
            <main>
                <InfoBoxes data={data} />
            </main>
        </div>
    );
};

export default App;

