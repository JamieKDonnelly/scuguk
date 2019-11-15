import React from 'react'
import './pageHero.scss'

const PageHero = (props) => (
    <section className="pageHero" style={{backgroundImage: `url(${props.heroImage})`}}>
        <div class="container">
            <h1>{props.heading}</h1>
        </div> 
    </section>
)

export default PageHero;