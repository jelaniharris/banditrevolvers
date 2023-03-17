import Image from "next/image";
import PurgatoryCoverImage from "../public/assets/games/PurgatoryCoverImage.png";
import LinkButton from "./link-button";

const Intro = () => {
  return (
    <section className="w-full mb-10">
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage: `url(${PurgatoryCoverImage.src})`,
          height: "900px",
        }}
      >
        <div className="absolute bottom-0 top-0 right-0 left-0 w-full h-full">
          <div className="flex justify-center items-end h-full pb-10">
            <LinkButton href="/games">More Info</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
