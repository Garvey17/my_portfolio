import { Code, Server, Layers } from 'lucide-react'; // Optional icons

const services = [
  {
    title: "Frontend Development",
    icon: <Code className="w-8 h-8 text-blue-600" />,
    description:
      "Responsive and modern interfaces using React, Tailwind CSS, and cutting-edge design patterns.",
  },
  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8 text-green-600" />,
    description:
      "Scalable and secure RESTful APIs and server logic with Node.js, Express, and databases like MongoDB or PostgreSQL.",
  },
  {
    title: "Fullstack Solutions",
    icon: <Layers className="w-8 h-8 text-purple-600" />,
    description:
      "End-to-end application development — seamlessly integrating frontend and backend for complete solutions.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-[#fffff] font-montserrat" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className=" text-[2rem] sm:text-3xl md:text-5xl lg:text-8xl mb-4 font-aeonik">My Services</h2>
        <p className="text-gray-600 mb-12">
          I offer a full range of development services tailored to meet your project’s needs.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-black p-6 hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
