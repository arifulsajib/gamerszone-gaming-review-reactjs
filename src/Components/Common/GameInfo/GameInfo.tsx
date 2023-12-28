import { Col, Row } from "react-bootstrap";
import { AiFillClockCircle, AiOutlineDesktop, AiFillSetting, AiFillTags } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { useParams } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useGetGameInfoQuery } from "../../../ReduxStores/apiSlice";
import Spinner from "../Spinner/Spinner";

const GameInfo = () => {
  const params = useParams();
  const gameId = params.id;
  const { data, isFetching } = useGetGameInfoQuery(gameId);

  const platforms = data?.platforms.map((platform) => platform.platform.name);
  const developers = data?.developers.map((developer) => developer.name);
  const genres = data?.genres.map((genre) => genre.name);
  const publishers = data?.publishers.map((publisher) => publisher.name);

  return (
    <section
      className="text-white container-fluid"
      style={{
        minHeight: "450px"
      }}
    >
      <div className="bg-darkblue">
        {isFetching && <Spinner></Spinner>}
        <div className="container pt-4 pb-5">
          <h1 className="fw-bold text-uppercase mb-3">{data?.name}</h1>
          <Row xs={1} md={2} className="g-4 mb-4">
            <Col className="d-flex align-items-stretch">
              <img src={data?.background_image} alt="" className="img-fluid object-fit-cover" />
            </Col>
            <Col>
              <h3 className="fw-semibold mb-3">
                <span className="text-paste ">Game</span> Details
              </h3>
              <p className="text-lightwhite mb-4">{data?.description.split(".").splice(0, 3).join(".") + "."}</p>
              <div className="d-flex flex-wrap align-items-center mb-3">
                <AiFillClockCircle size={22}></AiFillClockCircle>
                <h6 className="text-uppercase mx-2 mb-0">Release Date:</h6>
                <p className="mb-0">{data?.released}</p>
              </div>
              <div className="d-flex flex-wrap align-items-center mb-3">
                <AiOutlineDesktop size={22}></AiOutlineDesktop>
                <h6 className="text-uppercase mx-2 mb-0">PLATFORMS:</h6>
                <p className="mb-0">{platforms?.join(", ")}</p>
              </div>
              <div className="d-flex flex-wrap align-items-center mb-3">
                <AiFillSetting size={22}></AiFillSetting>
                <h6 className="text-uppercase mx-2 mb-0">DEVELOPERS:</h6>
                <p className="mb-0">{developers?.join(", ")}</p>
              </div>
              <div className="d-flex flex-wrap align-items-center mb-3">
                <AiFillTags size={22}></AiFillTags>
                <h6 className="text-uppercase mx-2 mb-0">GENRES:</h6>
                <p className="mb-0">{genres?.join(", ")}</p>
              </div>
              <div className="d-flex flex-wrap align-items-center mb-3">
                <FaGlobe size={22}></FaGlobe>
                <h6 className="text-uppercase mx-2 mb-0">PUBLISHERS:</h6>
                <p className="mb-0">{publishers?.join(", ")}</p>
              </div>
            </Col>
          </Row>
          {/* Tabs */}
          <Tabs>
            <TabList>
              <Tab>DESCRIPTION</Tab>
              <Tab>PLATFORM</Tab>
              <Tab>STORES</Tab>
            </TabList>

            <TabPanel>
              <h6 className="fw-bold my-4">Game Description</h6>
              <div className="para-text" dangerouslySetInnerHTML={{ __html: typeof data?.description === "string" ? data?.description : "" }}></div>
            </TabPanel>
            <TabPanel>
              <h6 className="fw-bold my-4">Game Platforms</h6>
              <Row xs={1} md={2} lg={4}>
                {data?.platforms.map((platform) => (
                  <Col key={platform?.platform?.id}>
                    <p className="mb-1">{platform?.platform?.name}</p>
                    <img src={platform?.platform?.image_background} alt="" className="img-fluid object-fit-cover" />
                  </Col>
                ))}
              </Row>
            </TabPanel>
            <TabPanel>
              <h6 className="fw-bold my-4">Available Stores</h6>
              <Row xs={1} md={2} lg={3} className="g-4">
                {data?.stores.map((store) => (
                  <Col key={store?.store?.id}>
                    <Row xs={2} className="g-3">
                      <Col>
                        <img src={store?.store?.image_background} alt="" className="img-fluid object-fit-cover" />
                      </Col>
                      <Col className="d-flex align-items-center">
                        <div>
                          <h6>{store?.store?.name}</h6>
                          <div className="d-flex flex-wrap">
                            <p className="mb-0 fw-semibold">Domain: </p>
                            <a href={`https://${store?.store?.domain}`} target="_blank" className="text-decoration-none text-white">
                              {store?.store?.domain}
                            </a>
                          </div>
                          <p>
                            <span className="fw-semibold">Games Count:</span> {store?.store?.games_count}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </TabPanel>
          </Tabs>
          {/* Tab en */}
        </div>
      </div>
    </section>
  );
};

export default GameInfo;
