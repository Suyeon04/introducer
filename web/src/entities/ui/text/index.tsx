import React from "react";
import styled from "@emotion/styled";

interface TextProps {
  text: string;
  fontWeight?: string;
  fontSize: string;
  fontColor?: string;
}

const StyledText = styled.text<TextProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => props.fontWeight};
`;

const Text: React.FC<TextProps> = ({
  text,
  fontWeight = "normal",
  fontSize,
  fontColor,
}) => {
  return (
    <StyledText
      text={text}
      fontWeight={fontWeight}
      fontSize={fontSize}
      fontColor={fontColor}
    >
      {text}
    </StyledText>
  );
};

export default Text;
