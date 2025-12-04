import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence = () => {

  const imageDivRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const imageArray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
    "https://k72.ca/images/teamMembers/SebR_640X960.jpg?w=640&h=960&s=81dfdbd4b658503ba32862901a1ea3ca"
  ]

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:"top 28%",
        end:"top -70%",
        scrub:1,
        pin:true,
        pinSpacing: true,
        pinReparent: true,
        pinType:"transform",
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate:(elem) =>{
          let imageIndex;
          if(elem.progress<1){
            imageIndex = Math.floor(elem.progress * imageArray.length);
          }else{
            imageIndex = imageArray.length-1;
          }
          if (imageRef.current && imageArray[imageIndex]) {
            imageRef.current.src = imageArray[imageIndex];
          }
        }
      }
    })
  })

  return (
    <div>
      <div className="section1 py-1">
        <div 
          ref={imageDivRef} 
          className="absolute bg-red-600 h-[18vw] max-sm:hidden w-[12vw] overflow-hidden rounded-3xl top-80 left-[33vw]"
        >
          <img 
            ref={imageRef} 
            className="object-cover h-full w-full" 
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" 
            alt="Team member" 
          />
        </div>
        <div className="relative">
          <div>
            <h1 className="font-bold text-[20vw] uppercase leading-[18vw] text-center mt-[28.5rem]">
              Seven7y Two
            </h1>
          </div>
          <div>
            <p className="font-semibold lg:pl-[40%] max-sm:p-4 lg:text-5xl text-2xl lg:leading-[3.3vw] leading-6">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We're inquisitive and
              open-minded, and we make sure creativity crowds out ego from every
              corner. A brand is a living thing, with values, a personality and a
              story. If we ignore that, we can achieve short-term success, but not
              influence that goes the distance. We bring that perspective to every
              brand story we help tell.
            </p>
          </div>
          <div className="w-full flex items-center justify-center my-40">
            <div className="w-[80%] flex justify-center lg:text-xl text-sm">
              <div className="w-1/3">
                <h2 className="pb-[20rem]">Expertise</h2>
                <p className="lg:pr-[7.5rem]">
                  Our Work_ Born in curiosity, raised by dedication and fed with a
                  steady diet of creativity.
                </p>
              </div>
              <div className="w-1/3">
                <ul className="pb-52">
                  <li>Stratergy</li>
                  <li>Advertising</li>
                  <li>Branding</li>
                  <li>Design</li>
                  <li>Content</li>
                </ul>
                <p className="lg:pr-[7.5rem] max-sm:pt-8">
                  Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.
                </p>
              </div>
              <div className="w-1/3">
                <h1></h1>
                <p className="pt-[21.25rem] lg:pr-[12.5rem] max-sm:pl-2">
                  Our Culture_ We're open to each other. Period. The team works
                  together to create a space that makes us proud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Agence;