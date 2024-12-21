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
      <div className="container mx-auto py-10 px-6 grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:underline flex items-center gap-2"
              >
                <span className="text-accent">&gt;</span> About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline flex items-center gap-2"
              >
                <span className="text-accent">&gt;</span> Contact Us
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:underline flex items-center gap-2"
              >
                <span className="text-accent">&gt;</span> Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:underline flex items-center gap-2"
              >
                <span className="text-accent">&gt;</span> Terms & Condition
              </a>
            </li>
            <li>
              <a
                href="/faqs"
                className="hover:underline flex items-center gap-2"
              >
                <span className="text-accent">&gt;</span> FAQs & Help
              </a>
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
            <a href="#" className="hover:text-accent">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-accent">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-accent">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="hover:text-accent">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-lg font-bold mb-4">Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="/images/gallery1.jpg"
              alt="Gallery 1"
              className="w-full h-auto rounded-md"
            />
            <img
              src="/images/gallery2.jpg"
              alt="Gallery 2"
              className="w-full h-auto rounded-md"
            />
            <img
              src="/images/gallery3.jpg"
              alt="Gallery 3"
              className="w-full h-auto rounded-md"
            />
            <img
              src="/images/gallery4.jpg"
              alt="Gallery 4"
              className="w-full h-auto rounded-md"
            />
            <img
              src="/images/gallery5.jpg"
              alt="Gallery 5"
              className="w-full h-auto rounded-md"
            />
            <img
              src="/images/gallery6.jpg"
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
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">
            © Your Site Name, All Rights Reserved. Designed by HTML Codex
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="/home" className="hover:underline">
              Home
            </a>
            <a href="/cookies" className="hover:underline">
              Cookies
            </a>
            <a href="/help" className="hover:underline">
              Help
            </a>
            <a href="/faqs" className="hover:underline">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
