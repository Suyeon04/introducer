import Text from "@/entities/ui/text";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { nanoid } from "nanoid";

interface Props {
  title: string;
  contents: string[];
}

const StyledHiringConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export default function HiringConditionContainer({ title, contents }: Props) {
  return (
    <StyledHiringConditionContainer>
      <Text text={title} fontSize={30} fontWeight={"bold"} />
      {contents.map((content) => (
        <Text text={"· " + content} fontSize={15} key={nanoid()} />
      ))}
    </StyledHiringConditionContainer>
  );
}
