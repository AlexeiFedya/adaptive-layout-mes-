import React from 'react';
import avatar from '../../img/avatar.svg'
import Footer from '../footer/footer'

const WorkSpace = () => {
    return (
    
        <div className="workspace">
            <div className="mess">
                <img src={avatar} alt="logo"/>
                <div className="mess-info">
                    <div>
                        <span><b style={{color: "black" , fontSize: "18px"}}>Alexey Fedko</b>&nbsp;<p style={{fontSize: "11px", fontFamily: "Slack-Lato"}}>12:22 PM</p></span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>What's wrong with my solution?Pls help</span>
                    </div>
                </div>
                
            </div>          
            <div className="mess">
                <img src={avatar} alt="logo"/>
                <div className="mess-info">
                    <div>
                        <span><b style={{color: "black", fontSize: "18px"}}>Petya Petya</b>&nbsp;<p style={{fontSize: "11px", fontFamily: "Slack-Lato"}}>12:22 PM</p></span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>What's wrong with my solution?Pls help</span>
                    </div>
                </div>
            </div>             
            <div className="mess">
                <img src={avatar} alt="logo"/>
                <div className="mess-info">
                    <div>
                        <span><b style={{color: "black", fontSize: "18px"}}>Andrey Pupkin</b>&nbsp;<p style={{fontSize: "11px", fontFamily: "Slack-Lato"}}>12:22 PM</p></span>
                    </div>
                    <div>
                        <span style={{color: "black"}}> my attitude is based on how you treat me .Pls help, help me plz . why?</span>
                    </div>
                </div>
            </div>
            <Footer/>       
        </div>
        
    )
}

export default WorkSpace;