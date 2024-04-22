
import SlideImage from '@/widgets/SlideImage';
import styled from '@emotion/styled';

const data = {
    headerImageUrlArray: ["https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI", "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"]
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
const Header = styled.div`
width: 100%;
height: 100%;
`;

export default function LoginPage() {
    return (
        <>
            <Container>
                <Header>
                    <div>
                        <SlideImage imageUrlArray={data.headerImageUrlArray} />
                    </div>
                </Header>
                <div>asdf</div>
                <div>asdf</div>
            </Container >
        </>
    );
}