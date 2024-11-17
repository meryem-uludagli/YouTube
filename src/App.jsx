import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import { RiH1 } from "react-icons/ri";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/search" element={<h1>SEARCH</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
