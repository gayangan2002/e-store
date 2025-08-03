import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/" element={<ProductList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;