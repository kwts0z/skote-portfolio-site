import About from "./components/about";
import ImplementationReels from "./components/implementationReelsSection";
import Showreel from "./components/showreelSection";

function Home() {
    return (
      <div className="overflow-hidden">
        <Showreel/>
        <ImplementationReels/>
        <About/>
      </div>
    );
  }
  
export default Home;
  