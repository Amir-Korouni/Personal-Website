import Container from "../style.module.css";

const About = () => {
  return (
    <>
      <section className={Container.container}>
        <section className={Container.subContainer}>
          <div>
            <p className="text-[#610094]">01/About</p>
            <h2 className="text-6xl">Info about me</h2>
          </div>
          <div className="flex flex-col ">
            <div className="w-full h-[50vh] bg-[#6b25903b] border rounded flex justify-center items-center px-10 ">
              <p className="text-2xl">
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
            <div className="w-[40%]">fa</div>
          </div>
        </section>

        <div
          className="
                absolute
                z-[-1]
                left-[30%]
                w-[100px]
                h-[60rem]
                rounded-[80%]
                bg-zinc-600
                blur-[120px]
                -scale-x-40
                rotate-[135deg]
              "
        />

        <div
          className="
                absolute
                z-[-1]
                top-[10%]
                left-[12%]
                w-[600px]
                h-[400px]
                rounded-full
                bg-purple-600/15
                blur-[120px]
              "
        />
      </section>
    </>
  );
};

export default About;
