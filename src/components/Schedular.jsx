import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Schedular = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        showNavigation={false}
        className={
          "w-64 h-64 overflow-scroll aspect-square text-xs text-gray-400 bg-gray-700 border border-gray-600 p-4 rounded-md"
        }
      />
    </div>
  );
};

export default Schedular;
