import axios from 'axios';

const Util={
    imgPort:'http://127.0.0.1:8011/img/',
    apiPath:'http://127.0.0.1:8010/'
}

Util.axios=axios.create({
    baseURL:Util.apiPath
})

Util.axios.interceptors.response.use(res=>{
    return res.data;
  })
export default Util;