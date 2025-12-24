import { CoreConcept as CoreConceptType } from "../data";

function CoreConcept(props: CoreConceptType) {
  const { title, description, image } = props;

  return (
    <li>
      <img src={image} alt={description} />
      <h3>{title}</h3>
      Description: {description} <br />
    </li>
  );
}

export default CoreConcept;
