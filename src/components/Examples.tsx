import { useState } from "react";
import { CORE_CONCEPTS } from "../data";
import TabButton from "./TabButton";

export function Examples() {
  const [contentIndex, setContentIndex] = useState<number>();

  function handleSelect(contentIndex: number) {
    setContentIndex(contentIndex);
  }

  return (
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
  );
}
