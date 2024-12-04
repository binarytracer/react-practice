import { useState } from "react";
import { CORE_CONCEPTS } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export function Examples() {
  const [contentIndex, setContentIndex] = useState<number>();

  function handleSelect(contentIndex: number) {
    setContentIndex(contentIndex);
  }

  let tabContent = <p>Please select a topic</p>;

  if (contentIndex !== undefined) {
    tabContent = (
      <div id="tab-content">
        <h3>{CORE_CONCEPTS[contentIndex].title}</h3>
        <p>{CORE_CONCEPTS[contentIndex].description}</p>
        <pre>
          <code>{CORE_CONCEPTS[contentIndex].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            {CORE_CONCEPTS.map((concept, index) => (
              <TabButton
                isSelected={contentIndex === index}
                key={index}
                onClick={() => handleSelect(index)}
              >
                {concept.title}
              </TabButton>
            ))}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
