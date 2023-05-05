import { gsap, Expo, Power2 } from "gsap";
import anime from 'animejs';
import { useRef, useEffect } from 'react';
import Image from "next/image";
import mainImage from "../../public/BrainComputer.svg";

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
        delay: (el, i) => 3000 + 50 * i,
      });
 
      gsap.to(
        ".floating-image-container", 
        { 
          duration: 1.5,
          top: "50vh",
          ease: "Expo.easeInOut",
          delay: 0.5, 
        });
        
      gsap.to(
        ".floating-image-container",
        { 
          duration: 1.5, 
          scale: ".2",
          top: "45vh",
          ease: "Expo.easeInOut",
          delay: 3,
        });

      gsap.to(
        ".floating-image-container",
        {
          duration: 5,
          rotateY: 360,
          ease: "linear",
          repeat: -1,
          delay: 3.5,
        });
        
      gsap.from(
        ".navbar > div",
        {
          duration: 1.5,
          opacity: 0,
          y: -100,
          ease: Expo.easeInOut,
          delay: 2.5,
        });
    
      gsap.from(
        ".site-menu > div", 
        {
          duration: 1,
          opacity: 0,
          y: -100,
          ease: Expo.easeInOut,
          delay: 2.5,
        });
      gsap.from(
        ".info", 
        {
          duration: 1, 
          opacity: 0,
          y: 100,
          ease: Power2.easeInOut,
          delay: 3,
        });
    }, app.current);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={app.current} className='landing-page-container'>
      <p className="title">The most reliable way to predict the future is to create it</p>
      <div className="floating-image-container">
        <div className="cat-img">
            <Image src={mainImage} alt="cat" width={1800} height={1800} priority />
        </div>
      </div>
      <div className="info">
        <p>powered by animejs - gsap</p>
      </div>
    </div>

  )
}