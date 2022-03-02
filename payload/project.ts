import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '트위터 클론 프로젝트',
      startedAt: '2022-02-19',
      endedAt: '2022-03-03',
      where: '개인',

      descriptions: [
        {
          content: 'Firebase와 반응형 사이트를 연습하기 위해 진행한 프로젝트입니다.',
          weight: 'MEDIUM',
        },
        {
          content: '메신저 기능 , 자신에게만 보이는 메모할 수 있는 투 두 리스트 기능 구현',
        },
        {
          content: '회원가입 , 로그인 , 소셜 로그인 기능, 프로필 수정하는 기능 구현',
        },
        {
          content: '반응형 사이트 구현',
        },
        {
          content: '깃허브 링크',
          href: 'https://github.com/Gilpop8663/clone-social-network-service',
        },
      ],
    },
    {
      title: '꽃 판매 회사 프로젝트',
      startedAt: '2022-02-21',
      endedAt: '2022-02-22',
      where: '협업',
      descriptions: [
        {
          content: '꽃을 파는 회사의 메인 화면 페이지 프로젝트입니다.',
          weight: 'MEDIUM',
        },
        {
          content:
            '크로스 브라우징을 위해 IE8에서 작동하지 않는 scroll-behavior을 setTimeout으로 비슷한 퍼포먼스를 구현',
        },
        {
          content: '자바스크립트만 이용해서 꽃을 파는 페이지 개발',
        },
        {
          content:
            '사용자의 스크롤 높이를 파악하여 스크롤을 내릴 시 노란색으로 border 값이 생기고, 모바일에서는 메뉴가 사라지게 구현.',
        },
        {
          content: '반응형 디자인 구현',
        },
        { content: '깃허브 링크', href: 'https://github.com/Gilpop8663/07_kukka' },
      ],
    },
    {
      title: '어린이 교육 회사 프로젝트',
      startedAt: '2022-02-14',
      endedAt: '2022-02-16',
      where: '협업',
      descriptions: [
        {
          content: '교육 어플 홍보 및 회사 홍보 페이지 프로젝트입니다.',
          weight: 'MEDIUM',
        },
        {
          content:
            '슬라이드가 5초 간격으로 한 장씩 자동으로 넘어가고 슬라이드를 사용자가 이용하였을 때 시간이 초기화되고 다시 5초 뒤에 자동으로 넘어가게 구현',
        },
        {
          content: '슬라이드가 작동 중일 때 중복하여서 클릭이 되지 않게 구현',
        },
        {
          content: 'Next.js와 Cypress를 이용한 e2e 테스트 진행',
        },
        { content: '깃허브 링크', href: 'https://github.com/Gilpop8663/05_01_peanutSchool' },
      ],
    },
    {
      title: '메신저 프로젝트',
      startedAt: '2022-02-10',
      endedAt: '2022-02-14',
      where: '협업',
      descriptions: [
        {
          content: '사용자들이 채팅할 수 있는 메신저 프로젝트입니다. ',
          weight: 'MEDIUM',
        },
        {
          content: 'Redux를 이용한 State 관리',
        },
        {
          content: 'useRef를 사용하여 채팅 메시지가 갱신될 때마다 맨 아래로 스크롤되도록 구현',
        },
        {
          content: '메신저에 shift+enter를 하였을 때 "/n"을 인식하도록 white-space css 속성 적용',
        },
        { content: '깃허브 링크', href: 'https://github.com/Gilpop8663/04_messenger' },
      ],
    },
    {
      title: '상품 정보 사이트 프로젝트',
      startedAt: '2022-01-31',
      endedAt: '2022-02-04',
      where: '협업',
      descriptions: [
        {
          content: '가구들의 툴팁을 볼 수 있는 상품 정보 페이지 프로젝트입니다.',
          weight: 'MEDIUM',
        },
        {
          content: ' framer-motion 라이브러리를 사용하여 하단의 상품목록 드래그 기능 구현',
        },
        {
          content:
            'API에서 pointX, pointY 해서 css 스타일로 각각 left, top에 넣어주어서 위치를 조정',
        },
        {
          content: ' API의 x, y 위치에 따라 말풍선과 정보의 위치가 다르게 구현',
        },
        { content: '깃허브 링크', href: 'https://github.com/Gilpop8663/productLink' },
      ],
    },
    {
      title: '어드민 페이지 프로젝트',
      startedAt: '2022-01-27',
      endedAt: '2022-01-30',
      where: '협업',
      descriptions: [
        {
          content: '회사의 상품들을 관리할 수 있는 어드민 페이지 프로젝트입니다.',
          weight: 'MEDIUM',
        },
        {
          content: '카테고리 지정, 필터 태그 지정 기능을 구현',
        },
        { content: '상품 썸네일 이미지 업로드 기능 구현' },
        {
          content: '상품 배송 설정 기능 구현',
        },
        {
          content: '공통으로 사용되는 모듈을 만들어 관리, 사용',
        },
        { content: '깃허브 링크', href: 'https://github.com/Gilpop8663/02_adminPage' },
      ],
    },
    {
      title: '영화 소개 어플',
      startedAt: '2022-01-02',
      endedAt: '2022-01-27',
      where: '개인',

      descriptions: [
        {
          content: '리액트 네이티브로 만든 영화 소개 앱 프로젝트입니다.',
          weight: 'MEDIUM',
        },
        {
          content: 'React-native-swiper 라이브러리를 활용한 배너 슬라이드 구현',
        },
        {
          content: 'React-Query 라이브러리의 useInfiniteQuery를 사용한 무한 스크롤 기능 구현',
        },
        {
          content: 'React-navigation 라이브러리를 이용해 Tab과 Stack 기능을 구현',
        },
        {
          content:
            'React-native의 Share, Platform 기능과 expo-web-browser 라이브러리를 이용해 영화 정보를 공유',
        },
        {
          content: '깃허브 링크',
          href: 'https://github.com/Gilpop8663/RN-novies',
        },
      ],
    },
    {
      title: '넷플릭스 클론 사이트',
      startedAt: '2021-12-12',
      endedAt: '2021-12-23',
      where: '개인',
      descriptions: [
        {
          content:
            '리액트와 타입 스크립트 , 여러 라이브러리를 연습하기 위해 프로젝트를 진행했습니다.',
          weight: 'MEDIUM',
        },
        {
          content: 'Framer Motion을 이용한 애니메이션 구현',
        },
        { content: 'React-Query를 사용하여 API 통신 기능 구현' },
        {
          content: 'React-router-dom을 활용하여 한번 받은 API 값을 디테일 페이지로 전달',
        },
        {
          content: '다른 상황에서 비슷한 디자인을 가진 컴포넌트를 재사용 컴포넌트로 만들어서 사용',
        },
        { content: '깃허브 링크', href: 'https://github.com/Gilpop8663/reactmaster' },
      ],
    },
    {
      title: '트렐로 클론 사이트',
      startedAt: '2021-12-04',
      endedAt: '2021-12-07',
      where: '개인',
      descriptions: [
        {
          content:
            '리액트와 Recoil, React Hook FormBeautiful DnD 라이브러리를 연습하기 위해 진행한 프로젝트입니다.',
          weight: 'MEDIUM',
        },
        {
          content: 'React Hook Form을 이용하여 입력 폼을 빌드하고 구현',
        },
        { content: 'Recoil의 atoms를 이용해 애플리케이션의 상태를 관리' },
        {
          content: 'Beautiful DnD를 활용하여 드래그-앤-드롭을 구현',
        },
        { content: '깃허브 링크', href: 'https://github.com/Gilpop8663/trello-2021' },
      ],
    },
  ],
};

export default project;
