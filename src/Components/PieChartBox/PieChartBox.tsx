import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";
const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];
function PieChartBox() {
  return (
    <div className="pieChartBox">
      <h2 className="heading">Leads by Source</h2>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map(({ name, color }) => (
                <Cell key={name} fill={color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="option">
        {data.map(({ name, value, color }) => (
          <div className="optionItem" key={name}>
            <div className="title">
              <div className="dot" style={{ background: color }}></div>
              <span>{name}</span>
            </div>

            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
