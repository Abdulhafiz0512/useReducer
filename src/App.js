// App.js
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import { reducer, initialState } from './components/Reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <div style={{ color: state.color, backgroundColor: state.background }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter state={state} dispatch={dispatch} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
