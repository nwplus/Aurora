import styled from "styled-components";
import { colors } from "../colors";

export const IconsContainer = styled.div`
  font-family: "HK Grotesk", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: ${colors.emerald400};
  display: grid;
`;

export const RowContainer = styled.div`
  display: inline;

  img {
    padding: 10px;
  }
`;
