import Link from 'next/link'
import RooftopProject from '~/components/projects/Rooftop'
import AutoSwapProject from '~/components/projects/AutoSwap'
import RooftopProjectImage from '~/../public/images/rooftop.svg'
import AutoSwapProjectImage from '~/../public/images/autoswap.svg'

const Wrapper = ({children}: {children: React.ReactNode}) => (
  <div className="flex justify-center w-full p-8 overflow-hidden">
    <div className="max-w-3xl mx-auto w-[90%]">{children}</div>
  </div>
)

const projects = {
  autoswap: {
    name: 'AutoSwap',
    image: AutoSwapProjectImage.src,
    dateStart: '2021',
    dateEnd: 'Present',
    content: <AutoSwapProject />,
  },
  rooftop: {
    name: 'Rooftop',
    image: RooftopProjectImage.src,
    dateStart: '2020',
    dateEnd: 'Present',
    content: <RooftopProject />,
  },
}

export default function Projects({params}) {
  const project = projects[params.project] || projects[0]

  return (
    <div
      className="overflow-hidden"
      style={{
        background: 'url("/rings-bg.svg")',
        backgroundPositionX: '50%',
        backgroundPositionY: '0%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Wrapper>
        <Link
          href="/"
          className="relative z-10 inline-block w-20 p-2 lg:-left-20"
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
              {project.dateStart} -{' '}
              {project.dateEnd === 'Present' ? 'Present' : project.dateEnd}
            </h2>
          </div>

          <div
            style={{
              position: 'absolute',
              background:
                'radial-gradient(50% 50% at 50% 50%,#fff 0,hsla(0,0%,100%,0) 100%)',
              opacity: 0.06,
              transform: 'rotate(45deg)',
              width: '100%',
              height: '100%',
              top: '-20px',
              maxWidth: '1800px',
            }}
          />
        </header>
      </Wrapper>
      <main className="relative -mt-96 text-white/30">
        <div className="bg-gradient-to-b from-transparent via-black to-transparent absolute top-[140px] w-full h-[30rem]" />
        <Wrapper>
          <div className="relative p-10 mt-64 sm:p-16">
            <div className="h-[1px] absolute top-0 -left-[140px] w-[550px] bg-gradient-to-r from-transparent via-white/30" />
            <div className="h-[1px] absolute top-0 -left-[140px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-3" />
            <div className="rotate-90 h-[1px] absolute -top-[250px] left-0 origin-top-left w-[700px] bg-gradient-to-r from-transparent via-white/30" />
            <div className="rotate-90 h-[1px] absolute top-[250px] left-0 origin-top-left w-[300px] bg-gradient-to-r from-transparent via-white/40 glass-animation-2" />
            <div className="h-[1px] absolute bottom-0 -right-[200px] w-[550px] bg-gradient-to-r from-transparent via-white/30" />
            {project.content}
            <div className="h-[1px] absolute bottom-0 -right-[200px] w-[200px] bg-gradient-to-r from-transparent via-white/40 glass-animation-4" />
            <div className="rotate-90 h-[1px] absolute -bottom-[200px] right-0 origin-bottom-right w-[700px] bg-gradient-to-r from-transparent via-white/30" />
            <div className="rotate-90 h-[1px] absolute -bottom-[200px] right-0 origin-bottom-right w-[200px] -translate-y-20 hover:-translate-y-[450px] bg-gradient-to-r from-transparent via-white/40 glass-animation-1" />
          </div>
        </Wrapper>
      </main>
    </div>
  )
}
