import React from "react";

const Introduction = () => {
  return (
    <section className="bg-blue-500 rounded-lg text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl text-gray-900 font-bold mb-4">Welcome to Future Techies</h2>
        <p className="text-lg mb-8">
          At Future Techies, we are dedicated to providing high-quality embedded products and offering exciting internship opportunities. With our passion for innovation and a team of skilled professionals, we strive to drive technological advancements and empower individuals to thrive in the world of IoT.
              </p>
        <p className="text-lg mb-8">
          Our wide range of embedded products includes cutting-edge sensors, controllers, and modules that enable seamless connectivity and intelligent automation. Whether you are a hobbyist, student, or industry professional, our products are designed to meet your specific needs and unlock the potential of IoT in your projects.
        </p>
        <p className="text-lg">
          Additionally, we offer internship programs that provide hands-on experience in IoT development, allowing aspiring individuals to learn from industry experts and work on real-world projects. Our internships are tailored to enhance your skills in sensor integration, data analysis, cloud computing, and more, preparing you for a successful career in the rapidly evolving field of IoT.
        </p>
        <button className="mt-10 bg-gray-900 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-blue-400 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Introduction;
