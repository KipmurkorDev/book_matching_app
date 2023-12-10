import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Books from "./Pages/MatchingBooks/Books";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/discover" element={<Form />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
