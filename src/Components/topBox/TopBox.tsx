import { topDealUsers } from "../../data";
import "./topBox.scss";

export const TopBox = () => {
  return (
    <div className="topBox">
      <h2>Top Deals</h2>
      <div className="userList">
        {topDealUsers.map((user) => (
          <div className="userListItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userInfo">
                <span className="userName">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <div className="amount">{user.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopBox;
