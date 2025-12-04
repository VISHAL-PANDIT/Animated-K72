import HomeBottomText from "../components/home/HomeBottomText";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div
        className="h-full w-full
       absolute text-white flex   items-center justify-end"
      >
        <p className="lg:w-[17.2vw] w-90 text-[0.875rem] lg:mt-[37vh] mt-[36vh] font-family-font1 lg:leading-[1.3vw] leading-4 font-bold mr-2">
          <span className="pl-[4vw]">K72 is an agency that builds brands</span>{" "}
          from every angle. Today, tomorrow and years from now. We think the
          best sparks fly when comfort zones get left behind and friction
          infuses our strategies, brands and communications with real feeling.
          We’re transparent, honest and say what we mean, and when we believe in
          something, we’re all in.
        </p>
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
