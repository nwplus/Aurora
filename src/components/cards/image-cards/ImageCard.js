import styled from "styled-components";
import { colors } from "../../colors/Colors";
import { Button } from "../../button/button/Button.js";


const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const CardContainer = styled.div`
  width: 450px;
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
  margin: 2em;
  position: relative;

  & > ${BackgroundImageContainer} {
    background: url(${(p) => p.imageLink});
    background-size: cover;
  }

  &:hover > ${BackgroundImageContainer} {
    background: url(${(p) => p.imageLink}) centre;
    transform: scale(1.1);
    transition: 300ms;
  }
`;

const OverlayContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const OverLayFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  width: 100%;
  align-items: center;
  padding: 1em 2.5em;
`;

const EventDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: bold;
`;

// ${(p) => p.theme.mediaQueries.mobile} {
//   flex-direction: column;
// }

const EventRegistrationStatus = styled.div`
  color: ${(p) => (p.active ? colors.gradientMain : "white")};
`;

const EventDateString = styled.div`
  color: ${colors.grey500};
`;

const ImageCardComponent = ({ active, link, dateString, imageLink }) => {
  console.log(imageLink);
  return (
    <CardContainer imageLink={imageLink}>
      <OverlayContainer>
        <OverLayFooterContainer>
          <EventDataContainer>
            <EventRegistrationStatus registrationOpen={active}>
              {`Registration ${active ? "Open" : "Closed"}`}
            </EventRegistrationStatus>
            <EventDateString>{dateString}</EventDateString>
          </EventDataContainer>
          <Button
            height="3em"
            link={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </Button>
        </OverLayFooterContainer>
      </OverlayContainer>
      <BackgroundImageContainer />
    </CardContainer>
  );
};

export default ImageCardComponent;
