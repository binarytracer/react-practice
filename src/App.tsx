import React, { useState } from "react";
import "./App.css";
import CoreConcept from "./components/CoreConcepts";
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";

function App() {
  const [firstConcept] = CORE_CONCEPTS;
  const [selectedContent, selectContent] = useState(firstConcept.description);

  function handleSelect(description: string) {
    selectContent(description);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul className="core-concepts">
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((concept) => (
              <TabButton onSelect={() => handleSelect(concept.description)}>
                {concept.title}
              </TabButton>
            ))}
          </menu>
          {selectedContent}
        </section>
      </main>
    </div>
  );
}

export default App;
