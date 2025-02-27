import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import poster from "public/images/projects/sky1.jpg";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";
import done from "public/images/projects/sky2.jpg";
import dtwo from "public/images/projects/sky3.jpg";
import dthree from "public/images/projects/sky4.jpg";
import dfour from "public/images/projects/sky5.jpg";
import dfive from "public/images/projects/sky6.jpg";


import package1 from "public/images/projects/sky7.jpg";
import package2 from "public/images/projects/sky8.jpg";
import package3 from "public/images/projects/sky9.jpg";

const  Skyn = () => {
  return (

    <>
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Brand Overview</h3>
              <p>
              Skyn & Shower is a beauty, cosmetic, and personal care brand dedicated to redefining self-care. With a meticulously curated collection of skincare and wellness products, the brand empowers individuals to embrace radiant and healthy skin. Their philosophy revolves around premium-quality formulations that nourish, rejuvenate, and elevate everyday skincare routines.

Focused on delivering exceptional self-care experiences, Skyn & Shower provides a range of products designed to cater to diverse skincare needs. Their commitment to innovation, purity, and customer satisfaction sets them apart, ensuring a luxurious and effective approach to beauty and wellness. By blending science with nature, they create skincare solutions that inspire confidence and promote holistic well-being.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Project Description</h3>
              <p>
                
              Oh Puhleeez collaborated with Skyn & Shower to amplify its brand identity, enhance digital engagement, and drive sales. Our approach focused on increasing online visibility, refining the brand’s social media presence, and implementing strategic marketing initiatives tailored to its target audience.

We developed a comprehensive strategy that involved optimizing Skyn & Shower’s website, launching engaging social media campaigns, and leveraging influencer marketing to establish credibility. Through meticulous brand positioning, we successfully boosted awareness, strengthened customer connections, and enhanced digital performance, ensuring Skyn & Shower stood out in the competitive beauty and personal care industry.
              
              
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
              Before our intervention, Skyn & Shower faced several obstacles:

Lack of Strong Brand Presence: Needed a distinctive voice in a crowded beauty market.

Inconsistent Social Media Engagement: Struggled with audience retention and interactive content.

Limited Website Conversions: The online shopping experience needed enhancement.

Minimal Influencer Collaborations: Lacked a structured influencer partnership strategy.

Low Customer Retention: Required better engagement tactics to encourage repeat purchases.
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
              To tackle these challenges, Oh Puhleeez devised a tailored strategy focused on digital transformation and audience engagement. We developed an interactive content plan, enhanced the brand’s website, and executed a robust influencer collaboration program.

By integrating high-quality visuals, compelling storytelling, and strategic paid advertising, we significantly increased Skyn & Shower’s brand recognition. Our efforts in influencer partnerships and customer-centric campaigns led to improved audience trust, increased sales, and a stronger brand reputation in the beauty sector.
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
                “Oh Puhleeez played a pivotal role in strengthening our brand presence and expanding our digital reach. Their expertise in social media management, website optimization, and influencer marketing significantly boosted our growth and customer engagement.”
                </blockquote>
              </div>
              <div className="author">
                <h4>-Skyn & Shower Team</h4>
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
                          <Image style={{height:"80vh"}} src={package1} alt="Image" />
                         </div>
                            </div>
                            <div className="col-12 col-lg-5">
                              <div className="details-group">
                          <h3 className="title-anim">SOCIAL MEDIA</h3>
                          
                            <p>
                            We crafted a results-driven social media strategy that positioned Skyn & Shower as a go-to beauty brand. Our team developed engaging content tailored to Instagram, Facebook, and TikTok, focusing on product education, skincare routines, and customer testimonials. By implementing a visually appealing feed with cohesive branding, we strengthened the brand’s identity and digital appeal.


                            </p>
                            <p> Interactive campaigns, such as skincare challenges, live Q&A sessions with dermatologists, and user-generated content initiatives, fostered meaningful customer interactions. Additionally, we optimized paid social media ads, leveraging audience segmentation and retargeting strategies to maximize conversions. These efforts significantly increased Skyn & Shower’s social media engagement, brand awareness, and customer trust, ultimately driving a steady influx of new and returning customers.</p>
                            </div>
                        </div>
                     
                    </div>
                 
                  <div className="section__content-cta">
                    <div className="row gaper">
                      <div className="col-12 col-lg-7">
                        <div className="details-group">
                          <h3 className="title-anim">WEBSITE DESIGNING AND DEVELOPMENT</h3>
                          <p>
                          A seamless online shopping experience was crucial for boosting Skyn & Shower’s conversions. We revamped their website by enhancing navigation, optimizing load speeds, and implementing SEO best practices to increase organic traffic.

We redesigned product pages with high-resolution imagery, engaging descriptions, and persuasive calls to action to improve the customer journey. Integrating automated email sequences for abandoned cart recovery and personalized recommendations led to increased customer retention. The result was a polished, user-friendly website that not only improved Skyn & Shower’s credibility but also streamlined the purchasing process, enhancing customer satisfaction and revenue.
                          </p>
                          <p>Interactive Shopping Experience: Easy navigation, intuitive shopping filters, and a streamlined checkout process ensured a seamless online shopping experience for customers.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className="poster-small">
                          <Image style={{height:"66vh"}} src={package2} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="section__content-cta">
                        <div className="row gaper">

                            <div className=" col-12 col-lg-7">
                            <div className="poster-small">
                          <Image style={{height:"74vh"}} src={package3} alt="Image" />
                         </div>
                            </div>
                            <div className="col-12 col-lg-5">
                              <div className="details-group">
                          <h3 className="title-anim">INFLUENCER COLLABORATION</h3>
                          
                         
                            <p>  We implemented a strategic influencer marketing campaign to expand Skyn & Shower’s reach and credibility. Partnering with skincare enthusiasts, beauty bloggers, and dermatologists, we created engaging content that highlighted product benefits and real-life experiences.

Influencers shared in-depth product reviews, skincare tutorials, and transformation stories, building authenticity and trust among potential customers. Exclusive influencer discount codes, collaborations on limited-edition product bundles, and giveaway campaigns further boosted audience engagement. These partnerships resulted in increased brand awareness, enhanced customer confidence, and a surge in sales, solidifying Skyn & Shower’s position in the beauty and personal care industry.</p>
                            </div>
                        </div>
                     
                    </div>
                    <div className="details-group section__cta text-start">
                    <h3 className="title-anim">The Result</h3>
                    <p>
                    Through a strategic and data-driven approach, Skyn & Shower successfully established itself as a standout beauty brand in the digital space. Our efforts in branding, content creation, and influencer collaborations led to measurable growth and a strong, loyal customer base.
 


                    </p>
                    <p> Sales Growth: Saw a 30% increase in sales within the first six months due to the improved online presence, influencer campaigns, and customer engagement.
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

export default  Skyn;

 
