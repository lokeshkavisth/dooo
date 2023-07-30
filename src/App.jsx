import Layout from "./components/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TaskList from "./pages/TaskList";
import CheckList from "./pages/CheckList";
import CreateTodo from "./pages/CreateTodo";

const App = () => {
  return (
    <menu className="bg-gray-900 text-gray-300">
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<TaskList />} />
          <Route path="/checklist" element={<CheckList />} />
          <Route path="/create" element={<CreateTodo />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Layout>
    </menu>
  );
};

export default App;
