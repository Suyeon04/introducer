import React from "react";
import styled from "@emotion/styled";

interface TextProps {
  text: string;
  fontSize: number;
  fontColor?: string;
  backgroundColor: string;
  width: number;
  height: number;
  borderRadius?: number;
}

const StyledText = styled.button<TextProps>`
  font-size: ${(props) => props.fontSize + "px"};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  width: ${(props) => props.width + "px" || "auto"};
  height: ${(props) => props.height + "px" || "auto"};
  border-radius: ${(props) => props.borderRadius + "px" || "0"};

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
  borderRadius,
}) => {
  return (
    <StyledText
      text={text}
      fontSize={fontSize}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      {text}
    </StyledText>
  );
};

export default Text;
