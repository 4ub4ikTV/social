import './App.css';

import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/messages" element={<Dialogs/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
