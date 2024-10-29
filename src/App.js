import { Route, Router } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
