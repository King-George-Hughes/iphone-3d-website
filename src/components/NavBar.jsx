import { logo, search, store } from "./../assets";

const NavBar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={logo} alt="logo" />
          </li>
          <li>
            <a href="#" className="link-styled">
              Store
            </a>
          </li>
          <li>
            <a href="#" className="link-styled">
              Mac
            </a>
          </li>
          <li>
            <a href="#" className="link-styled">
              iPad
            </a>
          </li>
          <li>
            <a href="#" className="link-styled">
              iPhone
            </a>
          </li>
          <li>
            <a href="#" className="link-styled">
              Watch
            </a>
          </li>
          <li>
            <a href="#" className="link-styled">
              AirPods
            </a>
          </li>
          <li>
            <a href="#" className="link-styled">
              Tv & Home
            </a>
          </li>
          <li>
            <a href="#" className="link-styled">
              Entertainment & Home
            </a>
          </li>
          <li>
            <a href="#" className="link-styled">
              Accessaries
            </a>
          </li>
          <li>
            <a href="#" className="link-styled">
              Support
            </a>
          </li>
          <li>
            <img src={search} alt="search" />
          </li>
          <li>
            <img src={store} alt="store" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
