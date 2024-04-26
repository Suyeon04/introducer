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
  padding: 30px;
`;

export default function HiringHeader({ companyName, hiringTitle }: Props) {
  return (
    <StyledHiringHeader>
      <Text text={hiringTitle} fontSize={50} fontWeight={"bold"} />
      <Text text={companyName} fontSize={20} />
    </StyledHiringHeader>
  );
}
