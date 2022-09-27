import React from 'react';
import styled from 'styled-components';
import play from '../assets/play.png';
import homepage from '../assets/homepage.png'
import Title from './Title';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import {blogsAnimation} from '../animation';
import { GiHealthCapsule } from 'react-icons/gi';
import blog7 from '../assets/blog7.jpeg';
import blog8 from '../assets/blog8.jpeg';
import blog3 from '../assets/blog3.jpeg'

function Blog() {
  const [element, controls] = useScroll();
  const blogsData= [
    {
      image: blog7,
      title: 'BLOSSOMS MAGAZINE',
      type:'Relax',
      description:'Our blog is intended to help answer your hair related questions and provide information about healthy hair choices and products.',
    },
    {
      image: blog8,
      title: 'REFLEXOLOGY',
      type:'SPA',
      description:"Reflexologists believe that these reflex points, pressing them creates real benefits for the person's health. If you have any questions, please email",
    },
    {
      image: blog3,
      title: 'MEDITATION',
      type:'Yoga',
      description:'Keep your body and mind it pure and clean for the soul to reside in. Our Spa offers yoga classes in places where relaxation and serenity comes together.',
    },
  ]
  return (
    <Section id='blog' ref={element}>
      <Title value='Blog' />
      <div className="blogs">
        {blogsData.map(({image,title, type, description})=>{
          return (
            <motion.div className="blog" key={title} variants={blogsAnimation} animate={controls} transition={{delay:0.03, type: 'tween', duration: 0.9}}>
              <div className="image">
                <img src={image} alt='spa' />
              </div>
              <div className="title">
                <h3>{title}</h3>
              </div>
              <span className='type'>{type}</span>
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="more">
                <img src={play} alt='Play'/>
                <span>Read more</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>

  )
}

const Section=styled.section`
min-height: 100vh;
position: relative;
.blogs{
  display: grid;
  grid-template-columns:repeat(3, 1fr);
  gap: 3rem;
  margin: 5rem 15rem;
  .blog{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .image img {
      height: 15rem;
      // background: url(${homepage}) no-repeat center center;
      background-position:center center;
      backgound-repeat:no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      h3{
        color: var(--secondary-color);
        font-size: 1.5rem;
      }
    }
    .type {
      color: var(--primary-color);
      font-weight: bolder;
      text-transform: uppercase;
    }
    .description {
      height:10rem;
      color: var(--primary-color);
    }
    .more {
      display:flex;
      align-items:center;
      gap:1rem;
      cursor: pointer;
      span {
        letter-spacing: 0.1rem;
        color: var(--primary-color);
        text-transform: uppercase;
      }
    }
  }
}
`

export default Blog