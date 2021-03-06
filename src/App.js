import Form from './components/formLogin/Form';
import { Routes, Route } from "react-router-dom";
import MemoryGame from './components/game/MemoryGame';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/game" element={<MemoryGame />} />
      </Routes>
    </div>
  );
}

export default App;
