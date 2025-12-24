import reactCoreConceptsImg from "../assets/react-core-concepts.png";

const descriptions = ["Fundamental", "Core", "Amazing"];

function getRandomDescription() {
  const randomIndex = Math.floor(Math.random() * descriptions.length);
  return descriptions[randomIndex];
}

export default function Header() {
  const description = getRandomDescription();

  return (
    <header>
      <img src={reactCoreConceptsImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
