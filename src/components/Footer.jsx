import React from "react";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";


export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2023  Hodophile. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
          <a href=" https://www.instagram.com/sha.ra.van/">
          <AiFillInstagram />Instagram</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sharavan-mudaliar-368972270">
          <BsLinkedin />Linkedin</a>
        </li>
        <li>
          <a href="https://github.com/SharavanMudaliar/Hodophile">
          <AiFillGithub/>Github</a>
        </li>
        
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
