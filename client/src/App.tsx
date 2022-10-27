import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";
import "./App.css"
import Header from "./components/Header";

const App = () => {
    const [students, setStudents] = useState([]);

    return (
        <>
            <Header />
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home  />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/students" element={<Students students={students} setStudents={setStudents} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;
