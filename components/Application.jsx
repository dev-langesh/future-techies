import Link from "next/link";
import React, { useState } from "react";
import Loading from "./common/Loading";

const InternshipApplicationForm = () => {
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [branch, setBranch] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [email, setEmail] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const degree = formData.get("degree");
    const year = formData.get("year");
    const specialization = formData.get("specialization");
    const email = formData.get("email");

    // Perform form field validation
    if (!name || !degree || !year || !specialization || !email) {
      // Display an error message or handle the validation error
      alert("Fill all the fields");
      return;
    }

    const body = Object.fromEntries(formData.entries());

    try {
      setLoading(true);

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      setLoading(false);

      if (response.ok) {
        alert("Application Sent");

        window.location.href = "/";
      } else {
        // Failed to send email
        // Handle the error (e.g., show an error message)
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle the error (e.g., show an error message)
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-blue-50 flex justify-center items-center p-8">
      <div className=" p-6 rounded-md bg-white shadow-lg">
        <h2 className="text-3xl text-blue-700 font-bold mb-6">
          Internship Application Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-blue-700 font-semibold mb-2 block"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-blue-200 rounded-md p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="degree"
              className="text-blue-700 font-semibold mb-2 block"
            >
              Degree & Branch
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              className="w-full border border-blue-200 rounded-md p-2"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="yearOfStudy"
              className="text-blue-700 font-semibold mb-2 block"
            >
              Year of Study
            </label>
            <input
              type="text"
              id="yearOfStudy"
              name="year"
              className="w-full border border-blue-200 rounded-md p-2"
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="specialization"
              className="text-blue-700 font-semibold mb-2 block"
            >
              Specialization
            </label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              className="w-full border border-blue-200 rounded-md p-2"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-blue-700 font-semibold mb-2 block"
            >
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-blue-200 rounded-md p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cvFile"
              className="text-blue-700 font-semibold mb-2 block"
            >
              Upload CV
            </label>
            <input
              type="file"
              id="cvFile"
              name="cvFile"
              required
              className="w-full border border-blue-200 rounded-md p-2"
              onChange={(e) => setCvFile(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
          <Link
            href="/"
            className="border border-blue-700 ml-5 text-blue-700 py-2 px-4 rounded-md "
          >
            Back{" "}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default InternshipApplicationForm;
