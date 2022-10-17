import styled from "styled-components";
import React from "react";

import { ProgressBarCSS, FilledProgressBarCSS } from "./ProgressBarCSS";

const getProgressPercent = (p) => {
  return `
    width: ${p.progressPercent}%;
  `;
};

const ProgressBarComponent = styled.div`
  ${ProgressBarCSS}
`;

const FilledProgressBar = styled.div`
  ${FilledProgressBarCSS}
  ${(p) => getProgressPercent(p)}
`;

const ProgressBarContainer = ({ progressPercent }) => {
  return (
    <ProgressBarComponent>
      <FilledProgressBar progressPercent={progressPercent} />
    </ProgressBarComponent>
  );
};

export { ProgressBarContainer };
