import Container from "../../style.module.css";

const About = () => {
  return (
    <>
      <section className={Container.container} id="about" data-aos="fade-right">
        <section className={Container.subContainer}>
          <div>
            <p className="text-foreground mb-5">01 / About</p>
            <h2 className="text-6xl text-[clamp(2rem,5vw,4rem)] font-bold">
              Info about me
            </h2>
          </div>
          <div className="flex flex-col ">
            <div className="w-full h-[50vh] border border-zinc-500 rounded flex justify-center items-center px-10">
              <p className="text-2xl text-[clamp(0.9rem,1.5vw,1.8rem)] leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                saepe quibusdam nesciunt deleniti ratione? Beatae porro dolor
                dolores, inventore soluta ex, est, perspiciatis eveniet
                necessitatibus fugiat ea dolorem laudantium asperiores? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                repudiandae iusto in aperiam ex, suscipit consequuntur dolorum,
                tempora ut praesentium nulla eius magni soluta nisi molestiae
                quod ipsam ea a?
              </p>
            </div>
            <div className="w-[40%]"></div>
          </div>
        </section>

        <div
          className="
            absolute
            z-[-1]
            bottom-[10%]
            right-[5%]
            w-[300px]
            h-[220px]
            rounded-full
            bg-blue-600/15
            blur-[80px]

            sm:w-[400px]
            sm:h-[280px]

            md:right-[8%]
            md:w-[500px]
            md:h-[350px]
            md:blur-[100px]

            lg:right-[12%]
            lg:w-[600px]
            lg:h-[400px]
            lg:blur-[120px]
          "
        />
        <div
          className="
              absolute
              z-[-1]
              bottom-[30%]
              left-[5%]
              w-[300px]
              h-[220px]
              rounded-full
              bg-purple-600/15
              blur-[80px]

              sm:w-[400px]
              sm:h-[280px]

              md:left-[8%]
              md:w-[500px]
              md:h-[350px]
              md:blur-[100px]

              lg:left-[12%]
              lg:w-[600px]
              lg:h-[400px]
              lg:blur-[120px]
            "
        />
      </section>
    </>
  );
};

export default About;
