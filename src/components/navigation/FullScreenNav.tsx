import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { NavbarContext } from "../../context/Navcontext";
import { Link } from "react-router-dom";

const FullScreenNav = () => {
  const fullScreenRef = useRef<HTMLDivElement | null>(null);
  const crossBtnRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext) || [false, () => {}];

  const fullNavLinks = useRef(null);

  useGSAP(
    function () {
      if (navOpen) {
        // Disable body scroll
        document.body.style.overflow = "hidden";
        
        // Show the nav first
        gsap.set(".fullscreennav", { display: "block" });

        // Reset all elements to their initial animated state
        gsap.set(".staring", { height: 0 });
        gsap.set(".navlink", { opacity: 0 });
        gsap.set(crossBtnRef.current, { x: 100, opacity: 0 });
        gsap.set(".link", { opacity: 0, rotateX: 90 });

        // Create and play the animation
        const tl = gsap.timeline();

        tl.to(".staring", {
          height: "100%",
          duration: 0.8,
          ease: "power3.inOut",
          stagger: {
            amount: 0.2,
          },
        });

        tl.to(
          ".navlink",
          {
            opacity: 1,
            duration: 0.5,
          },
          "-=0.4"
        );

        tl.to(
          crossBtnRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        );

        tl.to(
          ".link",
          {
            opacity: 1,
            rotateX: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: {
              amount: 0.3,
            },
          },
          "-=0.3"
        );
      } else {
        // Create reverse animation
        const tl = gsap.timeline();

        tl.to(".link", {
          opacity: 0,
          rotateX: 90,
          duration: 0.4,
          ease: "power2.in",
          stagger: {
            amount: 0.2,
          },
        });

        tl.to(
          crossBtnRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          },
          "-=0.2"
        );

        tl.to(
          ".navlink",
          {
            opacity: 0,
            duration: 0.3,
          },
          "-=0.2"
        );

        tl.to(
          ".staring",
          {
            height: 0,
            duration: 0.6,
            ease: "power3.inOut",
            stagger: {
              amount: 0.2,
            },
          },
          "-=0.2"
        );

        tl.set(".fullscreennav", { display: "none" });
        
        // Re-enable body scroll
        document.body.style.overflow = "auto";
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="hidden fullscreennav z-50 h-screen w-screen fixed top-0 left-0 text-white overflow-hidden"
    >
      <div className="h-screen w-screen fixed top-0 left-0">
        <div className="h-full w-full flex">
          <div className="staring h-full w-1/5 bg-black"></div>
          <div className="staring h-full w-1/5 bg-black"></div>
          <div className="staring h-full w-1/5 bg-black"></div>
          <div className="staring h-full w-1/5 bg-black"></div>
          <div className="staring h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinks} className="absolute inset-0 flex flex-col">
        <div className="navlink flex items-start justify-between w-full px-2">
          <div className="p-2">
            <svg
              className="lg:w-20 w-15"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div className="p-4">
            <div
              ref={crossBtnRef}
              onClick={() => {
                setNavOpen(false);
              }}
              className="lg:h-20 lg:w-20 h-10 w-10 overflow-hidden relative cursor-pointer"
            >
              <div className="h-28 w-0.5 origin-top absolute -rotate-45 bg-[#D3FD50]"></div>
              <div className="h-28 w-0.5 origin-top absolute right-0 rotate-45 bg-[#D3FD50]"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="lg:py-30 py-55 ">
          <Link to={"/projects"} onClick={() => setNavOpen(false)}>
            <div className="link origin-top relative border-t text-center overflow-hidden">
              <h1 className="uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                projects
              </h1>
              <div className="moveLink absolute max-sm:h-[16vw] flex top-0 left-0 w-full bg-[#D3FD50] text-black cursor-pointer overflow-hidden">
                <div className="moveX overflow-hidden flex items-center">
                  <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                    Pour Tout Voir
                  </h2>
                  <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
                  <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                    Pour Tout Voir
                  </h2>
                  <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
                </div>
                <div className="moveX overflow-hidden flex items-center">
                  <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                    Pour Tout Voir
                  </h2>
                  <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
                  <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                    Pour Tout Voir
                  </h2>
                  <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/agence"} onClick={() => setNavOpen(false)}>
            <div className="link origin-top relative border-t text-center overflow-hidden">
              <h1 className="uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                Agence
              </h1>
              <div className="moveLink absolute flex top-0 left-0 w-full bg-[#D3FD50] text-black overflow-hidden">
                <div className="moveX overflow-hidden flex items-center">
                  <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                    Pour Tout Voir
                  </h2>
                  <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
                  <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                    Pour Tout Voir
                  </h2>
                  <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
                </div>
                <div className="moveX overflow-hidden flex items-center">
                  <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                    Pour Tout Voir
                  </h2>
                  <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
                  <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                    Pour Tout Voir
                  </h2>
                  <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
                </div>
              </div>
            </div>
          </Link>
          <div className="link origin-top relative border-t text-center overflow-hidden">
            <h1 className="uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
              Contact
            </h1>
            <div className="moveLink absolute flex top-0 left-0 w-full bg-[#D3FD50] text-black overflow-hidden">
              <div className="moveX overflow-hidden flex items-center">
                <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                  Pour Tout Voir
                </h2>
                <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
                <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                  Pour Tout Voir
                </h2>
                <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
              </div>
              <div className="moveX overflow-hidden flex items-center">
                <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                  Pour Tout Voir
                </h2>
                <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
                <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                  Pour Tout Voir
                </h2>
                <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-y text-center overflow-hidden">
            <h1 className="uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
              Blouge
            </h1>
            <div className="moveLink absolute flex top-0 left-0 w-full bg-[#D3FD50] text-black overflow-hidden">
              <div className="moveX overflow-hidden flex items-center">
                <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                  Pour Tout Voir
                </h2>
                <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
                <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                  Pour Tout Voir
                </h2>
                <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
              </div>
              <div className="moveX overflow-hidden flex items-center">
                <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                  Pour Tout Voir
                </h2>
                <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
                <h2 className="whitespace-nowrap uppercase font-family-font2 lg:text-[7.5vw] text-[13vw] leading-[0.9] pt-4">
                  Pour Tout Voir
                </h2>
                <div className="lg:h-23 h-12 lg:w-50 w-40 rounded-full bg-red-500"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;