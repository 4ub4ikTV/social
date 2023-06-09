import React from 'react';

import c from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={c.content}>
            <img
                src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMGWorldsofAdventureTicketinDubai.webp"
                alt="content"/>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export {Profile};