import React, { useState } from "react";
import getCompanyData from "../api/linkedinAPI";

function LeadForm({ setEnrichedData }) {
  const [companyDomain, setCompanyDomain] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getCompanyData(companyDomain);
      setEnrichedData(data);
    } catch (error) {
      console.error("Failed to fetch company data:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10"
    >
      <h2 className="text-2xl font-semibold text-white mb-4 text-center">
        Company Data Lookup
      </h2>
      <div className="mb-6">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="companyDomain"
        >
          Company Domain
        </label>
        <input
          type="text"
          id="companyDomain"
          value={companyDomain}
          onChange={(e) => setCompanyDomain(e.target.value)}
          placeholder="Enter company domain (e.g., apple.com)"
          className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent text-gray-800 placeholder-gray-400"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 mt-4 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        Fetch LinkedIn Data
      </button>
    </form>
  );
}

export default LeadForm;
