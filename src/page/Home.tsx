import GetInTouch from "../component/GetInTouch";
import Introduction from "../component/Introduction";
import VisionMission from "../component/VisionMission";

const Home: React.FC = () => {
  return (
    <div>
      <Introduction />
      <VisionMission />
      <GetInTouch />
    </div>
  );
};

export default Home;
