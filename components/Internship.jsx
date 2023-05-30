import Link from "next/link";
import React from "react";

const Benefits = () => {
  const benefits = [
    "Hands-on experience in working with embedded systems",
    "Opportunity to learn and apply industry best practices",
    "Exposure to the latest technologies and tools",
    "Mentorship from experienced professionals",
    "Networking opportunities with industry leaders",
  ];

  return (
    <div id="internship" className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-blue-900 mb-4">
        Benefits of our Internship Program
      </h3>
      <ul className="list-disc ml-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="mb-2">
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Internship = () => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-900">Internship</h2>
      <p className="mb-6">
        Are you passionate about embedded systems and looking to gain practical
        experience? Our internship program offers an exciting opportunity to
        work on real-world projects and learn from industry experts.
      </p>
      <p className="mb-6">
        As an intern at EmbeddedTech, you will have the chance to collaborate
        with our talented team and contribute to the development of cutting-edge
        embedded products. Whether you&apos;re interested in hardware design,
        firmware development, or software programming, our internship program
        provides a supportive and engaging environment for your growth.
      </p>
      <Benefits />
      <p>
        Join us today and kickstart your career in the exciting field of
        embedded systems. Apply now for our internship program and unlock your
        potential.
      </p>
      <Link
        href="/application"
        className="mt-10 inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-blue-400 transition-colors duration-300"
      >
        Apply Now
      </Link>
    </div>
  );
};

export default Internship;
