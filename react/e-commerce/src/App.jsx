import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Toaster />
      <SidebarProvider>
        <AppSidebar />
        <main className="container mx-auto px-4">
          <Header />
          <div>
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}

export default App;
