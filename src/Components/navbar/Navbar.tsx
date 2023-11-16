import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="" />
        <span>Samiul's Dashboard</span>
      </div>
      <div className="links">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/public/IMG_20211019_170958.jpg" alt="" />
          <span>Samiul</span>
        </div>
        <img src="/setting.svg" alt="" />
      </div>
    </div>
  );
};
export default Navbar;
