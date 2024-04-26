import Text from "@/entities/ui/text";
import styled from "@emotion/styled";
import { nanoid } from "nanoid";

interface Props {
  title: string;
  contents: string[];
}

const StyledHiringConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHiringConditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 25px;
  padding-top: 5px;
`;

export default function HiringConditionContainer({ title, contents }: Props) {
  return (
    <StyledHiringConditionContainer>
      <Text text={title} fontSize={30} fontWeight={"bold"} />
      <StyledHiringConditionWrapper>
        {contents.map((content) => (
          <Text text={"· " + content} fontSize={15} key={nanoid()} />
        ))}
      </StyledHiringConditionWrapper>
    </StyledHiringConditionContainer>
  );
}
