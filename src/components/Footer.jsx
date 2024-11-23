import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const links = [
  { id: 1, text: "Privacy Policy", to: "/privacy-policy" },
  { id: 2, text: "Candidate Privacy Notice", to: "/candidate-privacy-notice" },
  { id: 3, text: "Website Terms of Service", to: "/terms-of-service" },
  { id: 4, text: "Cookie Policy", to: "/cookie-policy" },
  { id: 5, text: "Your Privacy Choices", to: "/privacy-choices" },
  { id: 6, text: "Hardware Warranty", to: "/hardware-warranty" },
  { id: 7, text: "Product Terms of Service", to: "/product-terms-of-service" },
  { id: 8, text: "Hosted Software SLA", to: "/software-sla" },
  { id: 9, text: "Partner Code of Conduct", to: "/partner-code" },
  { id: 10, text: "Data Protection Addendum", to: "/data-protection" },
  { id: 11, text: "Modern Slavery Statement", to: "/modern-slavery-statement" },
];

function Footer() {
  return (
    <footer className="w-full bg-blue-950 py-12 text-white">
      <div className="mx-auto w-full px-4 md:max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="">
            <h3 className="text-2xl font-bold">Truelips</h3>
          </div>

          <div>
            <h3 className="text-lg font-bold">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/products/platform" className="hover:underline">
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link to="/products/safety" className="hover:underline">
                  Video-Based Safety
                </Link>
              </li>
              <li>
                <Link to="/products/telematics" className="hover:underline">
                  Vehicle Telematics
                </Link>
              </li>
              <li>
                <Link
                  to="/products/apps-and-workflows"
                  className="hover:underline"
                >
                  Workforce Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/products/equipment-monitoring"
                  className="hover:underline"
                >
                  Equipment Monitoring
                </Link>
              </li>
              <li>
                <Link
                  to="/products/site-visibility"
                  className="hover:underline"
                >
                  Site Visibility
                </Link>
              </li>
              <li>
                <Link to="/products/models" className="hover:underline">
                  Hardware
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:underline">
                  Explore More Products
                </Link>
              </li>
            </ul>
            <h3 className="mt-12 text-lg font-bold">Integrations</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/products/telematics/oem-integrations"
                  className="hover:underline"
                >
                  OEM Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/products/app-marketplace"
                  className="hover:underline"
                >
                  App Marketplace
                </Link>
              </li>
              <li>
                <Link to="/resouces/experts" className="hover:underline">
                  Expert Marketplace
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Resources </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/customers" className="hover:underline">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link to="/hc/en-us" className="hover:underline">
                  Support Center
                </Link>
              </li>
              <li>
                <Link to="/referrals" className="hover:underline">
                  Customer Referral Program
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/partner-programs"
                  className="hover:underline"
                >
                  Partner Programs
                </Link>
              </li>
              <li>
                <Link to="/guides" className="hover:underline">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/resources/tour" className="hover:underline">
                  Product Tours
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="hover:underline">
                  Webinars
                </Link>
              </li>
              <li>
                <Link to="/resources/brand-assets" className="hover:underline">
                  Brand Assets
                </Link>
              </li>
            </ul>
            <h3 className="mt-12 text-lg font-bold">For Developers</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/support/developers" className="hover:underline">
                  Developers
                </Link>
              </li>
              <li>
                <Link to="/developers/changelog" className="hover:underline">
                  API Changelog
                </Link>
              </li>
              <li>
                <Link to="/api" className="hover:underline">
                  Developer APIs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/diversity" className="hover:underline">
                  Diversity
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:underline">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/investor-relations" className="hover:underline">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link to="/samsara-ventures" className="hover:underline">
                  Samsara Ventures
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:underline">
                  News
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:underline">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <select
            name="country "
            className="border bg-blue-950 px-4 py-2 text-white"
          >
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="india">India</option>
            <option value="canada">Canada</option>
            <option value="brazil">Brazil</option>
          </select>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 text-gray-300 hover:text-white"
            >
              <FaFacebookF className="size-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 text-gray-300 hover:text-white"
            >
              <FaTwitter className="size-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 text-gray-300 hover:text-white"
            >
              <FaLinkedinIn className="size-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <button className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
            Check Our Prices
          </button>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-400 md:flex-row">
          <div className="flex w-full flex-wrap gap-2 text-sm text-white md:w-3/5">
            {links.map(({ id, text, to }, index) => (
              <div
                key={id}
                className={`flex items-center ${
                  index < links.length - 1
                    ? "border-r border-gray-400 pr-3"
                    : ""
                }`}
              >
                <Link to={to} className="whitespace-nowrap hover:underline">
                  {text}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center">© 2024 Truelips. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
