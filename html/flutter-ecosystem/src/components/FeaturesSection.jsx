import Container from "./Container";

const FeaturesSection = ({
  data: { heading, subHeading, description, buttons, imgUrl },
}) => {
  return (
    <section className=" odd:bg-gradient-to-bl odd:from-[#FFFFFF] odd:to-[#FCFCE1] group/feature ">
      <Container className="flex items-center justify-center flex-col-reverse md:flex-row  md:group-odd/feature:flex-row-reverse group-odd/feature:justify-between">
        <div className="md:w-[40%] aspect-square flex items-start justify-center gap-5 md:gap-10 flex-col p-2">
          <h3 className="text-lg md:text-2xl font-semibold text-zinc-500">
            {subHeading}
          </h3>
          <h2 className="text-3xl md:text-7xl font-black leading-[0.9]">
            {heading}
          </h2>
          <p className="md:text-[1.2rem] text-zinc-500 w-[85%]">
            {description}
          </p>
          <div className="space-x-2">
            {buttons.length > 0 &&
              buttons.map((button, idx) => (
                <button
                  key={idx}
                  onClick={button.onClick}
                  className="text-sm font-semibold  px-5 py-2 rounded-full border border-blue-500 bg-blue-500 text-white even:text-inherit even:border-none even:bg-transparent group-odd/feature:bg-transparent group-odd/feature:text-blue-500"
                >
                  {button.title}
                </button>
              ))}
          </div>
        </div>
        <div className="md:w-[40%] aspect-square grid place-items-center overflow-hidden">
          <img
            src={imgUrl}
            alt={subHeading + "image"}
            className="w-full h-full object-contain "
          />
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
