const Subscribe = () => {
  return (
    <div className="sub_container">
      <div className="sub_comment">
        <div className="slogan">
          <h2>Subscribe to get notification.</h2>
        </div>
        <div className="lorem_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
      <div className="sub_input">
        <div className="sub_mail">
          <input type="text" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
