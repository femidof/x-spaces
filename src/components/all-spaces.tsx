"use client";

import { useEffect, useState } from "react";

export default function AllSpaces() {
  const [spaces, setSpaces] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        console.log("FETCHING SPACES");
        const response = await fetch("/api/twitter/spaces", {
          method: "GET",
        });
        console.log("Response:" + JSON.stringify(response.statusText, null, 2));
        if (!response.ok) {
          throw new Error("Failed to fetch spaces");
        }

        const data = await response.json();
        setSpaces(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchSpaces();
  }, []);

  return (
    <div>
      <h1>Twitter Spaces</h1>
      {error && <p>Error: {error}</p>}
      {spaces ? (
        <pre>{JSON.stringify(spaces, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
