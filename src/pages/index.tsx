import { gsap, Expo, Power2 } from "gsap";
import anime from 'animejs';
import { useRef, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Image from "next/image";
import cat from "../../public/cat.png";

export default function Home() {
  const app = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textWrapper = document.querySelector(".title");
      textWrapper!.innerHTML = textWrapper!.textContent!.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
      );

      anime.timeline().add({
        targets: ".title .letter",
        translateY: [-200, 0],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 3500 + 50 * i,
    });
      
      gsap.to(
        ".floating-image-container", 
        { 
          duration: 2,
          top: "50vh",
          ease: "Expo.easeInOut",
          delay: 0.5, 
        }, 

      );

      gsap.to(
        ".floating-image-container",
        { 
          duration: 2, 
          scale: ".2",
          top: "35vh",
          ease: "Expo.easeInOut",
          delay: 3,
        },
      );

      gsap.from(
        ".navbar > div",
        {
          duration: 1.5,
          opacity: 0,
          y: -100,
          ease: Expo.easeInOut,
          delay: 3,
        },
      );
      
      
      gsap.from(
        ".site-menu > div", 
        {
          duration: 1,
          opacity: 0,
          y: -100,
          ease: Expo.easeInOut,
          delay: 2.5,
        },
      );

      gsap.from(
        ".info, .marquee", 
        {
          duration: 1, 
          opacity: 0,
          y: 100,
          ease: Power2.easeInOut,
          delay: 3.5,
        },
      );
    }, app.current);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={app.current} className='landing-page-container'>
      <Navbar />
      <p className="title">meow meow meow</p>
      <div className="floating-image-container">
        <div className="cat-img">
            <Image src={cat} alt="cat" width={2400} height={2400} />
        </div>
      </div>
      <div className="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet consectetur erat, sed lacinia leo. Pellentesque ultrices et quam et pellentesque.
      </div>
      <div className="marquee">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>

  )
}