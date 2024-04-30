import React from "react";
import styled from "@emotion/styled";
import { GenerateFontProps } from "@/shared/types";
import { generateFont } from "@/shared/ui/typograpy";

interface TextProps {
  text: string;
  fontColor?: string;
  padding?: number;
  typography: GenerateFontProps;
}

const StyledText = styled.div<TextProps>`
  color: ${(props) => props.fontColor};
  padding: ${(props) => props.padding + "px"};
`;

const Text: React.FC<TextProps> = ({
  text,
  fontColor,
  padding,
  typography,
}) => {
  return (
    <StyledText
      fontColor={fontColor}
      padding={padding}
      typography={typography}
      text={text}
    >
      {text}
    </StyledText>
  );
};

export default Text;
