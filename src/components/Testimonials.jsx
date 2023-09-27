import React from "react";
import styled from "styled-components";

import avatarImage2 from "../assets/avatarImage2.jpeg";
import avatarImage3 from "../assets/avatarImage3.jpeg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div>
          
          <div className="info">
            
          </div>
        </div>
        <div className="testimonial">
          <p>
          "Gotham City, my eternal home, is a place of both shadows and light. Amidst its towering skyscrapers and bustling streets lies a complex tapestry of crime and justice. While the darkness can be daunting, it's the very essence of Gotham that has forged my determination to protect it. From the Bat-signal piercing the night sky to the resilience of its citizens, there's a spirit here that refuses to be broken. Gotham City is my crucible, my inspiration, and my eternal mission"
          </p>
          <div className="info">
            <img src={avatarImage2} alt="" />
            <div className="details">
              <h4>Batman</h4>
              <span>Batman</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          "Well, well, well, Gotham City, my playground of chaos and delight! This twisted town has all the fun a clown could dream of, with its crime-infested streets and morally flexible inhabitants. From the brooding Batman to the ordinary folks just trying to survive, it's a carnival of chaos that never disappoints. You see, in Gotham, madness is like a contagious disease, and I'm just the agent of anarchy to spread it far and wide. So, whether you're a knight in a dark suit or just a joker looking for a laugh, Gotham City is the place to be for an unforgettable time!"






          </p>
          <div className="info">
            <img src={avatarImage3} alt="" />
            <div className="details">
              <h4>Jack Napier</h4>
              <span>Joker</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
