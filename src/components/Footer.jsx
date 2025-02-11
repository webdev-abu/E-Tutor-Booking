import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-white">
      {/* Top Section */}
      <div className="w-11/12 mx-auto py-10 grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about-us"
                className="hover:underline flex items-center gap-2"
              >
                <span className="text-accent">&gt;</span> About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:underline flex items-center gap-2"
              >
                <span className="text-accent">&gt;</span> Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:underline flex items-center gap-2"
              >
                <span className="text-accent">&gt;</span> Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:underline flex items-center gap-2"
              >
                <span className="text-accent">&gt;</span> Terms & Condition
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="hover:underline flex items-center gap-2"
              >
                <span className="text-accent">&gt;</span> FAQs & Help
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Street, New York, USA
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +012 345 67890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@example.com
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <Link to="#" className="hover:text-accent">
              <FaFacebook size={20} />
            </Link>
            <Link to="#" className="hover:text-accent">
              <FaTwitter size={20} />
            </Link>
            <Link to="#" className="hover:text-accent">
              <FaYoutube size={20} />
            </Link>
            <Link to="#" className="hover:text-accent">
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-lg font-bold mb-4">Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://i.ibb.co/5BH1N5X/course-3.jpg"
              alt="Gallery 1"
              className="w-full h-auto rounded-md"
            />
            <img
              src="https://i.ibb.co/194ZMqy/cat-2.jpg"
              alt="Gallery 2"
              className="w-full h-auto rounded-md"
            />
            <img
              src="https://i.ibb.co/5BH1N5X/course-3.jpg"
              alt="Gallery 3"
              className="w-full h-auto rounded-md"
            />
            <img
              src="https://i.ibb.co/5BH1N5X/course-3.jpg"
              alt="Gallery 4"
              className="w-full h-auto rounded-md"
            />
            <img
              src="https://i.ibb.co/194ZMqy/cat-2.jpg"
              alt="Gallery 5"
              className="w-full h-auto rounded-md"
            />
            <img
              src="https://i.ibb.co/5BH1N5X/course-3.jpg"
              alt="Gallery 6"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="mb-4">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full rounded-l-md"
            />
            <button className="btn btn-accent rounded-none rounded-r-md">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-base-200 text-base-content py-4">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">
            © E-Tutors, All Rights Reserved. Designed by Abu Tahir
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/" className="hover:underline">
              Cookies
            </Link>
            <Link to="/" className="hover:underline">
              Help
            </Link>
            <Link to="/" className="hover:underline">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
