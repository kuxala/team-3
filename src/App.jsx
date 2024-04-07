import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SuggestionsPage from "./pages/SuggestionsPage";
import Feedback from "./pages/Feedback";
import AddFeedbackPage from "./pages/AddFeedbackPage";
import EditFeedbackPage from "./pages/EditFeedbackPage";
import RoadmapPage from "./pages/RoardmapPage";
import { createContext, useState, useEffect } from "react";
import jsonData from "../data.json";

export const MyContext = createContext(null);

function App() {
  // const [data, setData] = useState(jsonData);
  // const [upvoteStates, setUpvoteStates] = useState({});
  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [category, setCategory] = useState("feature");
  const [feedbackDetail, setFeedbackDetail] = useState("");
  const [dropdownMenuValue, setDropdownMenuValue] = useState("Most Upvotes");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortCriteria, setSortCriteria] = useState({
    sortBy: "upvotes",
    sortOrder: "desc",
  });

  const [data, setData] = useState(() => {
    // Load data from localStorage or use default data
    const savedData = localStorage.getItem("feedbackData");
    return savedData ? JSON.parse(savedData) : jsonData;
  });

  const [upvoteStates, setUpvoteStates] = useState(() => {
    // Load upvoteStates from localStorage or set initial state
    const savedUpvoteStates = localStorage.getItem("upvoteStates");
    return savedUpvoteStates ? JSON.parse(savedUpvoteStates) : {};
  });

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem("feedbackData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    // Save upvoteStates to localStorage whenever it changes
    localStorage.setItem("upvoteStates", JSON.stringify(upvoteStates));
  }, [upvoteStates]);

  const updateSortCriteria = (criteria) => {
    setSortCriteria(criteria);
  };
  const addComment = (userId, newComment) => {
    setData((prevData) => ({
      ...prevData,
      productRequests: prevData.productRequests.map((item) =>
        item.id === userId
          ? {
              ...item,
              comments: item.comments
                ? [...item.comments, newComment]
                : [newComment],
            }
          : item
      ),
    }));
  };

  const counts = {
    planned: data.productRequests.filter((item) => item.status === "planned")
      .length,
    "in-progress": data.productRequests.filter(
      (item) => item.status === "in-progress"
    ).length,
    live: data.productRequests.filter((item) => item.status === "live").length,
  };

  const handleUpdate = (itemId) => {
    const updatedUpvoteStates = { ...upvoteStates };
    updatedUpvoteStates[itemId] = !updatedUpvoteStates[itemId];
    setUpvoteStates(updatedUpvoteStates);

    const updatedProductRequests = data.productRequests.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          upvotes: updatedUpvoteStates[itemId]
            ? item.upvotes + 1
            : item.upvotes - 1,
        };
      }
      return item;
    });
    setData({ ...data, productRequests: updatedProductRequests });
  };

  return (
    <>
      <MyContext.Provider
        value={{
          data,
          setData,
          upvoteStates,
          setUpvoteStates,
          handleUpdate,
          feedbackTitle,
          setFeedbackTitle,
          category,
          setCategory,
          feedbackDetail,
          setFeedbackDetail,
          updateSortCriteria,
          sortCriteria,
          dropdownMenuValue,
          setDropdownMenuValue,
          selectedCategory,
          setSelectedCategory,
          counts,
          addComment,
        }}
      >
        <Router>
          <Routes>
            <Route path="/empty" element={<HomePage />} />
            <Route path="/" element={<SuggestionsPage />} />
            <Route path="/suggestions" element={<SuggestionsPage />} />
            <Route path="/suggestions/:userId" element={<Feedback />} />
            <Route path="/add-feedback" element={<AddFeedbackPage />} />
            <Route
              path="/edit-feedback/:userId"
              element={<EditFeedbackPage />}
            />
            <Route path="/edit-feedback" element={<EditFeedbackPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="*" element={<h1>EROR 404</h1>} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </>
  );
}

export default App;
