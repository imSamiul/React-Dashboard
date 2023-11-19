import "./single.scss";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Props = {
  id: number;
  img: string;
  title: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities: { time: string; text: string }[];
};

function Single(props: Props) {
  return (
    <div className="view">
      <div className="info">
        <div className="topInfo">
          <div className="header">
            {props.img && (
              <img
                src="../../../public/IMG_20211019_170958.jpg"
                alt="profile image"
                className="profile-image"
              />
            )}
            <h1 className="profile-name">Samiul Karim</h1>
            <button className="update-button">Update</button>
          </div>
          <div className="other-details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="userName">
                  <span className="label">{item[0]}</span> : {item[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
        <hr className="line" />
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={730}
              height={250}
              data={props.chart.data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" stroke="#FF8042" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Legend />
              {props.chart.dataKeys.map((item, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={item.name}
                  stroke={item.color}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="latest-activities">
        <h2>Latest Activities</h2>
        <ul>
          {props.activities &&
            props.activities.map((item, index) => (
              <li key={index}>
                <div>
                  <p>{item.text}</p>
                  <time>{item.time}</time>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Single;
