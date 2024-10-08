import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import Score from './components/quiz/Score';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/play/instructions" exact element={<QuizInstructions />} />
        <Route path="/play/quiz" exact element={<Play />} />
        <Route path="/play/quiz/instructions" exact element={<Score />} />
      </Routes>
    </Router>
  );
}

export default App;
