/* eslint-disable react/prop-types */
import { MdDeleteOutline } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import TodoApi from "../api/TodoApi";
import { useDispatch } from "react-redux";
import { todoEdit, todos } from "../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const {
    title,
    desc,
    author,
    created,
    expire,
    todoId,
    priority,
    status,
    category,
  } = props;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteTodo = async () => {
    const remainTodos = await TodoApi("delete", `/delete/${todoId}`);
    dispatch(todos(remainTodos));
  };

  const editTodo = () => {
    const todo = {
      _id: todoId,
      title,
      description: desc,
      owner: author,
      due_date: expire,
      priority,
      status,
      category,
    };

    dispatch(todoEdit(todo));
    navigate("/create");
  };

  return (
    <div
      className={`group border border-gray-600 bg-gray-800 p-4 rounded-md space-y-2 `}
    >
      <div className="flex items-center justify-between">
        <span className="capitalize text-sm">{author}</span>
        <div className="space-x-2">
          <button
            type="button"
            className="text-gray-400 bg-gray-700 p-1 rounded-md"
            onClick={editTodo}
          >
            <BiSolidEditAlt />
          </button>
          <button
            type="button"
            className="text-gray-400 bg-gray-700 p-1 rounded-md"
            onClick={deleteTodo}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h2 className={`outline-none capitalize break-words`}>{title}</h2>
        <p className={`outline-none break-words`}>{desc}</p>
      </div>

      <div className="flex items-center justify-between text-xs">
        <span className="flex flex-col">
          <i>Created:</i>
          {created}
        </span>
        <span className="flex flex-col">
          <i>Expire:</i>
          {expire}
        </span>
      </div>
    </div>
  );
};

export default Card;
