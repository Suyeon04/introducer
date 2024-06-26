import Text from "@/entities/ui/text";
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
      <Text text={hiringTitle} fontSize={40} fontWeight={"bold"} />
      <Text text={companyName} fontSize={20} />
    </StyledHiringHeader>
  );
}
