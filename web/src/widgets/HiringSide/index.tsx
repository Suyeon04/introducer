import Text from "@/entities/ui/text";
import Button from "@/entities/ui/button";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import KakaoMap from "@/entities/ui/kakao-map";
import { B1 } from "@/shared/ui/typograpy";

interface Props {
  importantContents: { title: string; content: string }[];
  location: string;
}

const StyledHiringSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledHiringSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

const StyledHiringSideContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLine = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  width: 100%;
`;

const StyledHiringSideTexts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 60px;
`;

export default function HiringSide({ importantContents, location }: Props) {
  return (
    <StyledHiringSide>
      <StyledHiringSideWrapper>
        {importantContents.map((content, index) => {
          const isLastItem = index === importantContents.length - 1;
          return (
            <StyledHiringSideContent key={nanoid()}>
              <StyledHiringSideTexts>
                <Text
                  text={content.title}
                  padding={10}
                  fontColor={"#bababa"}
                  typography={{
                    fontWeight: 0,
                    fontSize: 0,
                    lineHeight: undefined,
                  }}
                />
                <Text text={content.content} padding={10} typography={B1} />
              </StyledHiringSideTexts>
              {!isLastItem && <StyledLine />}
            </StyledHiringSideContent>
          );
        })}
        <KakaoMap width={0} height={0} />
      </StyledHiringSideWrapper>
      <Button
        text={"지원하기"}
        fontSize={15}
        backgroundColor={"#4A4A4A"}
        fontColor={"#FFFFFF"}
        width={400}
        height={45}
        borderRadius={5}
      />
    </StyledHiringSide>
  );
}
