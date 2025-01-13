import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-purple-700 mb-4">
          About Ixsn Movies
        </h1>
        <p className="text-lg text-gray-600">
          Your ultimate destination for discovering, exploring, and enjoying the
          world of cinema.
        </p>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Section 1: What is Ixsn Movies? */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            What is Ixsn Movies?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ixsn Movies is a cutting-edge platform designed for movie
            enthusiasts. Whether you're looking for the latest blockbusters,
            timeless classics, or hidden gems, we've got you covered. Our
            mission is to provide a seamless and enjoyable experience for
            discovering, watching, and discussing movies.
          </p>
        </section>

        {/* Section 2: Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Discover Movies
              </h3>
              <p className="text-gray-700">
                Explore a vast library of movies from all genres, curated just
                for you.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Watch Trailers
              </h3>
              <p className="text-gray-700">
                Watch trailers and get a sneak peek of upcoming releases.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Personalized Recommendations
              </h3>
              <p className="text-gray-700">
                Get movie recommendations tailored to your taste.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us? */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Why Choose Ixsn Movies?
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Extensive collection of movies from all genres.</li>
            <li>User-friendly interface for seamless navigation.</li>
            <li>Regular updates with the latest releases and trends.</li>
            <li>Community-driven reviews and discussions.</li>
          </ul>
        </section>

        {/* Section 4: Meet the Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                John Doe
              </h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Jane Smith
              </h3>
              <p className="text-gray-700">Lead Developer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Alice Johnson
              </h3>
              <p className="text-gray-700">Content Curator</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-purple-50 rounded-lg">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">
            Join the Ixsn Movies Community
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Start exploring the world of cinema today. Sign up now and never
            miss a movie!
          </p>
          <button className="bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-purple-800 transition-colors">
            Sign Up Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
