import { IEtc } from '../component/etc/IEtc';

const etc: IEtc.Payload = {
  disable: false,

  list: [
    {
      title: '알고리즘 스터디 Altudy',
      subTitle: '알고리즘 문제 풀이 및 정보 공유 스터디 모임입니다. ',
      startedAt: '2020-03',
    },
    {
      title: '프론트 앤드 CS 지식 스터디 Fetudy',
      subTitle: '프론트 앤드 개발자에게 필요한 CS 지식을 함께 공부하는 스터디 모임입니다.',
      startedAt: '2022-02',
    },
    {
      title: '인테리어 회사 재직',
      subTitle: '인테리어 현장 관리자로 다양한 연령대의 사람들과 약속잡고 소통하였었습니다.',
      startedAt: '2020-01',
      endedAt: '2021-03',
    },
    {
      title: '실내디자인학과 졸업전시회 위원장',
      subTitle: '전시회 준비 및 학생들 도록 준비 진행을 맡았었습니다.',
      startedAt: '2019-03',
      endedAt: '2019-12',
    },
    // {
    //   title: '사회복무요원 전역',
    //   subTitle: '법원 ~ 도시철도공사에서 각각 1년씩 근무하였습니다.',
    //   startedAt: '2016-05',
    //   endedAt: '2018-06',
    // },
  ],
};

export default etc;
