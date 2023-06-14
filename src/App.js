import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Dialogs, Music, Settings} from "./components";

const dialog = [
    {id: 1, name: "Orest"},
    {id: 2, name: "Nadia"},
    {id: 3, name: "Vlad"},
    {id: 4, name: "Nazar"},
    {id: 5, name: "Vira"},
]

const message = [
    {message: "Hi"},
    {message: "How is your it-kamasutra?"},
    {message: "Bye!"}
]

const post = [
    {message: "Hi how are you", like: "0"},
    {message: "Its my first project", like: "23"}
]

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-item">
                    <Routes>
                        <Route path="/profile" element={<Profile post={post}/>}/>
                        <Route path="/messages/*" element={<Dialogs dialog={dialog} message={message}/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
