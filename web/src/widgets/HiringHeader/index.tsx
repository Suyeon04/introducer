import { TextProps } from "@/shared/types";
import { colors } from "@/shared/ui/colors";
import { B1, H3 } from "@/shared/ui/typograpy";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  companyName: string;
  hiringTitle: string;
}

const StyledHiringHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const StyledHeaderTitleText = styled.div<TextProps>`
  color: ${(props) => props.fontColor};
  ${B1};
`;

const StyledHeaderSubText = styled.div<TextProps>`
  color: ${(props) => props.fontColor};
  ${H3};
`;

export default function HiringHeader({ companyName, hiringTitle }: Props) {
  return (
    <StyledHiringHeader>
      <StyledHeaderTitleText fontColor={colors.black}>
        {hiringTitle}
      </StyledHeaderTitleText>
      <StyledHeaderSubText fontColor={colors.black}>
        {companyName}
      </StyledHeaderSubText>
    </StyledHiringHeader>
  );
}
