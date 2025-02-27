import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import hrone from "public/images/projects/samayra.jpg";
import hrthree from "public/images/projects/lamaya.jpg";
import hrfour from "public/images/projects/lech1.jpg";
import hrfive from "public/images/projects/mialma1.png";
import hrsix from "public/images/projects/bella.png";
import hrseven from "public/images/projects/sixscent.png";
import hreight from "public/images/projects/amor.png";
import hrnine from "public/images/projects/house.png";
import hrten from "public/images/projects/wensic.png";
import hreleven from "public/images/projects/berry.png";
import hrtwelve from "public/images/projects/aks1.jpg";
import hrthirteen from "public/images/projects/mpro1.png";
import hrfourteen from "public/images/projects/morash1.png";
import hrfifteen from "public/images/projects/payal1.png";
import hrsixteen from "public/images/projects/ele1.jpg";
import hrseventeen from "public/images/projects/spotlight1.jpg";
import hreighteen from "public/images/projects/trends1.jpg";
 import hrnineteen from "public/images/projects/pop-auto-new2.png";

 import hrtwenty from "public/images/projects/2-03-2024_AG1198copy.jpg";
 import hrtwentyone from "public/images/projects/skyn1.jpg";
 import hrtwentytwo from "public/images/projects/qoqo.jpg";
 import hrtwentythree from "public/images/projects/velvet.jpg";
 import hrtwentyfour from "public/images/projects/inno.jpg";
 





gsap.registerPlugin(ScrollTrigger);
const ProjectMain = () => {
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ele = slider.current;

    if (window.innerWidth >= 992 && ele) {
      gsap.registerPlugin(ScrollTrigger);

      const rightSections = gsap.utils.toArray(".project-sl__single");

      const pin = gsap.to(rightSections, {
        xPercent: -100 * (rightSections.length - 3),
        ease: "none",
        scrollTrigger: {
          trigger: ele,
          pin: true,
          invalidateOnRefresh: true,
          start: "center center-=100",
          scrub: 1,
          end: () => "+=" + (slider.current?.offsetWidth || 0),
          markers: false,
        },
      });

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <section className="section project-sl" ref={slider} style={{padding:"130px 0px 0px 0px"}}>
       
       
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="lechery">
            <Image src={hrfour} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="lechery">
            Lechery
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="mialma">
            <Image src={hrfive} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="mialma">
            Mi Alma
            </Link>
          </h2>
        </div>
      </div>


      <div className="project-sl__single">
        <div className="thumb">
          <Link href="aks">
            <Image src={hrtwelve} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="aks">
            AKS Shudham
            </Link>
          </h2>
        </div>
      </div>


      <div className="project-sl__single">
        <div className="thumb">
          <Link href="mpro">
            <Image src={hrthirteen} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="mpro">
            Mpro Audio
            </Link>
          </h2>
        </div>
      </div>


      <div className="project-sl__single">
        <div className="thumb">
          <Link href="morash">
            <Image src={hrfourteen} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="morash">
            Morash
            </Link>
          </h2>
        </div>
      </div>


      <div className="project-sl__single">
        <div className="thumb">
          <Link href="payal">
            <Image src={hrfifteen} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="payal">
            Payal Dawar
            </Link>
          </h2>
        </div>
      </div>

 
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="touch">
            <Image src={hrsixteen} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="touch">
            The EleTouch
            </Link>
          </h2>
        </div>
      </div>



      <div className="project-sl__single">
        <div className="thumb">
          <Link href="spotlight">
            <Image src={hrseventeen} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="spotlight">
            SpotLight
            </Link>
          </h2>
        </div>
      </div>


      <div className="project-sl__single">
        <div className="thumb">
          <Link href="trendswear">
            <Image src={hreighteen} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="trendswear">
            Trends Wear
            </Link>
          </h2>
        </div>
      </div>


      <div className="project-sl__single">
        <div className="thumb">
          <Link href="bella">
            <Image src={hrsix} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="bella">
              Bellaforte
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="thesix">
            <Image src={hrseven} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="thesix">
              The Sixscents
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="amor">
            <Image src={hreight} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="amor">
              Amorblue
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="house">
            <Image src={hrnine} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="house">
            House of Celebs
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="wesnic">
          <Link href="wesnic">
            <Image src={hrten} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="wesnic">
              

            Wesnic
              Clothing
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="berry">
            <Image src={hreleven} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="berry">
            Berry Essentials
            </Link>
          </h2>
        </div>
      </div>

      <div className="project-sl__single">
        <div className="thumb">
          <Link href="samarya">
            <Image src={hrone} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="samarya">
            Samarya 
              Naturals
            </Link>
          </h2>
        </div>
      </div>
      
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="lamaya">
            <Image src={hrthree} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="lamaya">
              

              Lamaya 

              Organics
            </Link>
          </h2>
        </div>
      </div>



      <div className="project-sl__single">
        <div className="thumb">
          <Link href="pratham">
            <Image src={hrnineteen} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="pratham">
            Prtaham 
              Test Prep
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="akriti">
            <Image src={hrtwenty} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="akriti">
            
              Akriti Gulati
            </Link>
          </h2>
        </div>
      </div>

       

      <div className="project-sl__single">
        <div className="thumb">
          <Link href="sky">
            <Image src={hrtwentyone} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="sky">
            Skyn and Shower 
               
            </Link>
          </h2>
        </div>
      </div>

      <div className="project-sl__single">
        <div className="thumb">
          <Link href="qoqo">
            <Image src={hrtwentytwo} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="qoqo">
            Qoqo
              Tech
            </Link>
          </h2>
        </div>
      </div>

      <div className="project-sl__single">
        <div className="thumb">
          <Link href="velvet">
            <Image src={hrtwentythree} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="velvet">
            Velvet 
              Imperial
            </Link>
          </h2>
        </div>
      </div>

      <div className="project-sl__single">
        <div className="thumb">
          <Link href="inno">
            <Image src={hrtwentyfour} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="inno">
            Inno  
              Health
            </Link>
          </h2>
        </div>
      </div>

      
    </section>
  );
};

export default ProjectMain;
