import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AppRouter from "./Routes/AppRouter";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <main className="bg-white dark:bg-gray-900 w-full h-screen">
        <div className="w-full md:h-[6vh]">
          <Header setShowSidebar={setShowSidebar} />
        </div>
        <div className="w-full h-[94vh] flex">
          <div
            className={`flex-shrink-0 fixed ${
              showSidebar ? "left-0" : "-left-full"
            } z-50 w-64 h-full border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease`}
          >
            <Sidebar />
          </div>
          <div className="realtive w-full h-full overflow-y-auto">
            <AppRouter />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
