import React, { useState } from "react";

export default function Temperature(props) {
  const [isCelsius, setIsCelsius] = useState(true);

  const celsius = props.data;
  const fahrenheit = Math.round((celsius * 9) / 5 + 32);

  let displayTemp;
  let unitLabel;

  // Decide which unit to display
  if (isCelsius) {
    displayTemp = celsius;
    unitLabel = "C";
  } else {
    displayTemp = fahrenheit;
    unitLabel = "F";
  }

  return (
    <div className="Temperature">
      <h2>
        {displayTemp}
        <span>°{unitLabel}</span>
      </h2>

      <div>
        <button
          onClick={() => setIsCelsius(true)}
          disabled={isCelsius} // active button disabled
        >
          °C
        </button>

        <button
          onClick={() => setIsCelsius(false)}
          disabled={!isCelsius}
        >
          °F
        </button>
      </div>
    </div>
  );
}
