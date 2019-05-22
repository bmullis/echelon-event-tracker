import React, { useState, useEffect, useContext } from "react";
import { RadialChart } from "react-vis";

import { VisibleEventsContext } from "../../context/VisibleEventsContext";

const RadialGraph = () => {
  const [data, setData] = useState(null);

  const [events] = useContext(VisibleEventsContext);

  useEffect(() => {
    if (events) {
      let dataArray = [];
      let prev;
      events.sort((a, b) => a.severity.localeCompare(b.severity));
      events.forEach(event => {
        if (event.severity === prev) {
          const index = dataArray
            .map(item => item.label)
            .indexOf(event.severity);
          dataArray[index].angle++;
        } else {
          dataArray.push({
            angle: 1,
            label: event.severity
          });
        }
        prev = event.severity;
      });
      setData(dataArray);
    }
  }, [events]);

  return (
    data && (
      <RadialChart
        colorType={"category"}
        colorRange={["#f3a333", "#cd4545", "237145", "#f16821"]}
        data={data}
        height={350}
        width={350}
        innerRadius={70}
        radius={100}
        showLabels={true}
        labelsStyle={{
          fill: "white",
          fontSize: 18,
          fontWeight: 500
        }}
        stroke={"white"}
        labelsRadiusMultiplier={1.6}
      />
    )
  );
};

export default RadialGraph;
