import React from 'react';
import hash from '../../img/hash.svg'
import lockw from '../../img/lock-white.svg'

const Navi = () => {
    return (
    
        <div className="main-side-bar">
            <div className="main-nick-name">
                <span><img  src={hash} alt="logo"/> general </span>
            </div>    
            <div className="main-nick-name">
                <span><img  src={hash} alt="logo"/> question </span>
            </div>    
            <div className="main-nick-name">
                <span><img  src={hash} alt="logo"/> random </span>
            </div>    
            <div className="main-nick-name">
                <span><img  src={lockw} alt="logo"/> task1 </span>
            </div>    
            <div className="main-nick-name">
                <span><img  src={lockw} alt="logo"/> task2 </span>
            </div>    
        </div>
        
    )
}

export default Navi;