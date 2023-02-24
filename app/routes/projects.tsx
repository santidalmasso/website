import { Link, Outlet, useMatches } from "@remix-run/react";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-hidden w-full flex justify-center p-8">
    <div className="max-w-3xl mx-auto w-[90%]">{children}</div>
  </div>
);

const projects = {
  "/projects/autoswap": {
    name: "AutoSwap",
    image: "/images/autoswap.svg",
    dateStart: "2021",
    dateEnd: "Present",
  },
  "/projects/rooftop": {
    name: "Rooftop",
    image: "/images/rooftop.svg",
    dateStart: "2020",
    dateEnd: "2022",
  },
};

export default function Projects() {
  const matches = useMatches();
  const project =
    projects[matches?.[2]?.pathname.toString() as keyof typeof projects];

  return (
    <div
      className="overflow-hidden"
      style={{
        background: 'url("/rings-bg.svg")',
        backgroundPositionX: "50%",
        backgroundPositionY: "0%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Wrapper>
        <Link
          to="/"
          className="p-2 w-20 relative inline-block lg:-left-20 z-10"
        >
          <img
            src="/icons/SD.png"
            alt="Logo Santiago Dalmasso"
            width="34"
            height="51"
          />
        </Link>
        <header className="text-[#D3D3D3] p-10 sm:p-16 relative h-[780px] -mt-[6rem] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center animate-[fade_1s_ease_forwards] blur-lg opacity-0">
            <img
              className=""
              src={project.image}
              alt={project.name}
              width="198"
              height="144"
            />
            <h1 className="text-[#959595] opacity-80 mt-8 text-4xl uppercase">
              {project.name}
            </h1>
            <h2 className="mt-1 text-sm text-white/30">
              {project.dateStart} - {project.dateEnd}
            </h2>
          </div>

          <div
            style={{
              position: "absolute",
              background:
                "radial-gradient(50% 50% at 50% 50%,#fff 0,hsla(0,0%,100%,0) 100%)",
              opacity: 0.06,
              transform: "rotate(45deg)",
              width: "100%",
              height: "100%",
              top: "-20px",
              maxWidth: "1800px",
            }}
          />
        </header>
      </Wrapper>
      <main className="-mt-96 text-white/30 relative">
        <div className="bg-gradient-to-b from-transparent via-black to-transparent absolute top-[140px] w-full h-[30rem]" />
        <Wrapper>
          <div className="p-10 sm:p-16 relative mt-64">
            <div className="h-[1px] absolute top-0 -left-[140px] w-[550px] bg-gradient-to-r from-transparent via-white/30" />
            <div className="h-[1px] absolute top-0 -left-[140px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-3" />
            <div className="rotate-90 h-[1px] absolute -top-[250px] left-0 origin-top-left w-[700px] bg-gradient-to-r from-transparent via-white/30" />
            <div className="rotate-90 h-[1px] absolute top-[250px] left-0 origin-top-left w-[300px] bg-gradient-to-r from-transparent via-white/40 glass-animation-2" />
            <div className="h-[1px] absolute bottom-0 -right-[200px] w-[550px] bg-gradient-to-r from-transparent via-white/30" />
            <Outlet />
            <div className="h-[1px] absolute bottom-0 -right-[200px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-4" />
            <div className="rotate-90 h-[1px] absolute -bottom-[200px] right-0 origin-bottom-right w-[700px] bg-gradient-to-r from-transparent via-white/30" />
            <div className="rotate-90 h-[1px] absolute -bottom-[200px] right-0 origin-bottom-right w-[200px] -translate-y-20 hover:-translate-y-[450px] bg-gradient-to-r from-transparent via-white/40 glass-animation-1" />
          </div>
        </Wrapper>
      </main>
    </div>
  );
}
