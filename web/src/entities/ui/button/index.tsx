import React from "react";
import styled from "@emotion/styled";

interface TextProps {
  text: string;
  fontSize: number;
  fontColor?: string;
  backgroundColor: string;
  width: number;
  height: number;
}

const StyledText = styled.button<TextProps>`
  font-size: ${(props) => props.fontSize + "px"};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  width: ${(props) => props.width + "px" || "auto"};
  height: ${(props) => props.height + "px" || "auto"};

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  }
`;

const Text: React.FC<TextProps> = ({
  text,
  fontSize,
  fontColor,
  backgroundColor,
  width,
  height,
}) => {
  return (
    <StyledText
      text={text}
      fontSize={fontSize}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
    >
      {text}
    </StyledText>
  );
};

export default Text;
