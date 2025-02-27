import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import poster from "public/images/projects/prat1.jpg";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";
import done from "public/images/projects/prat3.png";
import dtwo from "public/images/projects/prat4.png";
import dthree from "public/images/projects/prat5.png";
import dfour from "public/images/projects/prat6.png";
import dfive from "public/images/projects/prat10.png";


import package1 from "public/images/projects/prat7.jpg";
import package2 from "public/images/projects/prat8.jpg";
import package3 from "public/images/projects/prat9.png";

const  Prtham = () => {
  return (

    <>
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Brand Overview</h3>
              <p>
              PRATHAM is a premier educational institute dedicated to shaping the future of ambitious students. True to its name, meaning "the first one," PRATHAM has helped over 80,000 students achieve their academic and career goals. The institute is known for its comprehensive coaching programs, expert faculty, and innovative teaching methodologies designed to help students excel in competitive entrance exams.

With a strong emphasis on holistic development, PRATHAM nurtures both intellectual growth and practical skills, ensuring students emerge as confident, competent, and future-ready professionals.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Project Description</h3>
              <p>
                
              Oh Puhleeez collaborated with PRATHAM to enhance its digital presence, strengthen its brand identity, and attract a wider student audience. The goal was to position PRATHAM as a leader in the education sector by leveraging digital marketing, content-driven engagement, and strategic partnerships.

Our strategy focused on revamping PRATHAM’s online presence, creating compelling content, and implementing innovative digital outreach campaigns. Through structured communication, interactive engagement, and performance-driven marketing, we successfully expanded PRATHAM’s reach and increased student enrollments.
              
              
              </p>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="poster__slider-wrapper">
              <div className="poster__slider-w">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  speed={800}
                  loop={true}
                  centeredSlides={false}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: ".next-project-d",
                    prevEl: ".prev-project-d",
                  }}
                  className="poster__slider"
                >
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="slide-group">
                <button
                  aria-label="previous item"
                  className="slide-btn prev-project-d"
                >
                  <i className="fa-light fa-angle-left"></i>
                </button>
                <button
                  aria-label="next item"
                  className="slide-btn next-project-d"
                >
                  <i className="fa-light fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Driven by Excellence </h5>
               
              </div>
              <div className="thumb">
                <Image src={iconone} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Delivering   Solutions</h5>
              
              </div>
              <div className="thumb">
                <Image src={icontwo} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Ensuring Safety </h5>
                 
              </div>
              <div className="thumb">
                <Image src={iconthree} alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">The Challenge</h3>
               
              <p>
              Before our collaboration, PRATHAM faced several challenges:

Limited Digital Reach: Needed a stronger online presence to attract potential students nationwide.

Engagement Gaps: Required more interactive content to keep students engaged beyond the classroom.

Website Optimization Issues: Needed a user-friendly interface for course information, enrollment, and updates.

Lack of Social Proof: Required an effective strategy to showcase success stories and testimonials.

Brand Positioning: Needed a refreshed identity to stand out in the competitive education sector.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">Solution Approach</h3>
              <p>
                 
              </p>
              <p>
              Oh Puhleeez implemented a comprehensive digital strategy focused on increasing engagement, optimizing the website, and utilizing content marketing to strengthen PRATHAM’s brand authority.

Through interactive storytelling, student testimonials, and targeted digital campaigns, we positioned PRATHAM as a trusted name in competitive exam preparation. Our approach combined data-driven insights with creative branding, resulting in measurable growth in student inquiries and online visibility.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="quote-pj">
              <div className="cont">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <blockquote className="secondary-text">
                “Oh Puhleeez played a crucial role in elevating PRATHAM’s digital presence. Their strategic marketing approach, content innovation, and social media expertise helped us connect with more students and reinforce our position as a leading educational institute.”
                </blockquote>
              </div>
              <div className="author">
                <h4>-PRATHAM Team</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-d__slider-w section__content-cta">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={800}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1400: {
              slidesPerView: 5,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="project-d__slider"
        >
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    


 {/* Service Details Section */}
    
      <section className="section service-details fade-wrapper" style={{ paddingTop: "0px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="service-details__slider">
                <div className="service-details__slider-single">
                  
                <div className="section__content-cta">
                        <div className="row gaper">

                            <div className=" col-12 col-lg-7">
                            <div className="poster-small">
                          <Image style={{height:"60vh"}} src={package1} alt="Image" />
                         </div>
                            </div>
                            <div className="col-12 col-lg-5">
                              <div className="details-group">
                          <h3 className="title-anim">SOCIAL MEDIA</h3>
                          
                            <p>
                            We designed a results-driven social media campaign that resonated with aspiring students. Our content included exam tips, success stories, faculty insights, and interactive Q&A sessions to foster community engagement.


                            </p>
                            <p> Live sessions with industry experts, student testimonials, and daily motivational posts created an interactive learning environment beyond traditional classrooms. The use of strategic hashtags, paid promotions, and targeted content increased PRATHAM’s follower base and boosted engagement.</p>
                            </div>
                        </div>
                     
                    </div>
                 
                  <div className="section__content-cta">
                    <div className="row gaper">
                      <div className="col-12 col-lg-7">
                        <div className="details-group">
                          <h3 className="title-anim">WEBSITE DESIGNING AND DEVELOPMENT</h3>
                          <p>
                          We redesigned PRATHAM’s website to provide a seamless user experience. Our goal was to simplify navigation, enhance course visibility, and streamline the enrollment process..
                          </p>
                          <p>Key improvements included a structured course catalog, student success highlights, and integrated chat support for instant queries. SEO-driven content helped improve search rankings, ensuring PRATHAM became more discoverable to potential students.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className="poster-small">
                          <Image style={{height:"55vh"}} src={package2} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="section__content-cta">
                        <div className="row gaper">

                            <div className=" col-12 col-lg-7">
                            <div className="poster-small">
                          <Image style={{height:"55vh"}} src={poster} alt="Image" />
                         </div>
                            </div>
                            <div className="col-12 col-lg-5">
                              <div className="details-group">
                          <h3 className="title-anim">INFLUENCER COLLABORATION</h3>
                          
                         
                            <p> A well-structured content marketing plan reinforced PRATHAM’s credibility in the education sector. We developed engaging blogs, informative video content, and success story compilations to highlight PRATHAM’s impact.

                            By featuring student achievements, alumni testimonials, and faculty interviews, we built strong social proof, positioning PRATHAM as the go-to institute for competitive exam preparation.</p>
                            </div>
                        </div>
                     
                    </div>
                    <div className="details-group section__cta text-start">
                    <h3 className="title-anim">The Result</h3>
                    <p>
                    Through a data-backed and engagement-driven digital strategy, PRATHAM successfully expanded its presence and increased student enrollments. Our expertise in branding, content marketing, and digital engagement led to significant improvements in outreach and reputation.


 


                    </p>
                    <p> Saw a 30% increase in sales within the first six months due to the improved online presence, influencer campaigns, and customer engagement.
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        </div>


        
      </section>
      </>

  );
};

export default Prtham;
 
