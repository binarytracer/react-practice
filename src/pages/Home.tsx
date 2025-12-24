import Header from '../components/Header';
import CoreConcepts from '../components/CoreConcepts';
import { Examples } from '../components/Examples';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

