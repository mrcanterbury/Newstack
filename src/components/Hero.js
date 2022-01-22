import React from 'react'

function Hero() {
    return (
        <div>

        <div className='hero-container'>
            <div className='hero-header'>
                <div className='hero-title'>
                    <h1>Build, deploy and manage your website with Newstack.</h1>
                </div>
                <div className='hero-subtitle'>
                    <h4>Lorem ipsum dolor sit amet, consectetur <span className='highlight'>adipiscing</span> elit, consectetur adipiscing elit.
                        Lorem <span className='highlight'>consectetur</span> ipsum dolor sit amet, adipiscing.</h4>
                </div>
                <div className='hero-button-container'>
                    <button className='sign-up'>Sign Up</button>
                    <button className='learn-more'>Learn More</button>
                </div>
            </div>
        </div>

        <div className='hero-image-container'>
            <div className='hero-image'>
            </div>
        </div>

        </div>
    )
}

export default Hero
