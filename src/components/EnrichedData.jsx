import React from "react";

function EnrichedData({ data }) {
  // Check if data or data.data is null/undefined before destructuring
  if (!data || !data.data) {
    return (
      <div className="text-center text-xl text-gray-500">No data available</div>
    ); // Loading or error message
  }

  const {
    name,
    linkedinUrl,
    description,
    images,
    staffCount,
    industries,
    specialities,
    website,
    followerCount,
    fundingData,
  } = data.data; // Safely destructuring assuming data.data holds the company info

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">{name}</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Company Overview */}
        <div className="bg-white rounded-lg shadow p-6">
          <img
            src={images?.logo}
            alt={`${name} logo`}
            className="h-24 w-24 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-700">{description}</p>
          <a
            href={linkedinUrl}
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
            <span className="font-medium">Staff Count:</span> {staffCount}
          </p>
        </div>
      </div>

      {/* Specialities */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Specialities</h3>
        <div className="flex flex-wrap gap-2">
          {specialities?.map((speciality, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {speciality}
            </span>
          ))}
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
          <span className="font-medium">Followers:</span> {followerCount}
        </p>
      </div>

      {/* Funding Information */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-2">Funding Information</h3>
        <p>
          <span className="font-medium">Rounds:</span>{" "}
          {fundingData?.numFundingRounds}
        </p>
        {fundingData?.lastFundingRound && (
          <>
            <p>
              <span className="font-medium">Last Round:</span>{" "}
              {fundingData.lastFundingRound.fundingType}
            </p>
            <p>
              <span className="font-medium">Announced On:</span>{" "}
              {`${fundingData.lastFundingRound.announcedOn.month}-${fundingData.lastFundingRound.announcedOn.day}-${fundingData.lastFundingRound.announcedOn.year}`}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default EnrichedData;
