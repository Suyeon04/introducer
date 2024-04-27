import Text from "@/entities/ui/text";
import Button from "@/entities/ui/button";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  importantContents: { title: string; content: string }[];
  location: string;
}

const StyledHiringSide = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 10px;
  border: 1px solid #ccc;
`;

export default function HiringSide({ importantContents, location }: Props) {
  return (
    <StyledHiringSide>
      <Button
        text={"지원하기"}
        fontSize={15}
        backgroundColor={"#4A4A4A"}
        fontColor={"#FFFFFF"}
        width={200}
        height={40}
      />
    </StyledHiringSide>
  );
}
