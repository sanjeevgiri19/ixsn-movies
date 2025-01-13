import React from "react";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-purple-700 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </header>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-purple-800 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-2xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Follow us on social media:
        </h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://twitter.com/ixsnmovies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-800"
          >
            <i className="ri-twitter-fill text-3xl"></i>
          </a>
          <a
            href="https://facebook.com/ixsnmovies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-800"
          >
            <i className="ri-facebook-fill text-3xl"></i>
          </a>
          <a
            href="https://instagram.com/ixsnmovies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-800"
          >
            <i className="ri-instagram-line text-3xl"></i>
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-2xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Alternatively, reach out to us directly:
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          Email:{" "}
          <a
            href="mailto:support@ixsnmovies.com"
            className="text-purple-700 hover:underline"
          >
            support@ixsnmovies.com
          </a>
        </p>
        <p className="text-lg text-gray-700">
          Phone:{" "}
          <a href="tel:+1234567890" className="text-purple-700 hover:underline">
            +1 (234) 567-890
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
