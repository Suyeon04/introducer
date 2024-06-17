import Button from "@/entities/ui/button";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import KakaoMap from "@/entities/ui/kakao-map";
import { B1, Body1_R, H3_R } from "@/shared/ui/typograpy";
import { TextProps } from "@/shared/types";
import { colors } from "@/shared/ui/colors";

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

const StyledHiringSideTextWraaper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const StyledHiringSideText = styled.div<TextProps>`
  color: ${(props) => props.fontColor};
  ${Body1_R};
`;

export default function HiringSide({ importantContents, location }: Props) {
  return (
    <StyledHiringSide>
      <StyledHiringSideWrapper>
        {importantContents.map((content, index) => {
          const isLastItem = index === importantContents.length - 1;
          return (
            <StyledHiringSideContent key={nanoid()}>
              <StyledHiringSideTextWraaper>
                <StyledHiringSideText fontColor={colors.grey}>
                  {content.title}
                </StyledHiringSideText>
                <StyledHiringSideText fontColor={""}>
                  {content.content}
                </StyledHiringSideText>
              </StyledHiringSideTextWraaper>
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
