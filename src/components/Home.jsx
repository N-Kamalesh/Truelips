import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const icons = [
  { id: 1, Icon: FaFacebookF, link: "https://www.facebook.com" },
  { id: 2, Icon: FaTwitter, link: "https://www.twitter.com" },
  { id: 3, Icon: FaLinkedinIn, link: "https://www.linkedin.com" },
  { id: 4, Icon: MdEmail, link: "mailto:info@gmail.com" },
];
function Home() {
  return (
    <main className="w-full">
      <div className="mx-auto mb-12 flex w-full max-w-6xl flex-col leading-8">
        <section className="px-4">
          <div className="mt-16 w-full px-2 pb-6 md:w-[65%]">
            <h1 className="text-3xl font-semibold text-blue-950 md:text-5xl">
              Everything You Need to Know About Fleet Management
            </h1>
          </div>
        </section>
        <section className="space-y-10">
          <section className="flex flex-col justify-between md:flex-row">
            <div className="w-full px-4 md:w-3/5">
              <img
                className="contain"
                src="./sample.jpg"
                alt="truelips-image"
              />
            </div>
            <div className="w-full px-4 md:w-[30%] md:pb-12">
              <div className="border-b border-t border-gray-300 text-center">
                <h3 className="mt-12 text-2xl font-semibold">
                  Get Started with Truelips
                </h3>
                <button className="mb-12 mt-4 rounded-lg bg-blue-600 px-4 py-2 font-semibold capitalize text-white">
                  Check our prices
                </button>
              </div>
            </div>
          </section>
          <section className="flex justify-between px-4 text-justify">
            <div className="w-full space-y-10 px-4 md:w-3/5">
              <div>
                <h4 className="uppercase text-blue-600">Key takeaways</h4>
                <p className="mb-4 text-justify">
                  Fleet management tools can help fleet managers gain real-time
                  visibility into their operations while increasing driver
                  satisfaction and decreasing fuel usage through predictive
                  analytics and accurate reporting. That&apos;s why 75% of fleet
                  managers rely on fleet management software or vehicle
                  telematics to help support their day-to-day operations.
                </p>
                <div className="flex space-x-4">
                  {icons.map(({ id, Icon, link }) => (
                    <a
                      key={id}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-full bg-gray-400 text-gray-100 hover:bg-gray-900"
                    >
                      <Icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
              <div id="sec1">
                <h2 className="mb-4 text-left text-2xl font-semibold text-blue-950 md:text-4xl">
                  What is fleet management?
                </h2>
                <p className="mb-8">
                  Any organization that needs commercial vehicles to function
                  engages in some form of fleet operations and fleet management.
                  The purpose of fleet management is to oversee all fleet
                  performance and fleet maintenance in order to increase
                  productivity and help a business run as smoothly as possible.
                </p>
                <p className="mb-8">
                  Fleet managers are in charge of fleet operations and might be
                  tasked with responsibilities that include vehicle maintenance,
                  overseeing fuel consumption and fuel costs, driver management,
                  asset utilization, route planning, and the implementation of
                  any programs that increase company productivity and decrease
                  instances of waste.
                </p>
                <p className="mb-8">
                  Fleet management companies often use vehicle telematics or
                  fleet management software, like Truelips, to increase fleet
                  efficiency and help reduce operational costs.
                </p>
                <p className="mb-8">
                  Fleet management for public fleets such as governments and
                  schools use vehicle telematics data to analyze fleet vehicles,
                  vehicle location, service delivery and coverage, driver
                  behavior, community safety, routing, dispatch units,
                  diagnostics and preventative maintenance so that they can
                  optimize their service their communities and respond to
                  citizens.
                </p>
                <button className="rounded-lg bg-blue-600 px-6 py-2 font-semibold capitalize text-white hover:bg-blue-800">
                  Learn more about Truelips
                </button>
              </div>
              <div id="sec2">
                <h2 className="mb-4 text-left text-2xl font-semibold text-blue-950 md:text-4xl">
                  What does a fleet manager do?
                </h2>
                <p className="mb-8">
                  A fleet manager is responsible for taking care of the
                  following tasks:
                </p>
                <h4 className="mb-4 text-xl font-semibold text-blue-950 md:text-2xl">
                  1. Driver safety
                </h4>
                <p className="mb-8">
                  A major challenge for fleet companies or any fleet manager is
                  keeping drivers safe. Ensuring safe driver behavior can be
                  difficult, particularly when fleet managers are hundreds of
                  miles away from the moving vehicle. There are helpful tools
                  fleet managers can use -- like dash cams or vehicle tracking
                  systems -- that bring real-time visibility into an otherwise
                  remote vehicle and provide evidence or materials to implement
                  driver training.
                </p>
                <h4 className="mb-4 text-xl font-semibold text-blue-950 md:text-2xl">
                  2. Driver retention
                </h4>
                <p className="mb-8">
                  Driver shortages are a growing issue in the trucking industry.
                  Stabilizing and increasing driver retention is something fleet
                  managers need to always aim for. By creating mentorship
                  programs, improving workplace conditions, or simply building
                  stronger trust between driver and manager, fleet managers look
                  to different approaches to ensure drivers are happy at work.
                </p>
                <h4 className="mb-4 text-xl font-semibold text-blue-950 md:text-2xl">
                  3. Fleet tracking
                </h4>
                <p className="mb-8">
                  To ensure driver safety, fleet managers need to know exactly
                  where individual vehicles are at any given time. Although this
                  might seem simple enough, tracking vehicle location can be a
                  challenging feat whether a fleet includes 5 vehicles or 5,000.
                  Fleet managers often rely on GPS technology and other GPS
                  tracking systems to know where their vehicles are and increase
                  visibility into their fleet operations and vehicle safety.
                </p>
                <h4 className="mb-4 text-xl font-semibold text-blue-950 md:text-2xl">
                  4. Electronic Logging Device (ELD) compliance
                </h4>
                <p className="mb-8">
                  The ELD mandate is a congressional mandate that went into
                  effect December 2017 that requires commercial vehicle
                  operators to record Hours of Service (HOS) electronically. The
                  mandate intends to replace paper logging and reduce instances
                  of dangerous driving caused by fatigued drivers. For fleets
                  that are subject to the mandate, fleet managers must implement
                  ELD compliant systems to ensure they have an accurate
                  recording of drive time.
                </p>
                <h4 className="mb-4 text-xl font-semibold text-blue-950 md:text-2xl">
                  5. Total cost reduction
                </h4>
                <p className="mb-8">
                  Whether it&apos;s fuel management or lowering operating costs,
                  fleet managers are expected to identify and weed out any
                  unnecessary expenses to help create more cost-friendly and
                  efficient fleet operations. Operational, fuel and maintenance
                  costs can quickly add up. Whether it&apos;s instating fuel
                  efficiency programs (no matter if fuel prices are high or low)
                  or asset tracking, it&apos;s the fleet manager&apos;s
                  responsibility to determine cost-saving solutions and help a
                  company increase productivity.
                </p>
                <h4 className="mb-4 text-xl font-semibold text-blue-950 md:text-2xl">
                  6. Vehicle acquisition
                </h4>
                <p className="mb-8">
                  In order to effectively manage a fleet, a fleet manager needs
                  to forecast how many and what type of vehicles a fleet will
                  need in order to operate efficiently. It might seem
                  straightforward to purchase new vehicles when the need arises,
                  but correctly understanding and forecasting fleet vehicle
                  utilization is paramount in correctly determining a purchase
                  strategy. Employee eligibility for a vehicle class, vehicle
                  lifecycle, and even market timing are all significant factors
                  that contribute to a sound vehicle acquisition strategy.
                </p>
              </div>
              <div id="sec3">
                <h2 className="mb-4 text-left text-2xl font-semibold text-blue-950 md:text-4xl">
                  What are the benefits of fleet management?
                </h2>
                <p className="mb-8">
                  Managing a fleet of vehicles can be challenging, no matter the
                  fleet size. That&apos;s why over 75% of fleet managers rely on
                  fleet management software or vehicle telematics to help
                  support day-to-day operations in at least some of their
                  vehicles, according to data from Government Fleet’s annual
                  benchmarking survey.
                </p>
                <p className="mb-8">
                  Fleet management software can help fleet managers gain
                  real-time visibility into their operations while increasing
                  driver satisfaction and decreasing fuel usage through
                  predictive analytics and accurate reporting.
                </p>
                <p className="mb-8">
                  Learn how All Aboard America uses Truelips to{" "}
                  <span className="font-bold">
                    reduce fuel usage by 3%, resulting in $140,000 saved in a
                    single year.
                  </span>
                </p>
              </div>
              <div id="sec4">
                <h2 className="mb-4 text-left text-2xl font-semibold text-blue-950 md:text-4xl">
                  What is the best fleet management software?
                </h2>
                <p className="mb-8">
                  Truelips is a system that helps businesses improve the
                  efficiency, safety, and quality of their fleet operations with
                  internet-connected sensors and software. From transportation
                  and logistics to food production and construction, Truelips’s
                  fleet management system can help you stay compliant and
                  streamline your fleet operations. Reach out to us for a demo
                  and free trial today, and watch the video below to learn more
                  about fleet management software.
                </p>
                <img src="./video.jpg" alt="video" />
              </div>
            </div>
            <div className="hidden w-[30%] px-4 md:block">
              <div className="space-x-4 text-blue-600">
                <h4 className="uppercase">Contents</h4>
                <ol className="list-decimal">
                  <li className="border-b border-gray-300">
                    <a href="#sec1">What is fleet management?</a>
                  </li>
                  <li className="border-b border-gray-300">
                    <a href="#sec2">What does a fleet manager do?</a>
                  </li>
                  <li className="border-b border-gray-300">
                    <a href="#sec3">
                      What are the benefits of fleet management?
                    </a>
                  </li>
                  <li className="border-b border-gray-300">
                    <a href="#sec4">
                      What is the best fleet management software?
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Home;
