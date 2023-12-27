import loadingImg from "../../../assets/loader.gif";

const Spinner = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <img src={loadingImg} alt="" className="img-fluid" />
    </div>
  );
};

export default Spinner;
