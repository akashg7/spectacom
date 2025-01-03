import { Activity, Target, Ticket, Heart, Building, Film } from 'lucide-react';

const features = [
  {
    icon: <Activity className="w-12 h-12 text-blue-600" />,
    title: "Health & Wellness App",
    description: "Holistic, vernacular, full of data science, ready to hold your hand and take those first crucial steps with you"
  },
  {
    icon: <Target className="w-12 h-12 text-blue-600" />,
    title: "Obstacle Race",
    description: "The Devils Circuit is not where you compete physically, but where you break your mental barriers"
  },
  {
    icon: <Ticket className="w-12 h-12 text-blue-600" />,
    title: "Ticketing Platform",
    description: "The one place to find curated sports & fitness competitions to join in. No clutter, only sport"
  },
  {
    icon: <Heart className="w-12 h-12 text-blue-600" />,
    title: "Health & Wellness",
    description: "We build engaging platforms that enable consumers to get healthier, and more active"
  },
  {
    icon: <Building className="w-12 h-12 text-blue-600" />,
    title: "Corporate Wellness",
    description: "A curated dashboard that empowers you with insightful data on employee health"
  },
  {
    icon: <Film className="w-12 h-12 text-blue-600" />,
    title: "Media Properties",
    description: "We're storytellers, capturing the essence of adventure, health, and lifestyle through captivating content"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Universe</h2>
        <p className="section-subtitle text-center">
          We build engaging platforms that enable consumers to get healthier, and more active
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}