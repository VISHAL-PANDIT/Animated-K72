import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface StairProps {
  children: ReactNode;
}

const Stairs = ({ children }: StairProps) => {
  const currentPath = useLocation().pathname;
  const stairParentRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLDivElement | null>(null);
  
  useGSAP(
    function () {
      const tl = gsap.timeline();
      
      tl.set(stairParentRef.current, {
        display: "block",
      });
      
      tl.set(".stair", {
        y: "0%",
      });
      
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      });
      
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });
      
      tl.set(stairParentRef.current, {
        display: "none",
      });
      
      gsap.fromTo(
        pageRef.current,
        {
          opacity: 0,
          scale:1.2
        },
        {
          opacity: 1,
          scale:1,
          delay: 1.3,
          duration: 0.3,
        }
      );
    },
    [currentPath]
  );
  
  return (
    <div>
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed top-0 z-10 hidden"
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;