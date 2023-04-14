import { WeatherProvider } from "./context/WeatherContext";
import Container from "./components/Container";

function App() {
  return (
    <WeatherProvider>
      <div className="app">
      <Container />
      </div>
    </WeatherProvider>
  );
}

export default App;
