const DisplaySection = () => {
  const handleBackToTop = () => {
    const element = document.getElementById("jumbotron-section");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="display-section wrapper" id="display-section">
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">
        A display thats up to 2x brighter in the sun.
      </span>
      <button className="button">Try me!</button>
      <button className="back-button" onClick={handleBackToTop}>
        TOP
      </button>
    </div>
  );
};

export default DisplaySection;
