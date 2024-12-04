interface CoreConceptProps {
  title: string;
  description?: string;
  image?: string;
}

function CoreConcept(props: CoreConceptProps) {
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
