import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">About Spectacom</h2>
            <p className="text-gray-600 mb-6">
              With over a decade of experience in the technology industry, Spectacom has been at the forefront of providing innovative solutions to businesses across various sectors.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experts is dedicated to delivering high-quality services and solutions that help our clients achieve their business objectives through technology.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-2">10+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-2">500+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}