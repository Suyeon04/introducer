import SlideImage from "@/widgets/SlideImage";
import styled from "@emotion/styled";
import Text from "@/entities/ui/text";
import CordingLanguge from "@/entities/ui/cording-language";

const data = {
  headerImageUrlArray: [
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
  ],
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
`;
const Body = styled.div`
  display: flex;
  width: 100%;
`;

export default function LoginPage() {
  return (
    <>
      <Container>
        <Header>
          <SlideImage imageUrlArray={data.headerImageUrlArray} />
        </Header>
        <Body>
          <Text text={"asdf"} fontSize={"20px"} fontWeight={"bold"} />
          <CordingLanguge
            languageImageUrl={
              "https://i.pinimg.com/564x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg"
            }
            languageName={"javascript"}
          />
          <div>
            <div>asdf</div>
            <div>asdf</div>
          </div>
        </Body>
      </Container>
    </>
  );
}
