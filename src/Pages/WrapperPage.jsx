import Home from './Home.jsx'
// import Help from '../components/FAQ';
// import About from "./About"
// import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'
import { useState } from "react";



export default function WrapperPage() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}