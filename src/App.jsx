import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SuggestionsPage from "./pages/SuggestionsPage";
import Feedback from "./pages/Feedback";
import AddFeedbackPage from "./pages/AddFeedbackPage";
import EditFeedbackPage from "./pages/EditFeedbackPage";
import RoadmapPage from "./pages/RoardmapPage";
import { createContext, useState } from "react";
import jsonData from "../data.json";

export const MyContext = createContext(null);

function App() {
  const [data, setData] = useState(jsonData);
  // console.log("data in app: ", data)
  // console.count("Rendered: ")

  return (
    <>
      <MyContext.Provider value={{ data, setData }}>
        <Router>
          <Routes>
            <Route path="/empty" element={<HomePage />} />
            <Route path="/" element={<SuggestionsPage />} />
            <Route path="/suggestions" element={<SuggestionsPage />} />
            <Route path="/suggestions/:userId" element={<Feedback />} />
            <Route path="/add-feedback" element={<AddFeedbackPage />} />
            <Route path="/edit-feedback" element={<EditFeedbackPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </>
  );
}

export default App;
