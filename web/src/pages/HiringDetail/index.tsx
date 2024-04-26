import SlideImage from "@/widgets/SlideImage";
import styled from "@emotion/styled";
import HiringHeader from "@/widgets/HiringHeader";
import HiringLanguageContainer from "@/widgets/HiringLanguageContainer";
import HiringConditionContainer from "@/widgets/HiringConditionContainer";

const data = {
  companyName: "코인원(coinone)",
  hiringTitle: "Web Frontend 개발자",
  headerImageUrlArray: [
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
  ],
  usedLanguage: [
    {
      languageImageUrl:
        "https://i.pinimg.com/564x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg",
      languageName: "javascript",
    },
    {
      languageImageUrl:
        "https://i.pinimg.com/564x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg",
      languageName: "javascript",
    },
    {
      languageImageUrl:
        "https://i.pinimg.com/564x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg",
      languageName: "javascript",
    },
    {
      languageImageUrl:
        "https://i.pinimg.com/564x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg",
      languageName: "javascript",
    },
    {
      languageImageUrl:
        "https://i.pinimg.com/564x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg",
      languageName: "javascript",
    },
    {
      languageImageUrl:
        "https://i.pinimg.com/564x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg",
      languageName: "javascript",
    },
  ],
  detailContents: [
    {
      id: 1,
      title: "주요업무",
      contents: [
        "React, Next.js 개발 경력 2년 이상 또는 그에 준하는 역량을 갖추신 분",
        "HTML, CSS, TypeScript, Javascript(ES6+)에 대한 이해를 보유하신 분",
        "원활한 커뮤니케이션 능력을 보유하신 분",
      ],
    },
    {
      id: 2,
      title: "주요업무",
      contents: [
        "React, Next.js 개발 경력 2년 이상 또는 그에 준하는 역량을 갖추신 분",
        "HTML, CSS, TypeScript, Javascript(ES6+)에 대한 이해를 보유하신 분",
        "원활한 커뮤니케이션 능력을 보유하신 분",
      ],
    },
    {
      id: 3,
      title: "주요업무",
      contents: [
        "React, Next.js 개발 경력 2년 이상 또는 그에 준하는 역량을 갖추신 분",
        "HTML, CSS, TypeScript, Javascript(ES6+)에 대한 이해를 보유하신 분",
        "원활한 커뮤니케이션 능력을 보유하신 분",
      ],
    },
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
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`;

export default function LoginPage() {
  return (
    <>
      <Container>
        <Header>
          <SlideImage
            imageUrlArray={data.headerImageUrlArray}
            companyName={data.companyName}
          />
        </Header>
        <Body>
          <HiringHeader
            companyName={data.companyName}
            hiringTitle={data.hiringTitle}
          />
          <HiringLanguageContainer usedLanguage={data.usedLanguage} />
          {data.detailContents.map((content) => (
            <HiringConditionContainer
              title={content.title}
              contents={content.contents}
              key={content.id}
            />
          ))}
        </Body>
      </Container>
    </>
  );
}
