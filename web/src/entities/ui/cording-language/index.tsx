import React from "react";
import styled from "@emotion/styled";
import Image from "@/entities/ui/image";
import Text from "@/entities/ui/text";

interface CodingLanguageProps {
  languageImageUrl: string;
  languageName: string;
}

const StyledCodingLanguage = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
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
        <Image src={languageImageUrl} width={20} height={20} />
        <Text text={languageName} fontSize={16} fontWeight="bold" />
      </ContentContainer>
    </StyledCodingLanguage>
  );
};

export default CodingLanguage;
