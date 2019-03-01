import axios from 'axios'
import {
  Message
} from 'element-ui'; //element库的消息提示，移动端不能自适应

if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'http://test.bjysjglasses.com:8484';
} else if (process.env.NODE_ENV == 'testing') {
  axios.defaults.baseURL = 'http://test.bjysjglasses.com:8484';
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'http://wx.bjysjglasses.com:8181';
}

  // 设置全局token请求头
  axios.defaults.headers.token = localStorage.getItem('token');
  axios.defaults.headers.userId = localStorage.getItem('userId');

  //创建axios实例
  var service = axios.create({
    timeout: 5000,
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
    }
  })

export default {
  //get请求
  get(url, param) {
    // 设置全局token请求头
    console.log(111111);
      // 设置全局token请求头
  axios.defaults.headers.token = localStorage.getItem('token');
  axios.defaults.headers.userId = localStorage.getItem('userId');

  //创建axios实例
  var service = axios.create({
    timeout: 5000,
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
    }
  })
    return new Promise((cback, reject) => {
      service({
        method: 'get',
        url,
        params: param,
      }).then(res => {
        //返回promise对象 
        var res_code = res.status.toString();
        if (res_code.charAt(0) == 2) {
          cback(res); //cback在promise执行器内部
        } else {
          console.log(res, '异常1')
        }
      }).catch(err => {
        if (!err.response) {
          console.log('请求错误')
          alert('请求错误') // 微信alert不需要美化
          //Message是element库的组件，移动端暂不需要
          // Message({
          //   showClose: true,
          //   message: '请求错误',
          //   type: 'error'
          // });
        } else {
          reject(err.response);
          console.log(err.response, '异常2')
        }
      })

    })
  },
  // post请求
  post(url, param) {
    // 设置全局token请求头
     // 设置全局token请求头
  axios.defaults.headers.token = localStorage.getItem('token');
  axios.defaults.headers.userId = localStorage.getItem('userId');

  //创建axios实例
  var service = axios.create({
    timeout: 5000,
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
    }
  })
    return new Promise((cback, reject) => {
      service({
        method: 'post',
        url,
        params: param,
      }).then(res => {
        axios.defaults.headers.token = localStorage.getItem('token');
        //返回promise对象 
        var res_code = res.status.toString();
        if (res_code.charAt(0) == 2) {
          cback(res); //cback在promise执行器内部
        } else {
          console.log(res, '异常1')
        }
      }).catch(err => {
        if (!err.response) {
          console.log('请求错误')
          alert('请求错误') // 微信alert不需要美化
          //Message是element库的组件，移动端暂不需要
          // Message({
          //   showClose: true,
          //   message: '请求错误',
          //   type: 'error'
          // });
        } else {
          reject(err.response);
          console.log(err.response, '异常2')
        }
      })

    })
  }
}
