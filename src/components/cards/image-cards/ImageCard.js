import styled from "styled-components";
import { colors } from "../../colors/Colors";
import Button from "./ImageCardButton";

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
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 47.69%, rgba(0, 0, 0, 0.8) 100%), url(${(p) => p.imageLink}) center/cover;
    
  }

  &:hover > ${BackgroundImageContainer} {
    background: url(${(p) => p.imageLink}) cover;
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
  align-items: center;
  padding: 1em 2.5em;
`;

const EventDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1.2em;
  font-family: "HK Grotesk", sans-serif;
  font-weight: 700;
  // flex-direction: column;
`;

// ${(p) => p.theme.mediaQueries.mobile} {
//   flex-direction: column;
// }

const getTextColor = (p) => {
  if (p.active) {
    return `
      background: -webkit-linear-gradient(92.58deg, #0DEFE1 0%, #78FF96 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `;
  } else {
    return `
      -webkit-background-clip: text;
      -webkit-text-fill-color: white;
    `;
  }
};

const EventRegistrationStatus = styled.div`
  ${(p) => getTextColor(p)}
`;

const EventDateString = styled.div`
  color: ${colors.grey500};
`;

const ImageCardComponent = ({ active, link, date, imageLink }) => {
  return (
    <CardContainer imageLink={imageLink}>
      <OverlayContainer>
        <OverLayFooterContainer>
          <EventDataContainer>
            <EventRegistrationStatus active={active}>
              {`Registration ${active ? "Open" : "Closed"}`}
            </EventRegistrationStatus>
            <EventDateString>{date}</EventDateString>
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
