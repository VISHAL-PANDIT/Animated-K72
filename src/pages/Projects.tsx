import gsap from "gsap";
import ProjectCard from "../components/projects/ProjectCard";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Projects = () => {

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function(){
    gsap.from('.hero',{
      height:'100px',
      stagger:{
        amount:0.25
      },
      scrollTrigger:{
        trigger:'.lol',
        start:'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
  })


  const count =4;

  return (
    <div className="p-2">
      <div className="pt-80  flex ">
        <h1 className="lg:text-[6vw] text-5xl uppercase font-family-font2">Projects</h1>
        <h2 className="lg:mt-5  ml-2 font-family-font2 text-3xl">16</h2>
      </div>
      <div className="lg:-mt-2 lol">
        {[...Array(count)].map(function (_, idx) {
          return (
            <div key={idx} className="hero lg:h-[500px] h-full w-full mb-2 flex max-sm:flex-col gap-2">
                <ProjectCard/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
