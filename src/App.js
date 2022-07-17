import logo from './logo.svg';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Login from './Login';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
