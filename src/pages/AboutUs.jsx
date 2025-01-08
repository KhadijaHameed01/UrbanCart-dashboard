import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-off-white text-gray-800">
      {/* Header Section */}
      <header className="bg-ff5e14 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Urban Gallery</h1>
          <p className="mt-4 text-lg">
            Discover the perfect blend of variety and reliability.
          </p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed">
            At Urban Gallery, we started with a vision: to provide a seamless
            shopping experience where customers can find a wide range of
            products with guaranteed quality and trust. Our journey is driven by
            passion and dedication to bring the best to our community.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg leading-relaxed">
              Urban Gallery is your go-to place for everything from fashion to
              home essentials, electronics, and more. We carefully curate our
              collections to bring you unmatched quality and an incredible
              variety.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Urban Gallery Products"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Wide variety of high-quality products.</li>
            <li>Unmatched reliability and trust.</li>
            <li>Exceptional customer service.</li>
            <li>Fast and secure delivery options.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-2xl font-bold mb-4">Join Us Today</h2>
          <p className="text-lg leading-relaxed mb-6">
            Explore our collections and experience the Urban Gallery difference.
          </p>
          <a
            href="/shop"
            className="bg-ff5e14 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
          >
            Browse Collections
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ff5e14 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Urban Gallery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
