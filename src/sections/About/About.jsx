import PropTypes from "prop-types";

import { IconContainer } from "sections/ContactUs/ContactUs.styled";
import { Description, Section, Title, Text } from "./About.styled";
import { XIcon } from "components/svg/XIcon/XIcon";
import { useEffect, useState } from "react";
import { useWindowWidth } from "hooks/useWindowWidth";

const About = ({ ref1 }) => {
  const [width, setWidth] = useState();

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth) setWidth(windowWidth);
  }, [windowWidth]);
  return (
    <Section ref={ref1} className="about">
      <Title>
        a Story that started with
        <span> one simple {width < 768 && <br />} ape</span>
      </Title>
      <Description>
        Who got fed up with boring and hypocritic commonplace this is how the
        idea of escaping and dynamic journey on the {width >= 768 && <br />}{" "}
        yacht
      </Description>
      <IconContainer className="about">
        <XIcon
          width={width >= 1280 ? 36 : 24}
          height={width >= 1280 ? 36 : 24}
        />
      </IconContainer>
      <Text>
        Each artwork in the collection tells a story of one journey. Arts are
        Randomly generated by users
      </Text>
      {/* <div>...Have no limits...</div> */}
    </Section>
  );
};

About.propTypes = {
  ref1: PropTypes.object,
};

export { About };
