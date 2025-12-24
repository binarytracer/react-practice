import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header";

// Simulated API fetch - replace with real API when ready
const fetchRandomFact = async (): Promise<{ fact: string }> => {
  // Using a public API for demo
  const res = await fetch("https://catfact.ninja/fact");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export default function Playground() {
  const [count, setCount] = useState(0);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["randomFact"],
    queryFn: fetchRandomFact,
    enabled: false, // Don't fetch on mount
  });

  return (
    <>
      <Header />
      <main>
        <div className="playground">
          <h1>🧪 Playground</h1>
          <p>Experiment with React concepts here!</p>

          <section className="playground-section">
            <h2>State Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
            <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </section>

          <section className="playground-section">
            <h2>TanStack Query Example</h2>
            <button onClick={() => refetch()} disabled={isLoading}>
              {isLoading ? "Loading..." : "Fetch Random Cat Fact"}
            </button>
            {isError && <p className="error">Error fetching data</p>}
            {data && <p className="fact">{data.fact}</p>}
          </section>
        </div>
      </main>
    </>
  );
}
