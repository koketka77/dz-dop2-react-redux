import React from 'react';
import { Posts, PostsDetails, Header } from '../../Data';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import '../style.css'


const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route path='/' element={<Posts />} />
                        <Route path='/posts/:id' element={<PostsDetails />} />
                        <Route path='*' element={<h1 className='notFound'>Не знаю куда ведёт About </h1>} />
                    </Route>
                </Routes>

            </Router>
        </div>
    );
}

export default App;
