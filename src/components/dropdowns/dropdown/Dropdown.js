import React, {useState} from "react";
import styled from "styled-components"
import { dropdownWrapperCSS, dropdownOuterCSS, dropdownInnerCSS, dropdownArrowCSS } from "./DropdownCSS";
import { ChevronUp, ChevronDown } from "../../../assets/icons";
import { colors } from "../../colors/index";

const DropdownInner = styled.div`
		${dropdownInnerCSS}
`;

const DropdownArrow = styled.div`
	${dropdownArrowCSS}
`;

const Image = styled.img`
		filter: invert(1) sepia(1) saturate(5) hue-rotate(15deg);
`;

const Dropdown = ({outerText, innerText, width}) => {
	
	const [open, setOpen] = useState(false);

	const toggleDropdown = () => {
		setOpen(!open);
	};

	const ToggleStyles = () => {
		if(open) {
			return `
				{
					background: ${colors.gradientMainVertical};
				}
			`
		} else {
			return `
				{
					background: ${colors.white};
				}
			`
		}
	}

	const DropdownWrapper = styled.div`
		${dropdownWrapperCSS}
		${() => `{ width: ${width}px }`}
	`;

	const DropdownOuter = styled.div`
		${dropdownOuterCSS}
		${ToggleStyles()}
	`;

	return(
			<DropdownWrapper>
				<DropdownOuter onClick={toggleDropdown}>
					{outerText}
					<DropdownArrow> 
						{open? <Image src={ChevronUp} alt='Chevron up'/>: <Image src={ChevronDown} alt='Chevron down'/>}
					</DropdownArrow>
				</DropdownOuter>
				{open && 
					<DropdownInner className="toggle">
						{innerText}
					</DropdownInner>
				}
			</DropdownWrapper>
		);
}

export { Dropdown };