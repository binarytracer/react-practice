import { Link } from "react-router-dom";
import { CoreConcept as CoreConceptType } from "../data";

function CoreConcept(props: CoreConceptType) {
  const { title, description, image } = props;

  return (
    <li>
      <Link to={`/concept/${title.toLowerCase()}`}>
        <img src={image} alt={description} />
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </li>
  );
}

export default CoreConcept;
