import React from 'react';
import down from '../../img/down.svg'
import circle from '../../img/circle.svg'
import edit from '../../img/edit.svg'

const SideBar = () => {
    return (
        <div className="header-side-bar">
                <div className="sidebar-nick-name">
                    <span>Ais <img  src={down} alt="logo"/></span>
                    <span><img  src={circle} alt="logo"/> Alexey <img  src={"https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F10.2%2Fgoogle-small%2F1f4ac.png"} alt="logo"/></span>
                </div>    

        </div>
    )
}

export default SideBar;