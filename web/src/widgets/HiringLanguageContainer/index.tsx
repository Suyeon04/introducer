import CordingLanguage from "@/entities/ui/cording-language";
import { TextProps } from "@/shared/types";
import { colors } from "@/shared/ui/colors";
import { H3, H3_B } from "@/shared/ui/typograpy";
import styled from "@emotion/styled";
import { nanoid } from "nanoid";

interface Props {
  usedLanguage: { languageImageUrl: string; languageName: string }[];
}

const StyledHiringConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;

const StyledCordingLanguageWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
const StyledTitleText = styled.div<TextProps>`
  color: ${(props) => props.fontColor};
  ${H3};
`;

export default function HiringLanguageContainer({ usedLanguage }: Props) {
  return (
    <StyledHiringConditionContainer>
      <StyledTitleText fontColor={colors.black}>{"사용 언어"}</StyledTitleText>
      <StyledCordingLanguageWrapper>
        {usedLanguage.map((content) => (
          <CordingLanguage
            languageImageUrl={content.languageImageUrl}
            languageName={content.languageName}
            key={nanoid()}
          />
        ))}
      </StyledCordingLanguageWrapper>
    </StyledHiringConditionContainer>
  );
}
