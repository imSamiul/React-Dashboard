import { Bar, ResponsiveContainer, BarChart, Tooltip } from "recharts";
import "./barChartBox.scss";

type Props = {
  title: string;
  dataKey: string;
  color: string;
  chartData: object[];
};

function BarChartBox(props: Props) {
  return (
    <div className="barChartBox">
      <h1 className="heading">{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{
                background: "#2a3447",
                borderRadius: "5px",
                borderColor: props.color,
              }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "transparent" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartBox;
