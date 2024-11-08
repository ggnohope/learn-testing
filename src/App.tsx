import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import CreateTaskPage from "./pages/createTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/create-task" element={<CreateTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
