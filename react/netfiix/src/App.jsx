import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import AppLayout from "./Layout/AppLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<AppLayout />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
