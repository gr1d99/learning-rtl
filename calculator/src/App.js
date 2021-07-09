import React from 'react'
import './App.css';

import {Calculator} from "./components/Calculator";

function App() {
    return (
        <>
            <header>
                <h1>Simple Calculator</h1>
            </header>
            <main>
                <Calculator />
            </main>
        </>
    )
}

export default App;
