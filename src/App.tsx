import React, { useState } from "react";
import "./App.css";
import CoreConcept from "./components/CoreConcepts";
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";

function App() {
  const [contentIndex, setContentIndex] = useState<number>();

  function handleSelect(contentIndex: number) {
    setContentIndex(contentIndex);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul className="core-concepts">
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((concept, index) => (
              <TabButton
                isSelected={contentIndex === index}
                key={index}
                onSelect={() => handleSelect(index)}
              >
                {concept.title}
              </TabButton>
            ))}
          </menu>
          {contentIndex === undefined && <p>Please select a topic</p>}
          {contentIndex !== undefined && (
            <div id="tab-content">
              <h3>{CORE_CONCEPTS[contentIndex].title}</h3>
              <p>{CORE_CONCEPTS[contentIndex].description}</p>
              <pre>
                <code>{CORE_CONCEPTS[contentIndex].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
