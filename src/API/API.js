import Axios from 'axios';

const AxiosInstance = Axios.create({
  baseURL: 'http://localhost:3000',
})

// npx json-server --watch src/API/getUserGestCardList.json --port 3004

const getUsercardList = async () => {
  const response = await fetch('http://127.0.0.1:3004/gestcardList');
  console.log(response);
}


export default {
  getUsercardList,
}