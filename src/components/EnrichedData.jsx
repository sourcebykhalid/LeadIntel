import React from "react";

function EnrichedData({ data }) {
  // Check if data or data.data is null/undefined before destructuring
  if (!data || !data.data) {
    return (
      <div className="text-center text-xl text-gray-500">No data available</div>
    ); // Loading or error message
  }

  const {
    company_name,
    linkedin_url,
    description,
    logo_url,
    employee_count,
    industries,
    specialties,
    website,
    follower_count,
    funding_info,
  } = data.data; // Safely destructuring assuming data.data holds the company info

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">{company_name}</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Company Overview */}
        <div className="bg-white rounded-lg shadow p-6">
          <img
            src={logo_url}
            alt={`${name} logo`}
            className="h-24 w-24 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-700">{description}</p>
          <a
            href={linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-2 inline-block hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* Company Details */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Company Details</h3>
          <p>
            <span className="font-medium">Staff Count:</span> {employee_count}
          </p>
        </div>
      </div>

      {/* Specialities */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Specialities</h3>
        <div className="flex flex-wrap gap-2 bg-neutral-300 px-3 py-2 rounded-sm border-b-2 border-neutral-600  font-bold">
          {specialties}
        </div>
      </div>

      {/* Industries */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Industries</h3>
        <ul className="list-disc list-inside text-gray-700">
          {industries?.map((industry, index) => (
            <li key={index}>{industry}</li>
          ))}
        </ul>
      </div>

      {/* Website and Followers */}
      <div className="mt-8 bg-white rounded-lg shadow p-6 flex flex-col items-start">
        <h3 className="text-xl font-semibold mb-2">Website</h3>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {website}
        </a>
        <p className="text-gray-700 mt-2">
          <span className="font-medium">Followers:</span> {follower_count}
        </p>
      </div>

      {/* Funding Information */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-2">Funding Information</h3>
        <p>
          <span className="font-medium">Rounds:</span>{" "}
          {funding_info?.num_funding_rounds}
        </p>
        {funding_info?.last_funding_round_amount && (
          <>
            <p>
              <span className="font-medium">Last Round:</span>{" "}
              {funding_info.last_funding_round_amount}
            </p>
            <p>
              <span className="font-medium">Announced On:</span>{" "}
              {`${funding_info.last_funding_round_month}-${funding_info.last_funding_round_year}`}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default EnrichedData;
