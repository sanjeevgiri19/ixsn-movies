import React, { useEffect } from "react";
import NoPoster from "/noImagePoster.webp";


const AboutPage = () => {

  useEffect(() => {
  document.title = "ixsn | About";
}, []);

  return (
    <div className="min-h-screen bg-[#1d1c22] text-zinc-300 p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-zinc-300 mb-4">
          About Ixsn Movies
        </h1>
        <p className="text-lg text-zinc-300">
          Your ultimate destination for discovering, exploring, and enjoying the
          world of cinema.
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-zinc-300 mb-4">
            What is Ixsn Movies?
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Ixsn Movies is a cutting-edge platform designed for movie
            enthusiasts. Whether you're looking for the latest blockbusters,
            timeless classics, or hidden gems, we've got you covered. Our
            mission is to provide a seamless and enjoyable experience for
            discovering, watching, and discussing movies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-zinc-100 mb-4">
            Features
          </h2>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className=" p-6 rounded-lg bg-gray-700/40 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-zinc-200 mb-2">
                Discover Movies
              </h3>
              <p className="text-gray-200">
                Explore a vast library of movies from all genres, curated just
                for you.
              </p>
            </div>

            <div className="bg-gray-700/40 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-zinc-300 mb-2">
                Watch Trailers
              </h3>
              <p className="text-gray-300">
                Watch trailers and get a sneak peek of upcoming releases.
              </p>
            </div>

            <div className="bg-gray-700/40 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-zinc-300 mb-2">
                Personalized Recommendations
              </h3>
              <p className="text-gray-300">
                Get movie recommendations tailored to your taste.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-zinc-200 mb-4">
            Why Choose Ixsn Movies?
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
            <li>Extensive collection of movies from all genres.</li>
            <li>User-friendly interface for seamless navigation.</li>
            <li>Regular updates with the latest releases and trends.</li>
            <li>Community-driven reviews and discussions.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-zinc-200 mb-4">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700/40 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={NoPoster}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-zinc-300 mb-2">
                John Doe
              </h3>
              <p className="text-gray-300">Founder & CEO</p>
            </div>

            <div className="bg-gray-700/40 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={NoPoster}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-zinc-200 mb-2">
                Jane Smith
              </h3>
              <p className="text-gray-300">Lead Developer</p>
            </div>

            <div className="bg-gray-700/40 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={NoPoster}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-zinc-200 mb-2">
                Alice Johnson
              </h3>
              <p className="text-gray-300">Content Curator</p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-gray-700/40 rounded-lg">
          <h2 className="text-3xl font-semibold text-zinc-200 mb-4">
            Join the Ixsn Movies Community
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Start exploring the world of cinema today. Sign up now and never
            miss a movie!
          </p>
          <button className="bg-gray-300 text-black px-8 py-3 rounded-lg hover:bg-purple-800 hover:text-white font-medium transition-colors">
            Sign Up Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
