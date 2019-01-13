import React from "react";
import "./about_us.css";

const aboutUs = () => {
  return <div>
      <section className="mbr-section info3 cid-reVqO8OAmQ" id="info3-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="media-container-column title col-12 col-md-10">
              <h2 className="align-left mbr-bold mbr-white pb-3 mbr-fonts-style display-2">
                Like our Work? Want to Connect?
              </h2>
              <h3 className="mbr-section-subtitle align-left mbr-light mbr-white pb-3 mbr-fonts-style display-5" />
            </div>
          </div>
        </div>
      </section>
      <section className="section2">
        <h2 className="team">Meet the Team!</h2>
        <div className="gallery-container">
            <div className="gallery">
              <img src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/974/medium/Alejandro_Chang.jpg?1534882493" alt="alejandro"/>
              <div className="desc">Alejandro Chang</div>
              <div className="desc-2">Software Engineer</div>
              <div className="logos">
                <i class="globe icon"></i>
                <i class="google plus g icon"></i >
                <i class="github icon"></i>
                <i class="linkedin icon"></i>
              </div>
            </div>
            <div className="gallery">
              <img src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/975/medium/John_Huang_2.jpg?1534886983" alt="john" style={{ height: '252px'}}/>
              <div className="desc">John Huang</div>
              <div className="desc-2">Software Engineer</div>
              <div className="logos">
                <i class="globe icon"></i>
                <i class="google plus g icon"></i >
                <i class="github icon"></i>
                <i class="linkedin icon"></i>
              </div>
            </div>
            <div className="gallery">
              <img src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/003/022/medium/Jorge_Bocanegra_2.jpg?1534887075" alt="jorge" style={{ height: '252px' }}/>
              <div className="desc">Jorge Bocanegra</div>
              <div className="desc-2">Software Engineer</div>
              <div className="logos">
                <i class="globe icon"></i>
                <i class="google plus g icon"></i >
                <i class="github icon"></i>
                <i class="linkedin icon"></i>
              </div>
            </div>
            <div className="gallery">
              <img src="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/003/011/medium/Henry_Chu_2.jpg?1534886856" alt="henry" style={{ height: '252px' }}/>
              <div className="desc">Henry Chu</div>
              <div className="desc-2">Software Engineer</div>
              <div className="logos">
                <i class="globe icon"></i>
                <i class="google plus g icon"></i >
                <i class="github icon"></i>
                <i class="linkedin icon"></i>
              </div>
            </div>
          </div>
      </section>
    </div>;
};

export default aboutUs;
