import { ISkill } from '../component/skill/ISkill';

// const backend: ISkill.Skill = {
//   category: 'Back-end',
//   items: [
//     {
//       title: 'Node.js',
//     },
//     {
//       title: 'AWS',
//     },

//     {
//       title: 'Python',
//     },
//   ],
// };

// const database: ISkill.Skill = {
//   category: 'Database',
//   items: [
//     {
//       title: 'MongoDB',
//     },
//   ],
// };

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React.js',
    },
    {
      title: 'Typescript',
    },
    {
      title: 'React Native',
    },
    {
      title: 'Next.js',
    },
    {
      title: 'Javascript',
    },
    { title: 'HTML/CSS' },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Git/Github',
    },
    {
      title: 'Slack',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
