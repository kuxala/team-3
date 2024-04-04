import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import SuggestionsPage from "./pages/SuggestionsPage"
import Id from "./pages/Id"
import AddFeedbackPage from "./pages/AddFeedbackPage"
import EditFeedbackPage from "./pages/EditFeedbackPage"
import RoadmapPage from "./pages/RoardmapPage"

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/suggestions" element={< SuggestionsPage/>}/>
        <Route path="/suggestions/:id" element={< Id/>}/>
        <Route path="/add-feedback" element={<AddFeedbackPage/>}/>
        <Route path="/edit-feedback" element={<EditFeedbackPage/>}/>
        <Route path="/roadmap" element={<RoadmapPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
