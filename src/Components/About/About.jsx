import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimateTitle from "../Common/AnimateTitle";
gsap.registerPlugin(ScrollTrigger)
const About = () => {
    useGSAP(()=>{
        const clipanimation = gsap.timeline({
            scrollTrigger:{
                 trigger:'#clip',
                 start:'center center',
                 end:'+=800 center',
                 scrub:'0.5',
                 pin:true,
                 pinSpacing:true,
            }
        })
        clipanimation.to('.mask-clip-path',{
             width:'100vw',
             height:'100vh',
             borderRadius:0,
        })
    })
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>
        <AnimateTitle title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure" containerClass="mt-5 !text-black text-center" />
        <div
            className="about-subtext"
        >
            <p>The Game of Games begins-your life, now sounds epic MMORG</p>
            <p>Zentry Unites every player from countless games and platform</p>
        </div>
      </div>
      <div id='clip' className="h-dvh w-screen">
        <div className="mask-clip-path about-image ">
            <img src='img/about.webp' alt="Background" className="absolute left-0 top-0 size-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;
