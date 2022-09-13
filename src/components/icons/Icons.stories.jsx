import React from "react";
import { IconsContainer, RowContainer } from "./Icons";

import ArrowUp from "../../assets/icons/arrows/arrow-up.svg";
import ArrowDown from "../../assets/icons/arrows/arrow-down.svg";
import ArrowLeft from "../../assets/icons/arrows/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrows/arrow-right.svg";
import ArrowRightUp from "../../assets/icons/arrows/arrow-right-up.svg";
import ArrowRightDown from "../../assets/icons/arrows/arrow-right-down.svg";
import ArrowLeftDown from "../../assets/icons/arrows/arrow-left-down.svg";
import ArrowLeftUp from "../../assets/icons/arrows/arrow-left-up.svg";
import ChevronUp from "../../assets/icons/arrows/chevron-up.svg";
import ChevronDown from "../../assets/icons/arrows/chevron-down.svg";
import ChevronLeft from "../../assets/icons/arrows/chevron-left.svg";
import ChevronRight from "../../assets/icons/arrows/chevron-right.svg";
import ChevronDoubleUp from "../../assets/icons/arrows/chevron-double-up.svg";
import ChevronDoubleDown from "../../assets/icons/arrows/chevron-double-down.svg";
import ChevronDoubleLeft from "../../assets/icons/arrows/chevron-double-left.svg";
import ChevronDoubleRight from "../../assets/icons/arrows/chevron-double-right.svg";
import CaretDown from "../../assets/icons/arrows/caret-down.svg";
import CaretUp from "../../assets/icons/arrows/caret-up.svg";
import CaretLeft from "../../assets/icons/arrows/caret-left.svg";
import CaretRight from "../../assets/icons/arrows/caret-right.svg";

export default {
  title: "Icons",
};

const Template = () => (
  <IconsContainer>
    Arrows
    <RowContainer>
      <img src={ArrowUp} alt="Arrow up" />
      <img src={ArrowDown} alt="Arrow down" />
      <img src={ArrowLeft} alt="Arrow left" />
      <img src={ArrowRight} alt="Arrow right" />
      <img src={ArrowRightUp} alt="Arrow right up" />
      <img src={ArrowRightDown} alt="Arrow right down" />
      <img src={ArrowLeftDown} alt="Arrow left down" />
      <img src={ArrowLeftUp} alt="Arrow left up" />
      <img src={ChevronUp} alt="Chevron up" />
      <img src={ChevronDown} alt="Chevron down" />
      <img src={ChevronLeft} alt="Chevron left" />
      <img src={ChevronRight} alt="Chevron right" />
      <img src={ChevronDoubleUp} alt="Chevron double up" />
      <img src={ChevronDoubleDown} alt="Chevron double down" />
      <img src={ChevronDoubleLeft} alt="Chevron double left" />
      <img src={ChevronDoubleRight} alt="Chevron double right" />
      <img src={CaretDown} alt="Caret down" />
      <img src={CaretUp} alt="Caret up" />
      <img src={CaretLeft} alt="Caret left" />
      <img src={CaretRight} alt="Caret right" />
    </RowContainer>
  </IconsContainer>
);

export const Icons = Template.bind({});
