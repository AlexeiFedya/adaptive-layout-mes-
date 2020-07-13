import React from 'react';
import bolt from '../../img/thunder.svg'
import bold from '../../img/bold.svg'
import italic from '../../img/italic.svg'
import strikethrough from '../../img/strikethrough.svg'
import code from '../../img/code.svg'
import link from '../../img/link.svg'
import list from '../../img/list-menu.svg'
import coding from '../../img/coding.svg'

const Footer = () => {
    return (
        <div className="mes-wrap">
            <input className="work-mes-input" placeholder="Message task2"/>
            <div className="bla">
                <button>
                    <img  src={bolt} alt="logo"/>
                </button>
                <button>
                    <img  src={bold} alt="logo"/>
                </button>
                <button>
                    <img  src={italic} alt="logo"/>
                </button>
                <button>
                    <img  src={strikethrough} alt="logo"/>
                </button>
                <button>
                    <img  src={code} alt="logo"/>
                </button>
                <button>
                    <img  src={link} alt="logo"/>
                </button>
                <button>
                    <img  src={list} alt="logo"/>
                </button>
                <button>
                    <img  src={list} alt="logo"/>
                </button>
                <button>
                    <img  src={list} alt="logo"/>
                </button>
                <button>
                    <img  src={coding} alt="logo"/>
                </button>
            </div>
        </div>   
    )
}

export default Footer;
