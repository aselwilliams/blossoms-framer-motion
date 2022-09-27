import React, {Fragment} from 'react';
import styled from 'styled-components';
import Title from './Title';
import pricing1  from '../assets/pricing1.png';
import pricing2  from '../assets/pricing2.png';
import play from '../assets/play.png';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import {pricingAnimation} from '../animation';

function Pricing() {
  const [element, controls] = useScroll();
  const packages =[
    {
      name: "Basic",
      price: 198
    },
    {
      name: "Premium",
      price: 270
    },
    {
      name: "Elite",
      price: 330
    },
  ]
  const data = [
    {
      value: "Mini facial $15",
      type:"Basic"
    },
    {
      value: "Core Facial $35",
      type: "Pro"
    },
    {
      value: "Facial+ Face massage $50",
      type:"Expert"
    },
    {
      value: "Shampoo+ Blowout $15",
      type:"Basic"
    },
    {
      value:"Style $20",
      type:"Pro"
    },
    {
      value: "Cut + Style $35",
      type:"Expert"
    },
    {
      value:"Full Head Tint $45",
      type:"Basic"
    },
    {
      value:"Full Head Highlights $60",
      type:"Pro"
    },
    {
      value:"Full Head Coloring $60",
      type:"Expert"
    },
    {
      value:'Neck and shoulder massage 30min $60',
      type:"Basic"
    },
    {
      value: "Back massage 30min $45",
      type:'Pro'
    },
    {
      value:'Full body massage 30min  $65',
      type:'Expert'
    },
    {
      value: "Oxygen Facial $25",
      type:"Basic"
    },
    {
      value: "Microdermabrasion $55",
      type:"Pro"
    },
    {
      value: "Waxing brow, lip, chin $10",
      type:"Basic"
    },
    {
      value: "Arm Waxing $20",
      type: "Pro"
    },
    {
      value:"Legs Waxing $45",
      type: "Expert"
    }, 
    {
      value: "Retouch demi $28",
      type:"Basic"
    },
    {
      value: "Retouch lighten + tone $35",
      type: "Pro"
    }, 
    {
      value:"Ombre or Balayage + tone $60",
      type: "Expert"
    },
    {
      value:"Olaplex hair treatment $15",
      type:"Expert"
    }
  ]
  return (
    <Section ref={element}>
      <Title value='pricing'/>
      <div className="background">
        <img src={pricing1} alt='background' className='bg1'/>
        <img src={pricing2} alt='background' className='bg2'/>
      </div>
      <div className="pricing__title">
        <p>Gift Certificates are available</p>
        <h2>Finding the best salons in your city could be time consuming...</h2>
      </div>
      <div className="pricing">
        {packages.map(({name, price}, index)=>{
          return (
            <motion.div className="pricing__plan" key={index} variants={pricingAnimation} animate={controls} transition={{delay: 0.03, type: 'tween', duration:0.8}}>
              <div className="pricing__plan__name">
                <h2>{name}</h2>
                <div className="pricing__plan__name__price">
                  <p><span>$</span>{price}</p>
                </div>
              </div>
              <div className="pricing__plan__content">
                <ul className={`pricing__plan__content__features ${name}`}>
                  {data.map(({value, type},index2 )=> {
                    return (
                      <Fragment key={index2}>
                        {name==="Basic" && type==="Basic" ? (
                          <li>{value}</li>
                        ) : name==="Premium" && type==="Pro" ? (
                          <li>{value}</li>
                        ) : name==="Elite" && type==="Expert" && (
                          <li>{value}</li>
                        )
 
                        }
                      </Fragment>
                    )
                  })}
                </ul>
                <div className="pricing__plan__content__actions">
                  <span>Order Now</span>
                  <img src={play} alt="Order Now" />
                </div>
              </div>
          
            </motion.div>
          )
        })

        }
      </div>
    </Section>
  )
}
const Section = styled.section`
min-height:100vh;
padding:5rem 0;
position:relative;
overflow:hidden;
.background {
  .bg1 {
    position: absolute;
    top: -60%;
    left: -5%;
    z-index: -1;
  }
  .bg2 {
    position: absolute;
    right:0;
    bottom: 5rem;
  }
}
.pricing__title {
  margin: 6rem 20rem;
  p{
    color: var(--secondary-color);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
  h2{
    color: var(--primary-color);
    font-size: 2rem;
  }
}
.pricing {
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 10rem;
  &__plan {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    &: nth-child(2) {
      .pricing__plan__content {
        padding:0 5rem;
        border-left: 0.2rem solid var(--primary-color);
        border-right: 0.2rem solid var(--primary-color);
      }
    }
    &__name {
      background-color: var(--primary-color);
      width: 15rem;
      height: 15rem;
      border-radius:10rem;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: var(--secondary-color);
      h2 {
        font-size: 2rem;
        // line-height: 2rem;
      }
      &__price {
        color: #fff;
        display: flex;
        position: relative;
        // span {
        //   position: absolute;
        //   top: 1rem;
        //   left: -0.9rem;
        //   font-size: 3rem;
        // }
        p {
          font-size: 3rem;
          font-weight: 400;
        }
      }
    }
    &__content {
      &__features {
        list-style-type: none;
        text-align: center;
        color: var(--primary-color);
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        // .line {
        //   text-decoration: line-through;
        // }
        margin-bottom: 2rem
      }
      &__actions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--primary-color);
        gap: 0.5rem;
        span {
          text-transform: uppercase;
        }
      }
    }
  }
}
//     }
//   }
// }
`

export default Pricing