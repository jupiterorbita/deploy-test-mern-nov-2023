import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ShowOne from './components/ShowOne';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Notes 🎶📝</h1>
      <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/notes/create">Create</Link>
      <hr />

      <Routes>
        {/* REDIRECT */}
        <Route path='/' element={<Navigate to="/notes" />} />

        {/* MAIN DASHBOARD */}
        <Route path='/notes' element={<Dashboard />} />

        {/* SHOW ONE */}
        <Route path='/notes/:id' element={<ShowOne />} />

        {/* CREATE */}
        <Route path='/notes/create' element={<Create />} />

        {/* UPDATE */}
        <Route path='/notes/update/:id' element={<Update />} />

      </Routes>

    </div>
  );
}

export default App;
