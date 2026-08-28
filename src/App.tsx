import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-200">
      <Navbar />
      <main>
        <Hero />
        {/* Experience, Projects, and Skills sections will go here next */}
      </main>
    </div>
  );
}

export default App;