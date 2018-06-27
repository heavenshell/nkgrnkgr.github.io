import axios from 'axios';

const BASE_URL =
  'https://uslokrb2q1.execute-api.ap-northeast-1.amazonaws.com/prod/githubrepos';

const FetchGithubData = () => axios.get(BASE_URL);

export default FetchGithubData;
