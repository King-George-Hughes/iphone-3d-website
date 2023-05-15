import { iphone_14, iphone_hand } from "../assets";

const Jumbotron = () => {
  const handleLearnMore = () => {
    const element = document.getElementById("sound-section");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="jumbotron-section wrapper" id="jumbotron-section">
      <h2 className="title">New</h2>
      <img src={iphone_14} alt="iphone-14" />
      <p className="text">Big and bigger.</p>
      <span className="description">
        From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>
            Learn more
          </a>
        </li>
      </ul>
      <img src={iphone_hand} alt="hold iphone" className="iphone-img" />
    </div>
  );
};

export default Jumbotron;
