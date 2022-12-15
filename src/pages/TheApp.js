import { useState } from "react";

const TheApp = () => {
  const [country, setCountry] = useState();

  // handle country input
  const handleCountry = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <h2>Search Countries</h2>

      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary w-full max-w-xs mt-8"
        value={country}
        onChange={handleCountry}
      />
    </div>
  );
};

export default TheApp;
