import Text from "@/entities/ui/text";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  companyName: string;
  hiringTitle: string;
}

const StyledHiringSide = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 10px;
  border: 1px solid #ccc;
`;

export default function HiringSide({ companyName, hiringTitle }: Props) {
  return (
    <StyledHiringSide>
      <Text text={hiringTitle} fontSize={50} fontWeight={"bold"} />
      <Text text={companyName} fontSize={20} />
    </StyledHiringSide>
  );
}
