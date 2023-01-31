import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import WelcomeJumbotron from "./components/WelcomeJumbotron";

function App() {
  return (
    <div className="App">
      <MyNav />
      <WelcomeJumbotron />
      <MyFooter />
    </div>
  );
}

export default App;
