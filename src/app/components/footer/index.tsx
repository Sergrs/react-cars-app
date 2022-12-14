import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
        flex
        flex-col
        min-w-full
        pt-8
        md:pt-16
        items-center
        justify-center
    `}
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        w-full
        h-full
        max-w-screen-2xl
        flex-wrap
    `}
`;

const BottomContainer = styled.div`
  ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-center
        md:justify-start
        mt-7
        md:mt-1
    `}
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-300
    `}
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
        px-10
        md:px-3
    `}
`;

const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        max-w-xs
        font-normal
        leading-5
        mt-2
    `}
`;

const SectionContainer = styled.div`
  ${tw`
        w-full
        md:w-auto
        flex
        flex-col
        mr-2
        md:mr-16
        px-10
        my-3
        md:px-3
        md:my-0
    `}
`;

const LinksList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col
    `}
`;

const ListItem = styled.li`
  ${tw`
        my-2
    `};
  & > a {
    ${tw`
            text-sm
            text-white
            transition-all
            hover:text-gray-300
        `};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
        text-2xl
        font-bold
        text-white
        mb-3
    `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const RedIcon = styled.span`
  ${tw`
        w-8
        h-8
        rounded-full
        bg-red-500
        flex
        items-center    
        justify-center
        text-white
        text-base
        mr-2
    `}
`;

const SmallText = styled.h6`
  ${tw`
    text-white
    text-sm
  `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Youcar is a Car renting and selling company located in many
            countries across the world wich has high quality cars and top rated
            service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+99 555-555-5555</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@youcar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>Copyright &copy; {new Date().getFullYear()} Youcar. All rights reserved</CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
