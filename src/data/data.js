import AccessibilityCheckList from '../images/AccessibilityCheckList.png';
import nkgrnkgr from '../images/nkgrnkgr.png';
import Webpack4ConfigGenerator from '../images/Webpack4ConfigGenerator.png';
import sql2csv from '../images/sql2csv.png';
import InHouseUse from '../images/inhouseUse.gif';

const data = [
  {
    title: 'PutYourHandsUp',
    date: '2019/03/08',
    comment: 'The Whiteboad for  feedback to the speakers.',
    linkUrl: 'https://pyhu.nkgr.app',
    githubUrl: 'https://github.com/nkgrnkgr/put-your-hands-up',
    image: {
      url:
        'https://raw.githubusercontent.com/nkgrnkgr/put-your-hands-up/master/src/images/cap.png',
      title: 'PutYourHandsUp',
    },
    chips: ['React', 'Redux', 'TypeScript', 'Firebase'],
  },
  {
    title: 'expenses-automation',
    date: '2018/09/17',
    comment: 'Transportation expenses adjustment automation tool',
    linkUrl:
      'https://expenses-automation-app.firebaseapp.com/allowcalendaraccess',
    githubUrl: 'https://github.com/nkgrnkgr/expenses-automation',
    image: {
      url:
        'https://camo.githubusercontent.com/0a79468081911e994e658c20aa015d233156b9b4/68747470733a2f2f692e696d6775722e636f6d2f6878665831396e2e706e67',
      title: 'sql2csv',
    },
    chips: ['React', 'TypeScript', 'Kotlin', 'SpringBoot'],
  },
  {
    title: 'sql2csv',
    date: '2018/07/17',
    comment: 'MySQL Output Result to CSV or Clipboard',
    linkUrl:
      'https://9anx69nto8.execute-api.ap-northeast-1.amazonaws.com/prod/',
    githubUrl: 'https://github.com/nkgrnkgr/sql2csv/',
    image: {
      url: sql2csv,
      title: 'sql2csv',
    },
    chips: ['Node.js', 'Serverless-Express', 'lambda'],
  },
  {
    title: 'Webpack4 Config Generator',
    date: '2018/06/03',
    comment:
      'Generate a example of webpack config file by selecting some options.',
    linkUrl: 'https://nkgrnkgr.github.io/webpack-config-generator/',
    githubUrl: 'https://github.com/nkgrnkgr/webpack-config-generator',
    image: {
      url: Webpack4ConfigGenerator,
      title: 'Webpack4 Config Generator',
    },
    chips: ['React', 'Material-UI'],
  },
  {
    title: 'nkgrnkgr CLI',
    date: '2018/05/17',
    comment: 'BussinessCard CLI',
    linkUrl: 'https://www.npmjs.com/package/nkgrnkgr',
    githubUrl: 'https://github.com/nkgrnkgr/nkgrnkgr',
    image: {
      url: nkgrnkgr,
      title: 'nkgrngkr CLI',
    },
    chips: ['CLI', 'Javascript'],
  },
  // {
  //   title: 'TransitList',
  //   date: '2018/05/17',
  //   comment: '社内向け近接旅費精算自動化サポートツール',
  //   linkUrl: 'https://transitlist.herokuapp.com/',
  //   githubUrl: 'https://github.com/nkgrnkgr/TransitList-from-Google-Calendar',
  //   image: {
  //     url: transitList,
  //     title: 'transitList'
  //   },
  //   chips: ['Java', 'AWS Lambda', 'jQuery']
  // },
  {
    title: 'InHouseUse',
    date: '2016/12/30',
    comment:
      'レガシーエンジニアのためのフロントエンド社内勉強用のポータルサイト',
    linkUrl: 'https://inhouseuse.github.io/',
    githubUrl: 'https://github.com/inhouseuse/inhouseuse.github.io',
    image: {
      url: InHouseUse,
      title: 'InHouseUse',
    },
    chips: ['Vue 1.x'],
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
      title: 'AccessibilityCheckList',
    },
    chips: ['jQuery'],
  },
  // {
  //   title: 'divideHour',
  //   date: '',
  //   comment: '勤怠管理入力用の 社内向けサポートツール',
  //   linkUrl: 'https://devidehour.herokuapp.com/',
  //   githubUrl: '',
  //   image: {
  //     url: divideHourTool,
  //     title: 'divideHourTool'
  //   },
  //   chips: ['Ruby on Rails']
  // }
];

export default data;
