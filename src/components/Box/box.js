import React from 'react'
import './box.scss'

const Box = (props) => (
    <div className="container">
        <section className={`box theme--${props.theme} ${props.small ? "theme--small" : ""}`} style={{backgroundImage: `url(${props.background})`}}>          
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            <a className={`button ${props.linkPath ? "": "hide"}`} href={props.linkPath} target="_self">
                {props.linkText}
            </a> 
            <div>{props.children}</div>
        </section> 
    </div>
)

export default Box;