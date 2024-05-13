import React from "react";
import styled from "@emotion/styled";
import Image from "@/entities/ui/image";
import { Body1 } from "@/shared/ui/typograpy";
import { TextProps } from "@/shared/types";
import { colors } from "@/shared/ui/colors";

interface CodingLanguageProps {
  languageImageUrl: string;
  languageName: string;
}

const StyledCodingLanguage = styled.div`
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  background-color: #bababa;
  padding: 7px;
  border-radius: 5px;
  gap: 10px;
`;

const StyledText = styled.div<TextProps>`
  color: ${(props) => props.fontColor};
  ${Body1};
`;

const CodingLanguage: React.FC<CodingLanguageProps> = ({
  languageImageUrl,
  languageName,
}) => {
  return (
    <StyledCodingLanguage>
      <ContentContainer>
        <Image
          src={languageImageUrl}
          width={20}
          height={20}
          alt={languageName}
        />
        <StyledText fontColor={colors.black}>{languageName}</StyledText>
      </ContentContainer>
    </StyledCodingLanguage>
  );
};

export default CodingLanguage;
