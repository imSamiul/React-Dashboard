import { Tooltip } from "@mui/material";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Single() {
  return (
    <div>
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <div className="header">
              <img src="" alt="" className="profile-image" />
              <div className="name">Samiul Karim</div>
              <button className="update-button">Update</button>
            </div>
            <div className="other-details">
              <span className="userName">Username: imSamiul</span>
              <span className="fullName">Full name:Samiul Karim Prodhan</span>
              <span className="email">Email: confusinungabunga@gmail.com</span>
              <span className="phone">Phone: 99008877</span>
              <span className="status">Status: verified</span>
            </div>
          </div>
          <hr />
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                {/* <Tooltip /> */}
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="latest-activities">
          <ul>
            <li>Coffee</li>
            <span>anything</span>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Single;
