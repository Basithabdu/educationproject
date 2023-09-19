import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div>
        <h2 className="Blog">Blog & Videos</h2>
        <p className="Blog1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's<br></br> standard dummy
          text ever since the 1500s.
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <img className="mask1" src="./image/Mask group1.png" alt="mask1" />
        <img className="mask2" src="./image/Mask group2.png" alt="mask2" />
        <img className="mask3" src="./image/Mask group3.png" alt="mask3" />
      </div>
      <div style={{ display: "flex" }}>
        <p className="mark1">
          <b>
            Marketing Strategy & Trends Report:<br></br> Data from 1,200+ Global
            Marketers
          </b>
        </p>
        <p className="pmark1">
          Discover the trends and winning tactics brands should<br></br> focus
          on in 2023, and what will change after 2022 with<br></br> data from
          1,200+ global B2B and B2C marketers..
        </p>
        <p className="aug">Aug 23 . 3 mins read</p>

        <p className="Commod">
          <b>
            The Commodification of Minimalism,<br></br> And the rise of
            lifestyle materialism
          </b>
        </p>
        <p className="Commod1">
          Ever notice how everything looks and feels kind of<br></br>{" "}
          “minimalist” these days? Between the recent rise of<br></br>{" "}
          deconstructed corporate logos to Instagram-worthy..
        </p>
        <p className="jul">Jul 10 . 2 mins read</p>

        <p className="How">
          <b>
            How To Use Your CRM For Advertising<br></br> and Digital Marketing
            Campaigns
          </b>
        </p>
        <p className="How1">
          By making CRM a core part of their advertising and<br></br> digital
          marketing strategy, brands can deliver a<br></br> personalised
          customer experience and get better..
        </p>
        <p className="jun">Jun 08 . 4 mins read</p>
      </div>
    </div>
  );
};

export default Blog;
