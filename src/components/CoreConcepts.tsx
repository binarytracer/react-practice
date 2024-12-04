import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul className="core-concepts">
        {CORE_CONCEPTS.map((concept, index) => (
          <CoreConcept key={index} {...concept} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
