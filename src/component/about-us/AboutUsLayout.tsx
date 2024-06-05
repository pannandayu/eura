import { motion, MotionStyle } from "framer-motion";
import { useSetAtom } from "jotai";
import _ from "lodash";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menuAtom } from "../../context/atom";
import Authenticity from "./Authenticity";
import Ethos from "./Ethos";
import History from "./History";
import Rating from "./Rating";
import VisionMission from "./VisionMission";

const { BASE_URL } = import.meta.env;

const layoutStyle = { height: "500vh", background: "#426d55" };
const euraHomeButtonStyle = {
  margin: 0,
  position: "absolute",
  marginTop: "4%",
  marginLeft: "4.5%",
} as MotionStyle;

const AboutUsLayout: React.FC = () => {
  const [pixel, setPixel] = useState(0);
  const [renderedComp, setRenderedComp] = useState({
    authenticity: false,
    ethos: false,
    visionMission: false,
    rating: false,
  });
  const setMenuState = useSetAtom(menuAtom);

  useEffect(() => {
    const scrollHandler = _.throttle(() => {
      setPixel(window.scrollY);
      setMenuState(false);
    }, 100);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    if (pixel > 150) {
      setRenderedComp((prev) => {
        return {
          ...prev,
          authenticity: true,
        };
      });
    }
    if (pixel > 1000) {
      setRenderedComp((prev) => {
        return {
          ...prev,
          ethos: true,
        };
      });
    }
    if (pixel > 1700) {
      setRenderedComp((prev) => {
        return {
          ...prev,
          visionMission: true,
        };
      });
    }
    if (pixel > 2800) {
      setRenderedComp((prev) => {
        return {
          ...prev,
          rating: true,
        };
      });
    }
  }, [pixel]);

  return (
    <div style={layoutStyle}>
      <motion.p
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        style={euraHomeButtonStyle}
      >
        <Link
          style={{ color: "#eeeba7", textDecoration: "none" }}
          to={BASE_URL}
          onClick={() => setMenuState(false)}
        >
          Eura
        </Link>
      </motion.p>
      <article>
        <History />
        {renderedComp.authenticity && <Authenticity />}
        {renderedComp.ethos && (
          <Fragment>
            <Ethos />
            <hr style={{ width: "50%" }} />
          </Fragment>
        )}
        {renderedComp.visionMission && (
          <Fragment>
            <VisionMission />
            <hr style={{ width: "50%" }} />
          </Fragment>
        )}
        {renderedComp.rating && <Rating />}
      </article>
    </div>
  );
};

export default AboutUsLayout;
