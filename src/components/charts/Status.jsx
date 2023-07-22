import { ResponsivePie } from "@nivo/pie";
import React from "react";

const Status = () => {
  const data = [
    {
      id: "Total",
      label: "Total",
      value: 440,
      color: "hsl(263, 70%, 50%)",
    },
    {
      id: "Completed",
      label: "Completed",
      value: 106,
      color: "hsl(340, 70%, 50%)",
    },
    {
      id: "Progress",
      label: "Progress",
      value: 263,
      color: "hsl(37, 70%, 50%)",
    },
  ];

  return (
    <div className="h-96">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#fff"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "Total",
            },
          },
          {
            match: {
              id: "Completed",
            },
            id: "lines",
          },
          {
            match: {
              id: "Progress",
            },
            id: "dots",
          },
        ]}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 10,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "triangle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#fff",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Status;
