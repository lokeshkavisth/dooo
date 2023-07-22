import { Link } from "react-router-dom";
import Button from "./Button";

const NoTodos = () => {
  return (
    <div className="grid place-items-center text-center h-screen">
      <div className="space-y-6">
        <h1 className="text-9xl text-purple-300">OOPS!!</h1>
        <h2 className="pb-2">You don&rsquo;t have any todo&rsquo;s yet!</h2>
        <Link to={"/"}>
          <Button text={"Create Todo"} type="button" />
        </Link>
      </div>
    </div>
  );
};

export default NoTodos;
