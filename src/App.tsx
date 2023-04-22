import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog/Index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/blog/:id" Component={Blog} />
      </Routes>
    </div>
  );
}

export default App;
