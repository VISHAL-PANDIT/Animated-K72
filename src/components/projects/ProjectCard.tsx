const ProjectCard = () => {
  return (
    <>
      <div className="group relative h-full lg:w-1/2 bg-blue-300 hover:rounded-[50px] transition-all overflow-hidden">
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute h-full w-full bg-black/10 flex justify-center items-center">
          <h2 className="font-family-font1 text-4xl uppercase text-white border-2 border-white rounded-full pt-2 px-3">
            View Projects
          </h2>
        </div>
      </div>
      <div className="group relative h-full lg:w-1/2 bg-blue-300 hover:rounded-[50px] transition-all overflow-hidden">
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute h-full w-full bg-black/10 flex justify-center items-center">
          <h2 className="font-family-font1 text-4xl uppercase text-white border-2 border-white rounded-full pt-2 px-3">
            View Projects
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
