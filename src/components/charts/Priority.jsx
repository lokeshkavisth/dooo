import { ResponsiveBar } from "@nivo/bar";
import TodoApi from "../../api/TodoApi";
import { useEffect, useState } from "react";

const Priority = () => {
  const [priority, setPriority] = useState({
    low: "",
    mid: "",
    high: "",
  });

  const todoPriorities = async () => {
    const lowPriority = await TodoApi("get", "/low");
    const midPriority = await TodoApi("get", "/mid");
    const highPriority = await TodoApi("get", "/high");

    setPriority({
      low: lowPriority.length,
      mid: midPriority.length,
      high: highPriority.length,
    });
  };

  useEffect(() => {
    todoPriorities();
  }, []);

  const data = [
    { priority: "Low", value: priority.low },
    { priority: "Mid", value: priority.mid },
    { priority: "High", value: priority.high },
  ];

  return (
    <div className="h-96">
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="priority"
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        enableGridX={false}
        enableGridY={true}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default Priority;
