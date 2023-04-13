import {WeatherProvider} from './context/WeatherContext'
import Container from "./components/Container";

function App() {
  return (
    <WeatherProvider>
      <Container/>
    </WeatherProvider>
  );
}

export default App;
