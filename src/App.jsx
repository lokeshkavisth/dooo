import Layout from "./components/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const TaskList = lazy(() => import("./pages/TaskList"));
const CheckList = lazy(() => import("./pages/CheckList"));
const CreateTodo = lazy(() => import("./pages/CreateTodo"));

const App = () => {
  return (
    <menu className="bg-gray-900 text-gray-300">
      <Layout>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Spinner />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <TaskList />
              </Suspense>
            }
          />
          <Route
            path="/checklist"
            element={
              <Suspense fallback={<Spinner />}>
                <CheckList />
              </Suspense>
            }
          />
          <Route
            path="/create"
            element={
              <Suspense fallback={<Spinner />}>
                <CreateTodo />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Spinner />}>
                <Navigate to={"/"} />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </menu>
  );
};

export default App;
