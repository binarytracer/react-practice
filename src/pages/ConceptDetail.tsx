import { useParams, Link } from 'react-router-dom';
import { CORE_CONCEPTS } from '../data';

export default function ConceptDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const concept = CORE_CONCEPTS.find(
    (c) => c.title.toLowerCase() === slug?.toLowerCase()
  );

  if (!concept) {
    return (
      <div className="concept-detail">
        <h2>Concept not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="concept-detail">
      <Link to="/" className="back-link">← Back to Home</Link>
      <article>
        <img src={concept.image} alt={concept.title} />
        <h1>{concept.title}</h1>
        <p>{concept.description}</p>
      </article>
    </div>
  );
}

