import React from "react";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    document.title = "ixsn | Contact";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-[#1d1c22] text-gray-900 p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-zinc-200 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </header>

      <div className="max-w-2xl mx-auto bg-gray-700/20 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-200 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full focus:border-none bg-transparent px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-200 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border bg-transparent border-gray-300 focus:border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-200 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300  bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-none"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-200 text-black  hover:text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-2xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-semibold text-zinc-200 mb-4">
          Follow us on social media:
        </h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://twitter.com/ixsnmovies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-purple-300"
          >
            <i class="ri-twitter-x-fill text-3xl"></i>{" "}
          </a>
          <a
            href="https://facebook.com/ixsnmovies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 hover:text-purple-300"
          >
            <i className="ri-facebook-fill text-3xl"></i>
          </a>
          <a
            href="https://instagram.com/ixsnmovies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 hover:text-purple-300"
          >
            <i className="ri-instagram-line text-3xl"></i>
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-semibold text-zinc-50 mb-4">
          Alternatively, reach out to us directly:
        </h2>
        <p className="text-lg text-gray-100 mb-2">
          Email:{" "}
          <a
            href="mailto:support@ixsnmovies.com"
            className="text-zinc-300 hover:underline"
          >
            support@ixsnmovies.com
          </a>
        </p>
        <p className="text-lg text-gray-100">
          Phone:{" "}
          <a href="tel:+1234567890" className="text-zinc-300 hover:underline">
            +977 9834562309
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
