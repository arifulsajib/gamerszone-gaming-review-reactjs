import picNot from "../../assets/404.png";

const NotFoundPage = () => {
  return (
    <section className="container d-flex justify-content-center align-items-center my-5" style={{ minHeight: "90vh" }}>
      <img src={picNot} alt="404 not fount" className="w-100 object-fit-cover " style={{ maxHeight: "600px", maxWidth: "600px" }} />
    </section>
  );
};

export default NotFoundPage;
