import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Dialogs, Music, Settings} from "./components";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-item">
                    <Routes>
                        <Route path="/profile" element={<Profile post={props.post}/>}/>
                        <Route path="/messages/*" element={<Dialogs dialog={props.dialog} message={props.message}/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
