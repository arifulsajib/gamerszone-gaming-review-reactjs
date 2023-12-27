import HomeBanner from "../../Components/HomePage/HomeBanner/HomeBanner";
import HomeGameStores from "../../Components/HomePage/HomeGameStores/HomeGameStores";
import ImageSlider from "../../Components/HomePage/ImageSlider/ImageSlider";
import JoinCommunity from "../../Components/HomePage/JoinCommunity/JoinCommunity";
import PopularGames from "../../Components/HomePage/PopularGames/PopularGames";
import TopGenres from "../../Components/HomePage/TopGenres/TopGenres";

const HomePage = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <PopularGames></PopularGames>
      <ImageSlider></ImageSlider>
      <JoinCommunity></JoinCommunity>
      <TopGenres></TopGenres>
      <HomeGameStores></HomeGameStores>
    </>
  );
};

export default HomePage;
