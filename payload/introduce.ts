import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    '인테리어를 공부하다가 개발에서 미래가치를 발견하여 개발자로 직업을 바꾸기로 마음먹은 예비 개발자입니다. 창업에 관심이 많으며, 혼자서 원하는 서비스를 직접 구상하여 배포하였을 때 사용자들의 반응을 지켜볼 수 있는 프론트 앤드 개발자를 택했습니다.',
    '웹/앱 개발하는 것에 관심이 많고, 직접 프로젝트를 하며 배우는 것을 좋아합니다. 이외에도 개발에 도움이 되는 경험들을 통해 다양한 개발 경험을 즐기고 있습니다. 평소 새로운 지식을 얻을 때 나중에 제가 다시 보려고 21년도 03월에 시작한 블로그에는 현재 275개의 글이 작성되어 있습니다. 또한 하루에 꼭 한 번은 공부하자는 마음으로 1일 1 Commit을 하고 있습니다. 현재 Javascript 언어로 프런트, 백앤드를 모두 개발하는 풀 스택 개발자가 되고 싶다고 생각하고 있으며, 이러한 기술을 바탕으로 제가 원하는 서비스를 자체 제작하고 싶은 꿈을 가지고 있습니다.',
  ],
  sign: '',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
