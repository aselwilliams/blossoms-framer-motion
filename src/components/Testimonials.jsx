import React, {useState} from 'react';
import loadmore from '../assets/loadmore.png';
import styled from 'styled-components';
import Title from './Title';
import {testimonialsAnimation} from '../animation';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';

function Testimonials() {
    const [selected, setSelected] = useState(0);
    const [element, controls] = useScroll();
    const testimonials =[
        {
            designation: "SPA",
            name: "Christie LaForce",
            review: "Perfection is by far one of the best treats around, professional in every aspect but friendly too. Aliyah and her dedicated team will do their best to meet your needs and give you your ultimate treatment. Massages are a must and worth every penny. Highly worth a visit ! "
        },
        {
            designation: "Hair color and style",
            name: 'Gabriella Sanchez',
            review:  "I had an absolutely fabulous experience witht the stylist Syndie. She is professional, knowledgeable and caring. Every visit is always a treat and you’re always made to feel special. Syndie never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations"
        },
        {
            designation: "Skin care",
            name: "Natalia Kruchko",
            review: "Outstanding service and the quality of work is amazing. I have been coming to this salon for my eyebrow threading and waxing needs as a loyal, devoted customer for approximately three years. But this time I tried the skin care treatment and massage and love how soft my skin feels. Had an Amazing experience!!"
        }
    ]
  return (
    <Section id="testimonials" ref={element}>
        <Title value="Reviews"/>
        <div className="container">
            <motion.div className="testimonials" variants={testimonialsAnimation} animate={controls} transition={{delay:0.03, type: 'tween', duration: 0.8}}>
                {
                    testimonials.map(({designation, name, review}, index) => {
                        return (
                            <div className={`testimonial ${selected===index ? "active" : "hidden"}`} key={index}>
                                <div className="image">
                                    <div className="circle2">
                                        <img src={loadmore} alt='Load more' />
                                    </div>
                                </div>
                                <div className="title-container">
                                    <span className="designation">
                                        {designation}
                                    </span>
                                    <h3 className='title'>{name}</h3>
                                </div>
                                <p className='description'>{review}</p>
                            </div>
                        )
                    })
                }
            </motion.div>
            <motion.div className="controls" variants={testimonialsAnimation} animate={controls} transition={{delay:0.03, type: 'tween', duration: 0.8}}>
                <button className={selected===0 ? 'active' : ''} onClick={()=>setSelected(0)}></button>
                <button className={selected===1 ? 'active' : ''} onClick={()=>setSelected(1)}></button>
                <button className={selected===2 ? 'active' : ''} onClick={()=>setSelected(2)}></button>
            </motion.div>
        </div>
    </Section>
  )
}

const Section = styled.section`
overflow:hidden;
.container {
    min-height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .testimonials {
        display: flex;
        gap: 1rem;
        text-align: center;
        justify-content: center;
        width: 30%;
        .testimonial {
            display: flex;
            flex-direction: column;
            align-items:center;
            gap: 1rem;
            .image {
                position:relative;
                .circle2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 10rem;
                    width: 10rem;
                    border-radius: 10rem;
                    background-color: #8860e6b0;
                }
            }
        }
        .hidden {
            display: none;
        }
        color: #fff;
        .designation {
            height: 8rem;
        }
    }
.controls {
    display:flex;
    gap:1rem;
    button {
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: var(--secondary-color);
        border: 0.1rem solid transparent;
        cursor: pointer;
    }
    .active {
        background-color: transparent;
        border: 0.1rem solid var(--secondary-color);
    }
}
}
`

export default Testimonials