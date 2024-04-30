import React from "react";
import styled from "@emotion/styled";
import { GenerateFontProps } from "@/shared/types";

interface TextProps {
  text: string;
  fontColor?: string;
  padding?: number;
  typography: React.CSSProperties;
}

interface StyledText {
  fontColor?: string;
  padding?: number;
}

const StyledText = styled.div<StyledText>`
  color: ${(props) => props.fontColor};
  padding: ${(props) => props.padding}px;
`;

const Text: React.FC<TextProps> = ({
  text,
  fontColor,
  padding,
  typography,
}) => {
  return (
    <StyledText fontColor={fontColor} padding={padding} style={typography}>
      {text}
    </StyledText>
  );
};

export default Text;
