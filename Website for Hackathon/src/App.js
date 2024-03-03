import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import EnvPage from "./pages/EnvPage";
import ParametersPge from "./pages/ParametersPge";
import GraphPage from "./pages/GraphPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/env-page":
        title = "";
        metaDescription = "";
        break;
      case "/parameters-pge":
        title = "";
        metaDescription = "";
        break;
      case "/graph-page":
        title="";
        metaDescription="";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);


  // const [accuracy, setAccuracy] = useState(2)
  // const [inputValue, setInputValue] = useState("");


  // const submitToApi = (e) => {
  //   e.preventDefault();
    
  //   fetch(`http://127.0.0.1:5000/api?data=${inputValue}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setAccuracy(data.accuracy);
  //   })
  // }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/env-page" element={<EnvPage />} />
      <Route path="/parameters-pge" element={<ParametersPge />} />
      <Route path="/graph-page" element={<GraphPage />} />
    </Routes>
  );
}
export default App;
