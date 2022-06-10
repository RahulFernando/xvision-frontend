import Axios from 'axios';

const httpHelper = Axios.create({
  baseURL: `${process.env.REACT_APP_API}/api`,
});

export default httpHelper;
