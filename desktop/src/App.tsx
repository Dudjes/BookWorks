import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Invoices from "./pages/invoices";
import { UserProvider } from "./context/UserContext.tsx";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="layout">
          <main className="content">
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/invoices" element={<Invoices />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}
