import Priority from "../components/charts/Status";
import Status from "../components/charts/Priority";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Priority />
      </div>
      <div>
        <Status />
      </div>
    </div>
  );
};

export default Dashboard;
