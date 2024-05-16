import GetInTouch from "../component/GetInTouch";
import Introduction from "../component/Introduction";
import Rating from "../component/Rating";
import VisionMission from "../component/VisionMission";

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
