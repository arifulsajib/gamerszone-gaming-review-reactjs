import { useState } from "react";
import UnderLine from "../../Components/Common/UnderLine/UnderLine";
import { useGetCreatorsQuery } from "../../ReduxStores/apiSlice";
import { Row } from "react-bootstrap";
import Spinner from "../../Components/Common/Spinner/Spinner";
import DynamicCreator from "../../Components/Common/DynamicCreator/DynamicCreator";
import Pagination from "../../Components/Common/Pagination/Pagination";
import { Creator } from "../../models/creator.model";

const CreatorsPage = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data, isFetching } = useGetCreatorsQuery({ pageNo: pageNo, pageSize: 9 });
  const creators = data?.results;

  return (
    <section
      className="text-white container"
      style={{
        minHeight: "450px"
      }}
    >
      <h1 className="text-center fw-bold ">
        ALL <span className="text-pink">CREATORS</span>
      </h1>
      <UnderLine></UnderLine>
      <Row xs={1} md={2} lg={3} className="g-5 mt-5 mb-3">
        {isFetching ? <Spinner></Spinner> : creators?.map((creator: Creator) => <DynamicCreator key={creator.id} creator={creator}></DynamicCreator>)}
      </Row>
      <Pagination pageHandler={setPageNo} nextPage={data?.next} prevPage={data?.previous} currentPage={pageNo}></Pagination>
    </section>
  );
};

export default CreatorsPage;
