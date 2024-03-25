import styled from "@emotion/styled";
import gutter_horizontal from "../../assets/gutter_horizontal.svg";
import gutter_vertical from "../../assets/gutter_vertical.svg";

interface GutterProps {
  orientation: "vertical" | "horizontal";
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  changeBackColor?: boolean;
}

export const Gutter = ({ orientation, onMouseDown, changeBackColor = true }: GutterProps) => {
  return <GutterStyle orientation={orientation} onMouseDown={onMouseDown} changeBackColor={changeBackColor} />;
};

const GutterStyle = styled.div<GutterProps>`
  width: ${props => props.orientation === "horizontal" && "24px"};
  height: ${props => props.orientation === "vertical" && "24px"};
  background: ${props =>
    props.orientation === "horizontal"
      ? `url(${gutter_horizontal}) no-repeat center`
      : `url(${gutter_vertical}) no-repeat center`};
  background-size: ${props => (props.orientation === "horizontal" ? "auto/40px" : "40px/auto")};
  border-right: ${props => props.orientation === "horizontal" && "2px solid var(--background-color)"};
  border-top: ${props => props.orientation === "vertical" && "2px solid var(--background-color)"};
  cursor: ${props => (props.orientation === "horizontal" ? "e-resize" : "n-resize")};
  z-index: 1;
  background-color: ${props => (props.changeBackColor ? "#32323a" : "#3F3F47")};
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
