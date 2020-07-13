import React from 'react';
import info from '../../img/info.svg'
import lock from '../../img/lock.svg'
import star from '../../img/star.svg'

import user from '../../img/user.svg'
import tack from '../../img/tack.svg'


const ViewHeader = () => {
    return (
        <div className="header-view">
                <div className="header-view-info">
                    <div className="header-channel-section">
                        <button>
                            <img  src={lock} alt="logo"/> 
                            task2
                        </button>
                        <img  src={star} alt="logo"/>
                    </div>
                    <div className="header-channel-title">
                        <button>
                            <img  src={user} alt="logo"/>
                            238
                        </button>
                        <span>|</span>
                        <button>
                            <img  src={tack} alt="logo"/>
                            2
                        </button>
                        <span>|</span>
                        <button>
                            Add a topic
                        </button>
                    </div>
                </div>    
                <button className="header-view-details">
                    <img  src={info} alt="logo"/>
                    <span>Details</span>
                </button> 

        </div>
    )
}

export default ViewHeader;