import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import PostPage from "./pages/PostPage.jsx";
import { useAppContext } from "./context/AppContext";
import { useNavigate } from "react-router";
import Header from "./components/Header";

const App = () => {
  const { isDarkMode, toggleTheme } = useAppContext();
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Header */}
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        handleBackToHome={() => navigate("/")}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
};

export default App;
