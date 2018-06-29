import AccessibilityCheckList from '../images/AccessibilityCheckList.png';
import divideHourTool from '../images/divideHourTool.png';
import nkgrnkgr from '../images/nkgrnkgr.png';
import transitList from '../images/TransitList.png';
import Webpack4ConfigGenerator from '../images/Webpack4ConfigGenerator.png';
import InHouseUse from '../images/inhouseUse.gif';

const data = [
  {
    title: 'Webpack4 Config Generator',
    date: '2018/06/03',
    comment:
      'Generate a example of webpack config file by selecting some options.',
    linkUrl: 'https://nkgrnkgr.github.io/webpack-config-generator/',
    githubUrl: 'https://github.com/nkgrnkgr/webpack-config-generator',
    image: {
      url: Webpack4ConfigGenerator,
      title: 'Webpack4 Config Generator'
    },
    chips: ['React', 'Material-UI']
  },
  {
    title: 'nkgrnkgr CLI',
    date: '2018/05/17',
    comment: 'BussinessCard CLI',
    linkUrl: 'https://www.npmjs.com/package/nkgrnkgr',
    githubUrl: 'https://github.com/nkgrnkgr/nkgrnkgr',
    image: {
      url: nkgrnkgr,
      title: 'nkgrngkr CLI'
    },
    chips: ['CLI', 'Javascript']
  },
  {
    title: 'TransitList',
    date: '2018/05/17',
    comment: '社内向け近接旅費精算自動化サポートツール',
    linkUrl: 'https://transitlist.herokuapp.com/',
    githubUrl: 'https://github.com/nkgrnkgr/TransitList-from-Google-Calendar',
    image: {
      url: transitList,
      title: 'transitList'
    },
    chips: ['Java', 'AWS Lambda', 'jQuery']
  },
  {
    title: 'InHouseUse',
    date: '2016/12/30',
    comment:
      'レガシーエンジニアのためのフロントエンド社内勉強用のポータルサイト',
    linkUrl: 'https://inhouseuse.github.io/',
    githubUrl: 'https://github.com/inhouseuse/inhouseuse.github.io',
    image: {
      url: InHouseUse,
      title: 'InHouseUse'
    },
    chips: ['Vue 1.x']
  },
  {
    title: 'AccessibilityCheckList',
    date: '2017/04/05',
    comment: 'デザイニングWebアクセシビリティを実践するためのチェックリスト',
    linkUrl: 'https://accessibilitychecklist.github.io/',
    githubUrl:
      'https://github.com/AccessibilityCheckList/AccessibilityCheckList.github.io',
    image: {
      url: AccessibilityCheckList,
      title: 'AccessibilityCheckList'
    },
    chips: ['jQuery']
  },
  {
    title: 'divideHour',
    date: '',
    comment: '勤怠管理入力用の 社内向けサポートツール',
    linkUrl: 'https://devidehour.herokuapp.com/',
    githubUrl: '',
    image: {
      url: divideHourTool,
      title: 'divideHourTool'
    },
    chips: ['Ruby on Rails']
  }
];

export default data;
