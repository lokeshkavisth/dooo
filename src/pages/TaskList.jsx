import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import TodoApi from "../api/TodoApi";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todos } from "../redux/actions/actions";
import NoTodos from "../components/NoTodos";
import Spinner from "../components/Spinner";
const Card = lazy(() => import("../components/Card"));
const Button = lazy(() => import("../components/Button"));

const TaskList = () => {
  const dispatch = useDispatch();
  const { TODOS } = useSelector((state) => state.todoReducer);

  const fetchData = async () => {
    const allTodos = await TodoApi("get", "/");
    dispatch(todos(allTodos));
  };

  const deleteAllTodos = () => {
    TodoApi("delete", "/clear");
    dispatch(todos([]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="mb-4 sticky top-0">
        <Button
          type="button"
          fn={deleteAllTodos}
          text="Delete all todo&rsquo;s"
        />
      </div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 100: 1, 900: 2, 1200: 3, 1600: 4 }}
      >
        <Masonry gutter={"15px"}>
          {TODOS?.map(
            ({
              _id,
              title,
              description,
              owner,
              created,
              due_date,
              priority,
              status,
              category,
            }) => (
              <div key={_id}>
                <Card
                  title={title}
                  desc={description}
                  author={owner}
                  created={created?.split("T")[0]}
                  expire={due_date?.split("T")[0]}
                  todoId={_id}
                  priority={priority}
                  status={status}
                  category={category}
                />
              </div>
            )
          )}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default TaskList;
