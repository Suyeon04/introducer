import Text from "@/entities/ui/text";
import { B1_B, H3 } from "@/shared/ui/typograpy";
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

export default function HiringHeader({ companyName, hiringTitle }: Props) {
  return (
    <StyledHiringHeader>
      <Text text={hiringTitle} typography={B1_B} />
      <Text text={companyName} typography={H3} />
    </StyledHiringHeader>
  );
}
