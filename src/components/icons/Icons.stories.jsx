import React from "react";
import { IconsContainer, RowContainer } from "./Icons";

import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowRightUp,
  ArrowRightDown,
  ArrowLeftDown,
  ArrowLeftUp,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronDoubleUp,
  ChevronDoubleDown,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  CaretDown,
  CaretUp,
  CaretLeft,
  CaretRight,
} from "../../assets/icons";

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
