import { TextProps } from "@/shared/types";
import { Body1_R, H3 } from "@/shared/ui/typograpy";
import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import { colors } from "@/shared/ui/colors";

interface Props {
  title: string;
  contents: string[];
}

const StyledHiringConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHiringConditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 25px;
  padding-top: 5px;
`;

const StyledTitleText = styled.div<TextProps>`
  color: ${(props) => props.fontColor};
  ${H3};
`;

const StyledHiringConditionText = styled.div<TextProps>`
  color: ${(props) => props.fontColor};
  ${Body1_R};
`;

export default function HiringConditionContainer({ title, contents }: Props) {
  return (
    <StyledHiringConditionContainer>
      <StyledTitleText fontColor={colors.black} padding={0}>
        {title}
      </StyledTitleText>
      <StyledHiringConditionWrapper>
        {contents.map((content) => (
          <StyledHiringConditionText
            fontColor={colors.black}
            padding={0}
            key={nanoid()}
          >
            {"· " + content}
          </StyledHiringConditionText>
        ))}
      </StyledHiringConditionWrapper>
    </StyledHiringConditionContainer>
  );
}
