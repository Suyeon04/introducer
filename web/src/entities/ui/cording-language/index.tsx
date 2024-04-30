import React from "react";
import styled from "@emotion/styled";
import Image from "@/entities/ui/image";
import Text from "@/entities/ui/text";
import { Body1_R } from "@/shared/ui/typograpy";

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
        <Text text={languageName} typography={Body1_R} />
      </ContentContainer>
    </StyledCodingLanguage>
  );
};

export default CodingLanguage;
