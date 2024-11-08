import { useState } from "react";
import Login from "./components/Login";
import LeadForm from "./components/LeadForm";
import EnrichedData from "./components/EnrichedData";

function App() {
  const [user, setUser] = useState(null);
  const [enrichedData, setEnrichedData] = useState(null);

  return (
    <div className=" bg-gradient-to-br from-neutral-50 via-neutral-400 to-neutral-900 w-full h-full min-h-screen">
      <h1 className="text-4xl sm:top-7 border-b-4 px-1 rounded-md border-neutral-950 w-fit font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg text-center">
        LeadIntel
      </h1>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <LeadForm setEnrichedData={setEnrichedData} />
          <EnrichedData data={enrichedData} />
        </>
      )}
    </div>
  );
}

export default App;
