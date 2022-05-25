import './App.css';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero_section/hero';
export default function App() {
  return (
    <>
      <Navbar btnValue={'nothing'} />
      <Hero />
    </>
  );
}
