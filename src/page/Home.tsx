import GetInTouch from "../component/home/GetInTouch";
import Introduction from "../component/home/Introduction";
import Rating from "../component/home/Rating";
import VisionMission from "../component/home/VisionMission";

const Home: React.FC = () => {
  return (
    <div>
      <Introduction />
      <VisionMission />
      <Rating />
      <GetInTouch />
    </div>
  );
};

export default Home;
