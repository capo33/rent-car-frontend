import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdCheckbox } from "react-icons/io";

import aboutImg from "../../assets/images/bmw-offer.png";

import "./hero.scss";

const Hero = () => {
  return (
    <section className='about__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='about__section-content'>
              <h4 className='section__subtitle'>About Us</h4>
              <h2 className='section__title'>
                We are the best car rental company in the world
              </h2>
              <p className='section__description'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>

              <div className='about__section-item d-flex align-items-center'>
                <p className='section__description d-flex align-items-center gap-2'>
                  <IoMdCheckbox /> Lorem ipsum dolor sit amet.
                </p>

                <p className='section__description d-flex align-items-center gap-2'>
                  <IoMdCheckbox /> Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div className='about__section-item d-flex align-items-center'>
                <p className='section__description d-flex align-items-center gap-2'>
                  <IoMdCheckbox /> Lorem ipsum dolor sit amet.
                </p>

                <p className='section__description d-flex align-items-center gap-2'>
                  <IoMdCheckbox /> Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className='about__img'>
              <img src={aboutImg} alt='' className='w-100' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
