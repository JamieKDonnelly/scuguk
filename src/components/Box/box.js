import React from 'react'
import './box.scss'

const Box = (props) => (
    <div className="container">
        <section className="theme__box theme__box--small theme__box--green" style={{backgroundImage: `url(${props.background})`}}>          
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            <a className={`button ${props.linkPath ? "": "hide"}`} href={props.linkPath} target="_self">
                {props.linkText}
            </a>   
        </section> 
    </div>
)

export default Box;