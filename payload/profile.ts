import { faBlog, faEnvelope, faPen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image:
    'https://user-images.githubusercontent.com/80146176/156173544-13ac4110-11d6-409c-9c79-b9b8cd2549ce.png',
  name: {
    title: '김영길',
    small: '꾸준히 성장하는 개발자입니다',
  },
  contact: [
    {
      title: 'wolfye@naver.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-5711-1519',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com',
      link: 'https://github.com/Gilpop8663',
      icon: faGithub,
    },
    {
      title: 'https://tistroy.blog.com',
      link: 'https://hell-of-company-builder.tistory.com/',
      icon: faPen,
    },
  ],
  notice: {
    title: '',
    icon: faBell,
  },
};

export default profile;
