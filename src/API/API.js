import Axios from 'axios';

const AxiosInstance = Axios.create({
  baseURL: 'http://localhost:3000',
})

// http://workapi.resinasoft.com/WorkData

// npx json-server --watch src/API/getUserGestCardList.json --port 3004

// const getUsercardList = async () => {
//   const response = await fetch('http://127.0.0.1:3004/gestcardList');
//   console.log(response);
// }

const getUsercardList = async () => {
  const response = await Axios.get('http://workapi.resinasoft.com/WorkData');
  return response.data;
}

export default {
  getUsercardList,
}