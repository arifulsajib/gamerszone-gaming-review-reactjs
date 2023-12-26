import HomeBanner from "../../Components/HomePage/HomeBanner/HomeBanner";
import ImageSlider from "../../Components/HomePage/ImageSlider/ImageSlider";
import JoinCommunity from "../../Components/HomePage/JoinCommunity/JoinCommunity";
import PopularGames from "../../Components/HomePage/PopularGames/PopularGames";

const HomePage = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <PopularGames></PopularGames>
      <ImageSlider></ImageSlider>
      <JoinCommunity></JoinCommunity>
    </>
  );
};

export default HomePage;
