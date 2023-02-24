import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Rooftop | Santi Dalmasso",
  viewport: "width=device-width,initial-scale=1",
});

export function headers() {
  return {
    "Cache-Control": `public, max-age=${
      60 * 60 * 24
    } , stale-while-revalidate=${60 * 60 * 24 * 100}`,
  };
}

export default function Rooftop() {
  return (
    <section>
      <p className="mb-4">
        Rooftop is a distributed community of developers that offers a range of
        benefits to its members, including one-on-one mentoring, opportunities
        to enhance their personal brand, access to job offers, and free
        training.
      </p>
      <p>
        It also helps Rooftoppers to find suitable projects that allow them to
        work 100% remotely at a competitive salary while providing support and
        guidance throughout the process.
      </p>
      <h2 className="text-xl md:text-2xl font-bold mb-2 mt-10 text-white">
        Monitoring application
      </h2>
      <p className="mb-4">
        My first experience into Rooftop was a project that consisted of an
        application for monitoring all sites of the company and verify if a
        website was available or not or checks on the SSL certificate.
      </p>
      <p>
        I mainly worked as frontend developer, developing with Angular.
        Nevertheless I code some features on the backend and I implemented the
        core of “checks runner”, a CLI that allowed to run each check in Go.
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-2 mt-10 text-white">
        Landing Page
      </h2>
      <p className="mb-4">
        I made some small changes on the Company’s landing page. The most big
        change I made was the implementations of i18n that require a huge
        refactor on the router application. Taking into consideration the best
        practices of Next.js I did the refactor and was able to significally
        reduce the quantity of code. The landing page performance was improved
        greatly, moving from seconds to milliseconds in SEO metrics.
      </p>
      <video
        className="w-full mt-8 mb-14"
        playsInline
        loop
        autoPlay
        src="/videos/rooftop-landing.mp4"
      />

      <h2 className="text-xl md:text-2xl font-bold mb-2 mt-10 text-white">
        Internal applications
      </h2>
      <p className="mb-4">
        I these applications I worked mainly as a frontend but I had the
        possibility to implement some backend issues.
      </p>
      <p>
        Together with the team, we builded internal applications necessaries for
        help to company finding potencial developers and companies. Most of my
        time was spent implementing the frontend and BBF (backend for frontend)
        with Next.js to consume the data from Mongo databases. In addition, we
        did a lot of research and we generated many design documents.
      </p>
      <h2 className="text-xl md:text-2xl font-bold mb-2 mt-10 text-white">
        UI Component Library
      </h2>
      <p className="mb-4">
        To be consistent in “look and feel” through applications, we build a UI
        component library. This allowed us to reuse code and design elements,
        reducing development time and increasing efficiency. Also make it easier
        to manage changes and updates. We host the library on Github into
        monorepo. We also generate configs packages and assets such as images
        and fonts packages for use in all projects.
      </p>
      <p>
        These were builded with TailwindCSS, React and for some components we
        used Reach to ensure accessibility
      </p>
      <h2 className="text-xl md:text-2xl font-bold mb-2 mt-10 text-white">
        UI Component Library
      </h2>
      <p className="mb-4">
        Rooftop is a great company with a very talented team. At Rooftop, we
        code based on best practices, taking into consideration SOLID
        principles, TDD with unit and integration testings, Clean Architectures
        and many patterns such as CQRS, Repository and many more. Also, we
        applied different CI/CD pipelines to automate processes and ensure code
        quality.
      </p>
      <p>
        In addition, we worked with agile methodology, specifically SCRUM
        framework.
      </p>
      <video
        className="w-full mt-8"
        playsInline
        loop
        autoPlay
        src="/videos/rooftop-design-system.mp4"
      />
    </section>
  );
}
