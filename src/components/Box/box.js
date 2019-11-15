import React from 'react'
import './box.scss'

const Box = (props) => (
    <div className="container">
        <section className="theme__box theme__box--small theme__box--green">          
            <h1>{props.heading}</h1>
            <p>{props.description}</p>          
        </section> 
    </div>
)

export default Box;