import { Users, Building2, MapPin } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    number: "2 mn+",
    label: "Community"
  },
  {
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    number: "2000+",
    label: "Corporates"
  },
  {
    icon: <MapPin className="w-8 h-8 text-blue-600" />,
    number: "1000+",
    label: "Cities"
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card text-center">
              {stat.icon}
              <h3 className="text-4xl font-bold text-gray-900 mt-4 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}