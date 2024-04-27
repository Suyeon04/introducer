import React from "react";
import styled from "@emotion/styled";

interface TextProps {
  text: string;
  fontWeight?: string;
  fontSize: number;
  fontColor?: string;
  padding?: number;
}

const StyledText = styled.text<TextProps>`
  font-size: ${(props) => props.fontSize + "px"};
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => props.fontWeight};
  padding: ${(props) => props.padding + "px"};
`;

const Text: React.FC<TextProps> = ({
  text,
  fontWeight = "normal",
  fontSize,
  fontColor,
  padding,
}) => {
  return (
    <StyledText
      text={text}
      fontWeight={fontWeight}
      fontSize={fontSize}
      fontColor={fontColor}
      padding={padding}
    >
      {text}
    </StyledText>
  );
};

export default Text;
