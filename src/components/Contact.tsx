import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

// To use the "Bricolage Grotesque" font, first add it from Google Fonts to your project's HTML file:
// <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet">
//
// Then, add the font family to your tailwind.config.js:
// theme: {
//   extend: {
//     fontFamily: {
//       bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
//     },
//   },
// },

const ContactSection = () => {
  return (
    // Add the 'font-bricolage' class here to apply the new font
    <div className="bg-gray-100 font-bricolage w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-10">
              Get in touch
            </h1>
            <div className="space-y-6 text-base sm:text-lg text-gray-700">
              <div>
                <p className="font-medium text-gray-500">Email:</p>
                <a href="mailto:Moneta@gmail.com" className="hover:text-black transition-colors">
                hello@storiesatscale.in
                </a>
              </div>
              <div>
                <p className="font-medium text-gray-500">Phone:</p>
                <a href="tel:+17631683" className="hover:text-black transition-colors">
                +91 7425882688
                </a>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-12">
              <p className="font-medium text-gray-500 mb-3">Follow us</p>
              <div className="flex space-x-3">
                <a href="#" className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2 pl-4">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2 pl-4">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full px-6 py-4 bg-white rounded-full border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2 pl-4">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={8}
                  placeholder="Write something...."
                  className="w-full px-6 py-4 bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
