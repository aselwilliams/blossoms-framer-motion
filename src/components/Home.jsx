import React from "react";
import styled from "styled-components";
import home from "../assets/home.jpeg";
import play from "../assets/play.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "../animation";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Blossoms Spa</h1>
          </div>
          <div className="subTitle">
            <p>Where Health and Beauty come together.</p>
            <p>
              At the Blossoms Spa, we believe in beauty with a conscience. We
              have created a beauty salon that offers the highest quality hair
              services and rejuvinating spa treatments.
            </p>
          </div>
          <img src={play} alt="Play Button" />
        </div>
      </motion.div>

      <motion.div
        className="info"
        variants={homeInfoAnimation}
        tansition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="grid">
          <div className="col">
            <strong>Email</strong>
            <p>blossoms@gmail.com</p>
          </div>
          <div className="col">
            <strong>Phone</strong>
            <p>(974)509-1595</p>
          </div>
          <div className="col">
            <strong>Location</strong>
            <p>121 Murphy Rd. Murphy, Texas</p>
          </div>
          <div className="col">
            <strong>Working Hours</strong>
            <p>Tuesday to Saturday</p>
            <p>09:00am - 08:00pm</p>
          </div>
          <div className="col">
            <strong>Special Services</strong>
            <p>Special Event Services</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
const Section = styled.section`
background:url(${home}) no-repeat bottom right;
min-height:100vh;
background-size:cover;
position:relative;
.home{
    background:100%;
    .content {
        display:flex:
        flex-direction:column;
        align-items:flex-start;
        width:60%;
        color:#fff;
        gap:1.2rem;
        margin-top:8rem;
        padding-left:18rem;
        .title {
            h1 {
                font-size:5rem;
                line-height:5.3rem;
                margin-bottom:2rem;
            }
        }
        .subTitle {
            p {
                width:70%;
                margin-bottom:2rem;
            }
        }
    }
}
.info{
    position:absolute;
    bottom:0;
    left:0;
    background-color:var(--secondary-color);
    padding:4rem;
    .grid {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 4rem;
        color: #fff;
    }
}
 @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home;
