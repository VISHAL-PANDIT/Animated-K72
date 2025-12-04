import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-family-font1 text-center h-full max-sm:flex max-sm:items-center max-sm:justify-center">
      <div className="lg:mt-6  mt-24">
        <div className="lg:text-[9.3vw] text-[12vw] uppercase text-white leading-10 lg:leading-[8vw] flex items-center justify-center ">
          The spark for
        </div>
        <div className="lg:text-[9.3vw] text-[12vw] uppercase text-white leading-10 lg:leading-[8vw] flex items-center justify-center ">
          all{" "}
          <div className="h-[7vw] w-[15vw] -mt-5 rounded-full overflow-hidden ">
            <Video />
          </div>{" "}
          things
        </div>
        <div className="lg:text-[9.3vw] text-[12vw] uppercase text-white leading-10 lg:leading-[8vw]  flex items-center justify-center">
          creative
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;
