import './NavBar.css';
const Navbar = ({togleMenu, menu}) => {
  return (
    <>
      <div className="menu-display">
        <div className={`${menu ? 'on-togle-logo ' : 'logo '}`}>mater</div>
        <div onClick={() =>togleMenu(!menu)} className={`${menu ? 'on-togle-menu' : 'togle-menu'}`}>
          <div className={`${menu ? 'line1b' : "line1"}`}></div>
          <div className={`${menu ? 'line2b' : "line2"}`}></div>
          <div className={`${menu ? 'line3b' : "line3"}`}></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
