import SlideImage from "@/widgets/SlideImage";
import styled from "@emotion/styled";

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
          <div>
            <div>asdf</div>
            <div>asdf</div>
          </div>
        </Body>
      </Container>
    </>
  );
}
