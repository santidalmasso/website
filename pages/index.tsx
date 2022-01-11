import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { Highlight } from "@components/Highlight";
import { LinkPreview } from "@components/LinkPreview";
import { HIGHLIGHT_COLOR } from "lib/constants";
import { RoughNotationGroup } from "lib/rough-notation";
import { useIsFontReady } from "lib/useIsFontReady";
import { Projects } from "@lib/constants";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const isFontReady = useIsFontReady();

  return (
    <>
      <Head>
        <title>Santi Dalmasso</title>
        <meta property="og:title" content="Santiago Dalmasso" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://santid.me/images/santi-dalmasso.jpeg"
        />
        <meta property="og:url" content="https://santid.me" />
        <meta
          name="twitter:card"
          content="https://santid.me/images/santi-dalmasso.jpeg"
        />
      </Head>
      <main className="px-6">
        <div className="flex flex-col">
          <div className="bg-hero absolute border-box inset-0 -z-1"></div>
          <section className="grid-hero-layout mx-auto w-full max-w-screen-lg mt-0 sm:mt-16 py-20 px-4 sm:px-10">
            <RoughNotationGroup show={isFontReady}>
              <h1 className="text-2xl md:text-4xl md:col-span-3">
                Hi there, I&apos;m <strong>Santi Dalmasso</strong>.
              </h1>
              <div className="h-64 w-64 overflow-hidden rounded-xl md:row-span-3 mx-auto my-6 self-center md:ml-14 md:mt-0 shadow-md">
                <Image
                  src="/images/santi-dalmasso.jpeg"
                  placeholder="blur"
                  blurDataURL="/images/santi-dalmasso-blur.jpeg"
                  height={400}
                  width={300}
                  alt="Santi Dalmasso photo"
                />
              </div>
              <div className="mt-4 md:col-span-3">
                <p>
                  I love improving and making people&apos;s lives easier by
                  developing technological solutions. I work as a&nbsp;
                  <Highlight color={HIGHLIGHT_COLOR}>
                    Full-Stack Developer
                  </Highlight>
                  &nbsp;at&nbsp;
                  <a
                    href="https://rooftop.dev"
                    className="font-bold filter grayscale brightness-0 dark:brightness-200 hover:filter-none text-rooftop duration-300"
                    target="blank"
                  >
                    <span className="inline-block align-middle">
                      <Image
                        src="/icons/rooftop.png"
                        height="22px"
                        width="22px"
                        alt="Rooftop logo"
                      />
                    </span>
                    &nbsp;Rooftop&nbsp;
                  </a>
                  — developing with react, node and typescript.
                </p>
                <div className="md:col-span-3">
                  <p className="mt-2">
                    Currently I am finishing my studies in Information&nbsp;
                    <Highlight color={HIGHLIGHT_COLOR}>
                      Systems Engineering
                    </Highlight>
                    &nbsp;and trying to become a better developer as I grow in
                    my professional career.
                  </p>
                  <p className="mt-2">
                    I enjoy learning about new technologies and I am passionate
                    about web development.
                  </p>
                </div>
              </div>
            </RoughNotationGroup>
            <div className="mt-8 flex gap-5 w-full">
              <a
                href="https://github.com/santidalmasso"
                target="blank"
                className="w-full sm:w-32"
              >
                <Button className="w-full">View Github</Button>
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-dalmasso-232448145/"
                className="w-full sm:w-32"
                target="blank"
              >
                <Button variant="secondary" className="w-full">
                  View Linkedin
                </Button>
              </a>
            </div>
          </section>
          <Divider className="mb-12 mt-6" />
          <section className="mx-auto w-full max-w-screen-lg px-4 sm:px-10">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Projects</h2>
            <p>Some of my side projects</p>
            <ul className="mx-8 mt-6">
              {Projects.map((p: { name: string; url: string }) => (
                <li className="list-item" key={p.name}>
                  <LinkPreview href={p.url} alt={p.name}>
                    <b className="font-medium underline-animation">{p.name}</b>
                  </LinkPreview>
                </li>
              ))}
            </ul>
          </section>
          <Divider className="mt-24 mb-16" />
          <footer className="flex justify-center text-sm text-gray-500 mb-8">
            Built by&nbsp;<strong className="text-primary">Santi</strong>
            &nbsp;🤟
          </footer>
        </div>
      </main>
    </>
  );
}
