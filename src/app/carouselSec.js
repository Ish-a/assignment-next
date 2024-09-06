import React from 'react'
import './Carousel.css'

const carouselSec = () => {
  return (
    <div className='carousel-sec'>
        <div className='carousel-thumbs'>
            <div className='thumbs-viewport'>
                <div className='carousel-thumbs-container' style={{ transform: 'translate3d(328px, 0px, 0px)' }}>
                    <button className='carousel-thumb-btn active-btn' style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                        Inbox
                        <span></span>
                    </button>

                    <button className='carousel-thumb-btn' style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                    Fin AI Copilot
                        <span></span>
                    </button>

                    <button className='carousel-thumb-btn' style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                        Fin AI Agent
                        <span></span>
                    </button>

                    <button className='carousel-thumb-btn' style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                    Tickets
                        <span></span>
                    </button>

                    <button className='carousel-thumb-btn' style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                    Help Center
                        <span></span>
                    </button>

                    <button className='carousel-thumb-btn'>
                    Omnichannel
                    <span></span>
                    </button>

                    <button className='carousel-thumb-btn'>
                    Reporting
                    <span></span>
                    </button>

                    <button className='carousel-thumb-btn'>
                    Workflows
                    <span></span>
                    </button>

                    <button className='carousel-thumb-btn' style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                    Outbound Messaging
                    <span></span>
                    </button>

                    <button className='carousel-thumb-btn' style={{ transform: 'translate3d(-1384px, 0px, 0px)' }}>
                    Apps & Integrations
                    <span></span>
                    </button>

                    <button className='carousel-thumb-btn' style={{ transform: 'translate3d(-1384px, 0px, 0px)' }}>
                    Knowledge Hub
                    <span></span>
                    </button>


                </div>

            </div>

        </div>
        <div className='carousel-wrapper'>
            <div className='carousel-btn'>

                <button className='carousel-btn-inner'>
                    <div className='carousel-btn-true'>
                    <div className='carousel-btn-true-inner'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
                    <path d="M23.8774 13.9219V11.6592L1.25002 11.6592V13.9219L23.8774 13.9219Z" fill="black">
                    </path>
                    <path d="M1.59863 14.3896L13.5986 2.38965L11.9986 0.789648L-0.00136783 12.7896L1.59863 14.3896Z" fill="black">
                    </path>
                    <path d="M11.9986 24.7904L13.5986 23.1904L1.59863 11.1904L-0.00136783 12.7904L11.9986 24.7904Z" fill="black">
                    </path>
                    </svg>
                    </div>
                    </div>

                </button>



                <button className='carousel-btn-inner'>
                    <div className='carousel-btn-true'>
                    <div className='carousel-btn-true-inner'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none"><path d="M23.8774 13.9219V11.6592L1.25002 11.6592V13.9219L23.8774 13.9219Z" fill="black"></path><path d="M1.59863 14.3896L13.5986 2.38965L11.9986 0.789648L-0.00136783 12.7896L1.59863 14.3896Z" fill="black"></path><path d="M11.9986 24.7904L13.5986 23.1904L1.59863 11.1904L-0.00136783 12.7904L11.9986 24.7904Z" fill="black"></path></svg>
                    </div>
                    </div>
                </button>


            </div>
            <div className='carousel-inner-wrapper'>

            </div>
        </div>
    </div>
  )
}

export default carouselSec