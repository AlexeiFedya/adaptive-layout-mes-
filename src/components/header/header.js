import React from 'react';
import HeadTop from './head-top'
import SideBar from './sidebar-head'
import ViewHeader from './view-header'

const Header = () => {
    return (
        <div className="he">
            <HeadTop/>
            <div className="he1">
                <SideBar/>
                <ViewHeader/>
            </div>
        </div>
    )
}

export default Header;