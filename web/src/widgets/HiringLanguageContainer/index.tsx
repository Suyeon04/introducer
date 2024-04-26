import CordingLanguage from "@/entities/ui/cording-language";
import Text from "@/entities/ui/text";
import styled from "@emotion/styled";
import { nanoid } from "nanoid";

interface Props {
  usedLanguage: { languageImageUrl: string; languageName: string }[];
}

const StyledHiringConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledCordingLanguageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export default function HiringLanguageContainer({ usedLanguage }: Props) {
  return (
    <StyledHiringConditionContainer>
      <Text text={"사용 언어"} fontSize={30} fontWeight={"bold"} />
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
