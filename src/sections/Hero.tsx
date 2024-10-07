import { Button } from "../components/Button";

export const HeroSection = () => {
  return (
    <section className="py-24 md:py-42 overflow-x-clip">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Intoducing Blockforge
        </p>
        <h1 className="font-heading font-black text-5xl text-center max-w-3xl mx-auto mt-4 md:text-6xl lg:text-7xl">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-xl mt-6 text-zinc-400 max-w-xl mx-auto md:text-2xl">
          Blockforge is a pioneer in smart contract integrity with cutting-edge
          data solutions
        </p>
        <div className="flex justify-center mt-10">
          <Button>Get Started</Button>
        </div>
        <div className="flex justify-center mt-24">
          <div className="inline-flex">
            <img
              src="/assets/images/icosahedron.png"
              alt="hero image"
              className="w-[500px]"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};
