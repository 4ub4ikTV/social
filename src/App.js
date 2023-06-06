import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"/>
            </header>
            <nav className="nav">
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <div className="content">
                <img
                    src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMGWorldsofAdventureTicketinDubai.webp"
                    alt="content"/>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
