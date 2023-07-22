import { useEffect, useState } from "react";
import Button from "../components/Button";
import TodoApi from "../api/TodoApi";

const CreateTodo = () => {
  const containerClass =
    "flex items-center flex-wrap xl:flex-nowrap gap-4 w-full justify-between";

  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
    owner: "",
    priority: "",
    status: "",
    due_date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoData({
      title: e.target.title.value,
      description: e.target.description.value,
      owner: e.target.owner.value,
      category: e.target.category.value,
      priority: e.target.priority.value,
      status: e.target.status.value,
      due_date: e.target.due_date.value,
    });
  };

  useEffect(() => {
    TodoApi("post", "/add", todoData);
  }, [todoData]);

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
          />
          <input
            required
            type="text"
            name="owner"
            id="owner"
            placeholder="Owner"
          />
        </div>
        <textarea
          name="description"
          id="description"
          placeholder="Description"
        ></textarea>

        <div className={containerClass}>
          <div className="flex-1">
            <input
              required
              type="date"
              name="due_date"
              id="due_date"
              placeholder="Due Date"
            />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 w-full xl:w-auto">
            <select name="priority" id="priority" defaultValue={"priority"}>
              <option disabled value={"priority"}>
                priority
              </option>
              <option value="low">low</option>
              <option value="mid">medium</option>
              <option value="high">high</option>
            </select>
            <select name="status" id="status" defaultValue={"status"}>
              <option disabled value={"status"}>
                status
              </option>
              <option value="completed">completed</option>
              <option value="progress">progress</option>
            </select>
            <select name="category" id="category" defaultValue={"category"}>
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
