import React from 'react';
import iclock from '../../img/clock.svg'
import isear from '../../img/search.svg'
import help from '../../img/help.svg'


const HeadTop = () => {
    return (
        <div className="header">
                <div className="head">
                    <div className="icon-header">
                        <img  src={iclock} alt="logo"/>
                    </div>
                </div>
                <button className="search-header">
                    <span>Search Ais</span>
                    <img src={isear} alt="logo"/>
                </button>    
                <div className="head">
                    <div className="icon-header">
                        <img  src={help} alt="logo"/>
                    </div>
                </div>
            </div>
    )
}

export default HeadTop;