import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className=" py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-blue-900 font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have any questions or inquiries? Feel free to reach out to us using
          the contact information below or by filling out the form. We would
          love to hear from you!
        </p>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-6">
            <h3 className="text-xl text-blue-900 font-bold mb-2">
              Contact Information
            </h3>
            <p className="text-gray-700">
              Address: Brigade tower, Graphite Main Road , Bengaluru{" "}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl text-blue-900 font-bold mb-2">
              Contact Form
            </h3>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
