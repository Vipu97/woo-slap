import "./App.css";
import IndexPage from "./Pages/IndexPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import EventPage from "./Pages/EventPage";
import axios from "axios";
import HomePage from "./Pages/HomePage";
import { UserContextProvider } from "./Context/userContext";
import Mcq from "./Pages/Mcq";
import QuestionPage from "./Pages/QuestionPage";
import ResultPageHeader from "./Components/ResultPageHeader";
import Poll from "./Pages/Poll";
import OpenQuestion from "./Pages/OpenQuestion";
import Sorting from "./Pages/Sorting";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/event/:code" element={<EventPage />} />
        <Route path="/event/:code/mcq" element={<Mcq />} />
        <Route path="/event/:code/poll" element={<Poll />} />
        <Route path="/event/:code/open" element={<OpenQuestion />} />
        <Route path="/event/:code/sorting" element={<Sorting />} />
        <Route path="/event/edit/:questId/mcq" element={<Mcq />} />
        <Route path="/event/edit/:questId/poll" element={<Poll />} />
        <Route path="/event/submit/:code" element={<QuestionPage />} />
        <Route path="/event/:code/result" element={<ResultPageHeader />}/>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
