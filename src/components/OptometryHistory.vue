<template>
  <div class="OptometryHistory">
    <title>历史验光</title>
    <ul v-for="item in tableData">
      <li>
        <p>姓&nbsp;&nbsp;&nbsp;&nbsp;名: {{item.name}}</p>
        <p>验光师: {{item.optometrist}}</p>
        <p>时&nbsp;&nbsp;&nbsp;&nbsp;间: {{item.time}}</p>
        <button @click="view(item.id)" class="btn">查看</button>
      </li>
    </ul>

    <!-- 弹框 -->
    <div class="nolog" v-if="dialog">
      <img src="../assets/img/vipcenter-nolog.png" alt="" class="nologPic">
      <div class="content">
        <strong>您还没验证</strong>
        <p>需识别身份后才可使用，请先验证身份！</p>
        <button class="verify" @click="verify">立即验证</button>
        <button class="cancel" @click="cancel">取消</button>
      </div>
    </div>
    <div class="noInfo" v-if="!info">
      <p>对不起，您目前还没有验光数据</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OptometryHistory',
    data() {
      return {
        tableData: [],
        dialog: false,
        // 是否有数据
        info: true
      }
    },
    methods: {
      view(id) {
        this.$router.push({
          path: '/OptometryDetail',
          query: {
            id: id,
          }
        })
      },
      verify() {
        this.$router.push({
          path: '/Login',
          query: {
            path: 'OptometryHistory'
          }
        })
      },
      cancel() {
        this.dialog = false;
      },
      hasLogin(path) {
        let token = localStorage.getItem('token')
        if (!token) {
          this.dialog = true; // 测试
        }
      },
      // 获取历史验光数据
      getOptomertryHistiry() {
        this.http.get('/api/optometry/list/', {
            offset: 1,
            size: 10000,
            memberAccountId: localStorage.getItem('userId')
          })
          .then(res => {
            if (res.data.code == 200) {
              if (res.data.data.length == 0) {
                this.info = false;
              }
              console.log(res.data.data);
              let data = res.data.data;
              let obj = {};
              var name, optometrist, time, id;
              for (var index = 0; index < data.length; index++) {
                obj.name = data[index].name;
                obj.optometrist = data[index].optometrist;
                obj.time = data[index].gmtCreate;
                obj.id = data[index].id;
                this.tableData.push(obj)
              }


            } else if (res.data.code == 400) {
              alert(res.data.message)
            } else if (res.data.code == 401) {
            alert('您还未登录!');
            this.$router.push({
                path: '/Login',
                query: {
                  path: 'OptometryHistory'
                }
              })
          }
          })
      },
    },
    created() {
      this.hasLogin('/OptometryHistory');
      this.getOptomertryHistiry();
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .OptometryHistory {
    padding-top: 5vh;
    height: 95vh;
    background-color: #FFFDF7;
  }

  ul {
    margin: 0;
    padding: 0 2vh;
  }

  li {
    position: relative;
    width: 100%;
    height: 16.5vh;
    margin-bottom: 5vh;
    background-color: #fff;
  }

  p {
    text-align: left;
    line-height: 5.5vh;
    padding-left: 5vh;
    font-size: 15px;
  }

  .btn {
    position: absolute;
    top: 6.5vh;
    right: 2.8vh;
    width: 10.5vh;
    height: 3.7vh;
    border: none;
    border-radius: 3px;
    background: linear-gradient(to right, #ECC974, #FEE89F);
    color: #fff;
    font-size: 14px;
  }

  .nolog {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 11111111;
  }

  .nologPic {
    width: 90%;
    position: absolute;
    top: 15vh;
    left: 0;
  }

  .content {
    position: absolute;
    top: 45vh;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .content strong {
    font-size: 19px;
    line-height: 38px;
  }

  .content p {
    font-size: 15px;
    line-height: 15px;
  }

  .verify,
  .cancel {
    width: 80%;
    height: 6vh;
    margin-top: 2vh;
    background: linear-gradient(to right, #ECC974, #FEE89F);
    border: none;
    border-radius: 21px;
    color: #fff;
    font-size: 14px;
    outline: none;
  }

  .cancel {
    color: #666;
    background: #fff;
  }

  img {
    margin: 2.5vh;
  }

  .noInfo {
    width: 100%;
    height: 90vh;
    background: url(../assets/img/OptometryDetail-noinfo.png)50% 30% no-repeat;
    background-size: 60%;
  }

  .noInfo p {
    width: 85%;
    position: absolute;
    top: 55vh;
    font-size: 14px;
    color: #999;
    text-align: center;
  }

</style>
