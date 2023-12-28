import { Fade, Zoom } from "react-awesome-reveal";
import joinBg from "../../../assets/join_image.png";

const JoinCommunity = () => {
  return (
    <section
      className="my-5 text-white container-fluid d-flex justify-content-center align-items-center"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${joinBg}) center/cover no-repeat`,
        minHeight: "600px"
      }}
    >
      <div className="text-center">
        <Fade>
          <h1 className="sm-fs-0 mb-3">
            JOIN THE <span className="text-paste ">COMMUNITY</span>
          </h1>
        </Fade>
        <Fade>
          <p className="d-none d-md-block w-50 mx-auto fs-5">Join our Discord community which is in the making and made by gamers for gamers. All are welcome to join no matter the game you play, we're here to have a good.</p>
        </Fade>
        <Fade>
          <p className="d-block d-md-none fs-5">Join our Discord community which is in the making and made by gamers for gamers. All are welcome to join no matter the game you play, we're here to have a good.</p>
        </Fade>
        <Zoom>
          <button className="btn-paste fw-semibold fs-5 mt-3">JOIN DISCORD</button>
        </Zoom>
      </div>
    </section>
  );
};

export default JoinCommunity;
