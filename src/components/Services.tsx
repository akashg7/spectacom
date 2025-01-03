import { Server, Wifi, Shield, Settings } from 'lucide-react';

const services = [
  {
    icon: <Server className="w-12 h-12 text-blue-600" />,
    title: 'Network Infrastructure',
    description: 'Complete networking solutions for your business needs'
  },
  {
    icon: <Wifi className="w-12 h-12 text-blue-600" />,
    title: 'Wireless Solutions',
    description: 'High-performance wireless connectivity solutions'
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: 'Security Systems',
    description: 'Advanced security systems for complete protection'
  },
  {
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    title: 'IT Services',
    description: 'Comprehensive IT support and maintenance services'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of technology solutions to meet your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}