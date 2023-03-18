
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePostScreen from './screens/CreatePostScreen';
import HomeScreen from './screens/HomeScreen';
import EditPost from './components/EditPost';
import ReadPost from './components/ReadPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/post/:id" element={<ReadPost />}/>
          <Route path="/post/:id/edit" element={<EditPost />}/>
          <Route path="/post/:id/new" element={<CreatePostScreen />}/>
          <Route exact path='/' element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
