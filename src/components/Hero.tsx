import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-blue-400">Spectacom Global</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            We Build communities around health and fitness.
          </p>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            At Spectacom Global, we're more than just a company - we're a multi-faceted powerhouse of innovation, 
            dedicated to bringing about positive transformations and enhancing lifestyles. Our diverse portfolio 
            of businesses spans across the realms of entertainment, technology, and health and wellness.
          </p>
          <a 
            href="#features"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold group"
          >
            Explore Our Universe
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}