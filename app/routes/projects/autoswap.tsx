import type { MetaFunction } from "@remix-run/node";
import { Fragment } from "react";

const requirements = [
  'As a seller who has published a car, you can choose a "verified publication" mode by making the online payment, and the system will assign you an appointment at a nearby validation point.',
  'The mechanics of the checkpoints must be able to enter a control panel where they can manage the shifts made available to the platform, and upload through a wizard the "checklist" result of a particular technical verification.',
  "The consumer interested in buying a vehicle must be able to explore the current offer of units through a filter system by brand, model, price range and see a detailed publication.",
  "In the case of a verified unit, the consumer should be able to access the detailed technical report issued by the verification point.",
  "The buyer must be able to reserve the vehicle by paying a percentage of the vehicle's value online.",
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "AutoSwap | Santi Dalmasso",
  viewport: "width=device-width,initial-scale=1",
});

export function headers() {
  return {
    "Cache-Control": `public, max-age=${
      60 * 60 * 24
    } , stale-while-revalidate=${60 * 60 * 24 * 100}`,
  };
}

export default function AutoSwap() {
  return (
    <Fragment>
      <p>
        AutoSwap is a final project to obtain my degree in Systems Engineer. My
        colleague and I are currently building a marketplace for buying and
        selling cars with differential validation services.
      </p>
      <p className="mt-4">
        The marketplace provides buyers with information on the physical and
        registration status of vehicles. Following the PMBOK (Project Management
        Body of Knowledge) we are developing a project from start to finish.
      </p>
      <h2 className="text-xl md:text-2xl font-bold mb-2 mt-10 text-white">
        Features
      </h2>
      <p>Some of the main requirements were:</p>
      <ul className="mx-8 mt-6">
        {requirements.map((r, i) => (
          <li className="list-item" key={i}>
            <p className="font-normal">{r}</p>
          </li>
        ))}
      </ul>

      <div className="flex w-full justify-center gap-2 my-10 mb-14">
        <video
          className="w-[calc(33%-1rem)]"
          playsInline
          loop
          autoPlay
          src="/videos/autoswap-cars.mp4"
        />
        <video
          className="w-[calc(33%-1rem)]"
          playsInline
          loop
          autoPlay
          src="/videos/autoswap-checklist.mp4"
        />
        <video
          className="w-[calc(33%-1rem)]"
          playsInline
          loop
          autoPlay
          src="/videos/autoswap-checkout.mp4"
        />
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-2 mt-10 text-white">
        Design
      </h2>
      <p>
        Although I am not a design specialist, I designed all the views and
        components and Figma. Then, it was developed in the frontend with React,
        Reach and Tailwind.
      </p>
      <h2 className="text-xl md:text-2xl font-bold mb-2 mt-10 text-white">
        Backend and Frontend
      </h2>
      <p className="mb-4">
        On the backend, we planned and executed an hexagonal architecture.
        Firstly it is designed as a monolith application but divided into
        different modules so that in the future, if necessary, they can
        converted to micro-services. For the CQRS pattern we use RabbitMQ as
        message-broker.
      </p>
      <p className="mb-4">
        In the frontend we use Next.js and the backend we use express,
        typescript and typeorm. The databases we selected were MySql, Redis for
        cache and ElasticSearch for full-text search.
      </p>
      <p>
        With ElasticSearch we build the vehicle search engine with different
        filters.
      </p>
      <video
        className="w-full mt-8 mb-14"
        playsInline
        loop
        autoPlay
        src="/videos/publish-car.mp4"
      />
      <h2 className="text-xl md:text-2xl font-bold mb-2 mt-10 text-white">
        CI/CD
      </h2>
      <p className="mb-4">
        We used Github Actions as platform to automate build, test, deployment
        and static code analysis.
      </p>
      <p>
        On the local, we use docker to isolate the code from the hardware. In
        production, we applied Kubernetes to automating deployment, scaling, and
        orchestration of containers.
      </p>
      <h2 className="text-xl md:text-2xl font-bold mb-2 mt-10 text-white">
        Third-party Implementation
      </h2>
      <p className="mb-4">
        Mercado Pago was the payment gateway service that we implemented to make
        payments on the platform, both for reservations and services.{" "}
      </p>
      <p className="mb-4">
        In order for mechanics to be able to charge for their services, we
        implemented Mercado Pago's OAuth.
      </p>
      <p>
        As a map service we use the Google Maps API and implement a top layer to
        customize the styles with leafmap.
      </p>
    </Fragment>
  );
}
