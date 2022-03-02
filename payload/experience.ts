import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: 'Wanted x WeCode x ImpactCampus Pre OnBoarding Course FrontEnd 02기',
      position: '',
      startedAt: '2022-01',
      endedAt: '2022-03',
      descriptions: [
        '프리온 보딩에서는 과제마다 각 기업이 요구하는 기술을 바탕으로 과제를 진행하는 방식입니다.',
        '참가기업의 실전 과제와 팀 단위 동료 학습을 통한 개발 역량 향상과 취업을 목표로 한 코스(총 80명 / 팀원 5명)',
        '6주간 10개의 기업 과제 프로젝트가 주어지며 프로젝트마다 2일의 시간 동안 팀원들과 협업하여 수행',
        '줌, 게더, 슬랙을 이용한 온라인 협업 프로그램을 이용하여 온라인으로 진행',
        'Jest를 활용한 test와 api를 이용한 실시간 환율 계산기 개발',
        '피그마 파일을 기반으로 json-server을 활용한 고객들에게 들어온 요청을 검색하거나 채팅을 할 수 있는 대시보드 페이지 개발',
        '검색 알고리즘을 팀원과 회의하여 만든 영양제를 검색할 수 있는 페이지',
        'React-router-dom의 useMatch, useLocation을 이용해서 파일의 목록과 파일의 상세 데이터를 표시하는 페이지 개발',
      ],
      skillKeywords: [
        'React.js',
        'TypeScript',
        'Javascript',
        'Jest',
        'Redux',
        'Next.js',
        'Json-server',
        'React-router-dom',
        'Framer-motion',
        'Heroku Cli',
        'AWS',
      ],
    },
  ],
};

export default experience;
