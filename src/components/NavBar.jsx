const NavBar = ({total}) => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <h1 className="text text-white">NavBar {total}</h1>
      </div>
    </nav>
  );
};

export default NavBar;
