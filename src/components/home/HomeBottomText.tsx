import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-family-font2 flex items-center justify-center gap-2 lg:gap-6 text-white">
      <Link
        to={"/projects"}
        className="text-[6.7vw] leading-[6vw] border-3 border-white hover:border-[#d3fd50] hover:text-[#d3fd50] rounded-full lg:px-10 px-5 lg:pt-3 pt-1 mb-2 uppercase "
      >
        Work
      </Link>
      <Link
        to={"/agence"}
        className="text-[6.7vw] hover:border-[#d3fd50] hover:text-[#d3fd50] leading-[6vw] border-3 border-white rounded-full lg:px-10 px-5 lg:pt-3 pt-1 mb-2  uppercase "
      >
        Agency
      </Link>
    </div>
  );
};

export default HomeBottomText;
