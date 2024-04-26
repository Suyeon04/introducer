import Text from "@/entities/ui/text";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  title: string;
  contents: string[];
}

const HiringConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export default function HiringHeader({ title, contents }: Props) {
  return (
    <HiringConditionContainer>
      <Text text={title} fontSize={30} fontWeight={"bold"} />
      {contents.map((content, index) => (
        <Text text={"· " + content} fontSize={15} key={index} />
      ))}
    </HiringConditionContainer>
  );
}
