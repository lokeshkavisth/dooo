import { useState } from "react";
import Button from "../components/Button";
import TodoApi from "../api/TodoApi";
import { useDispatch, useSelector } from "react-redux";
import { todoEdit } from "../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const CreateTodo = () => {
  const containerClass =
    "flex items-center flex-wrap xl:flex-nowrap gap-4 w-full justify-between";
  const { EDIT_TODO } = useSelector((state) => state.todoReducer);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [todoData, setTodoData] = useState({
    title: EDIT_TODO?.title ? EDIT_TODO?.title : "",
    description: EDIT_TODO?.description ? EDIT_TODO?.description : "",
    owner: EDIT_TODO?.owner ? EDIT_TODO?.owner : "",
    priority: EDIT_TODO?.priority ? EDIT_TODO?.priority : "",
    status: EDIT_TODO?.status ? EDIT_TODO?.status : "",
    due_date: EDIT_TODO?.due_date ? EDIT_TODO?.due_date : "",
    category: EDIT_TODO?.category ? EDIT_TODO?.category : "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const owner = e.target.owner.value;
    const priority = e.target.priority.value;
    const status = e.target.status.value;
    const due_date = e.target.due_date.value;
    const category = e.target.category.value;

    setTodoData({
      title,
      description,
      owner,
      priority,
      status,
      due_date,
      category,
    });

    if (
      EDIT_TODO.title &&
      EDIT_TODO.description &&
      EDIT_TODO.owner &&
      EDIT_TODO.priority &&
      EDIT_TODO.status &&
      EDIT_TODO.due_date &&
      EDIT_TODO.category
    ) {
      const todoId = EDIT_TODO._id;
      await TodoApi("put", `/update/${todoId}`, todoData);
      dispatch(todoEdit());
      setTodoData({});
      navigate("/todos");
    } else {
      await TodoApi("post", "/add", todoData);
      navigate("/todos");
    }
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className={containerClass}>
          <input
            required
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={todoData.title}
            onChange={(e) =>
              setTodoData({ ...todoData, title: e.target.value })
            }
          />
          <input
            required
            type="text"
            name="owner"
            id="owner"
            placeholder="Owner"
            value={todoData.owner}
            onChange={(e) =>
              setTodoData({ ...todoData, owner: e.target.value })
            }
          />
        </div>
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          value={todoData.description}
          onChange={(e) =>
            setTodoData({ ...todoData, description: e.target.value })
          }
        ></textarea>

        <div className={containerClass}>
          <div className="flex-1">
            <input
              required
              type="date"
              name="due_date"
              id="due_date"
              placeholder="Due Date"
              value={todoData.due_date}
              onChange={(e) =>
                setTodoData({ ...todoData, due_date: e.target.value })
              }
            />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 w-full xl:w-auto">
            <select
              name="priority"
              id="priority"
              defaultValue={"priority"}
              value={todoData.priority}
              onChange={(e) =>
                setTodoData({ ...todoData, priority: e.target.value })
              }
            >
              <option disabled value={"priority"}>
                priority
              </option>
              <option value="low">low</option>
              <option value="mid">medium</option>
              <option value="high">high</option>
            </select>
            <select
              name="status"
              id="status"
              defaultValue={"status"}
              value={todoData.status}
              onChange={(e) =>
                setTodoData({ ...todoData, status: e.target.value })
              }
            >
              <option disabled value={"status"}>
                status
              </option>
              <option value="completed">completed</option>
              <option value="progress">progress</option>
            </select>
            <select
              name="category"
              id="category"
              defaultValue={"category"}
              value={todoData.category}
              onChange={(e) =>
                setTodoData({ ...todoData, category: e.target.value })
              }
            >
              <option disabled value={"category"}>
                category
              </option>
              <option value="personal">personal</option>
              <option value="work">work</option>
              <option value="errands">errands</option>
              <option value="home">home</option>
              <option value="financial">financial</option>
              <option value="health and wellness">health and wellness</option>
              <option value="education">education</option>
              <option value="social">social</option>
              <option value="travel">travel</option>
              <option value="projects">projects</option>
            </select>
          </div>
        </div>
        <Button type={"submit"} text={"Create"} />
      </form>
    </div>
  );
};

export default CreateTodo;
