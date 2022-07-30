import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Anchors } from './pages/Anchors';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Anchors />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
