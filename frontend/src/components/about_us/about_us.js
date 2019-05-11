import React from "react";
import "./about_us.css";

const aboutUs = () => {
  return <div>
      <section className="mbr-section info3 cid-reVqO8OAmQ" id="info3-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="media-container-column title col-12 col-md-10">
              <h2 className="align-left mbr-bold mbr-white pb-3 mbr-fonts-style display-2">
              </h2>
              <h3 className="mbr-section-subtitle align-left mbr-light mbr-white pb-3 mbr-fonts-style display-5" />
            </div>
          </div>
        </div>
      </section>
      <section className="section2">
        <h2 className="team">Want to Connect?</h2>
        <h5 className="team2">Meet the Team!</h5>
        <div className="gallery-container">
          <div className="gallery">
            <img src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/974/medium/Alejandro_Chang.jpg?1534882493" alt="alejandro" />
            <div className="desc">Alejandro Chang</div>
            <div className="desc-2">Software Engineer</div>
            <div className="logos">
              <a href="https://www.alejandrochang.com" target="_blank"><i class="globe icon" /></a>
              <a href="https://github.com/alejandrochang" target="_blank"><i class="github icon" /></a>
              <a href="https://www.linkedin.com/in/alejandro-chang/" target="_blank"><i class="linkedin icon" /></a>
            </div>
          </div>
          <div className="gallery">
            <img src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/975/medium/John_Huang_2.jpg?1534886983" alt="john" style={{ height: "252px" }} />
            <div className="desc">John Huang</div>
            <div className="desc-2">Software Engineer</div>
            <div className="logos">
              <a href="http://www.johnhuang.me" target="_blank"><i class="globe icon" /></a>
              <a href="https://github.com/john-huang-121" target="_blank"><i class="github icon" /></a>
              <a href="https://www.linkedin.com/in/john-huang1/" target="_blank"><i class="linkedin icon" /></a>
            </div>
          </div>
          <div className="gallery">
            <img src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/003/022/medium/Jorge_Bocanegra_2.jpg?1534887075" alt="jorge" style={{ height: "252px" }} />
            <div className="desc">Jorge Bocanegra</div>
            <div className="desc-2">Software Engineer</div>
            <div className="logos">
              <i class="globe icon" />
              <i class="github icon" />
              <i class="linkedin icon" />
            </div>
          </div>
          <div className="gallery">
            <img src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/003/011/medium/Henry_Chu_2.jpg?1534886856" alt="henry" style={{ height: "252px" }} />
            <div className="desc">Henry Chu</div>
            <div className="desc-2">Software Engineer</div>
            <div className="logos">
              <i class="globe icon" />
              <i class="github icon" />
              <i class="linkedin icon" />
            </div>
          </div>
        </div>
      </section>
    </div>;
};

export default aboutUs;
