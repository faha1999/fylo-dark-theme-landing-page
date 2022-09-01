import React from 'react';
import { testimonialsData } from '../data/testimonialsData';
import quote from '../assets/images/bg-quotes.png';

export const Testimonials = () => {
  return (
    <>
      <section class="testimonials">
        <div class="container">
          <div class="quote">
            <img src={quote} alt="quote" />
          </div>

          <ul class="card">
            {testimonialsData.map((data) => (
              <li class="testimonial grid" key={data.name}>
                <p>{data.details}</p>

                <div class="info">
                  <div class="img">
                    <img src={data.img} alt="{data.name}" />
                  </div>
                  <div class="basicInfo">
                    <h5>{data.name}</h5>
                    <p>{data.title}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
