import "../styles.css";
import Intro from "../componentes/Intro";
import Testimonials from "../componentes/Testimonials";
import Areas from "../componentes/Areas";
export default function App() {
  return (
    <div className="App">
      <Intro />
      <Testimonials />
      <Areas />
    </div>
  );
}
