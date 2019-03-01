<template>
  <div class="Login">
    <title>登录</title>
    <div class="main">
      <input v-model="phone" type="text" class="phone" placeholder="请输入手机号">
      <p class="getSms" @click="getSms" v-if="disable"> {{ text }} </p>
      <p class="getSms" @click="getSms" v-else style="pointer-events: none; color: #ccc"> {{ text }} </p>
      <input v-model="smsCode" type="text" class="smsCode" placeholder="请输入验证码">
      <button @click="Login">验证</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        phone: '',
        smsCode: '',
        text: '获取验证码',
        disable: true
      }
    },
    methods: {
      getSms() {
        this.http.post('/sms/smsSend', {
            mobile: this.phone,
          })
          .then(res => {
            if (res.data.code == 200) {
              var that = this;
              // 倒计时30秒内按钮不可重复点击
              for (let count = 29, i = 1; count > 0; count--, i++) {
                that.disable = false;
                that.text = '30秒后重新发送';
                setTimeout(function () {
                  that.disable = false;
                  that.text = count + '秒后重新发送';
                  console.log(count);
                }, i * 1000)
              }
              setTimeout(function () {
                that.disable = true
                that.text = '重新发送'
              }, 31000)

            } else if (res.data.code == 400) {
              alert(res.data.message)
            }
          })
      },
      Login() {
        this.http.post('/memberAccount/accountLogin', {
            mobile: this.phone,
            smsCode: this.smsCode
          })
          .then(res => {
            console.log(res.data.code);
            if (res.data.code == 200) {
              localStorage.setItem('token', res.data.data.loginToken)
              localStorage.setItem('userId', res.data.data.id)
              this.$router.push({
                path: this.$route.query.path
              })
            } else if (res.data.code == 400) {
              alert(res.data.message)
            }
          })
      },
    },
    created() {
      //   this.http.get('posts').then(res=>{
      //     console.log(res.data)
      // }) 
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Login {
    width: 100%;
    height: 100vh;
    background: url(../assets/img/login-bg.png);
    background-size: 100%;
  }

  .main {
    position: absolute;
    top: 55vh;
    left: 6vh;
  }

  input {
    width: 240px;
    height: 30px;
    margin: 3vh 0;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
    line-height: 38px;
    outline: none;
    background: rgba(0,0,0,0);
  }

  .getSms {
    position: absolute;
    top: 4vh;
    right: 10vh;
    font-size: 14px;
    color: #EC7474;
  }

  button {
    position: absolute;
    bottom: -15vh;
    right: 5vh;
    width: 150px;
    height: 50px;
    border-radius: 25px;
    border: none;
    background-color: #fff;
    box-shadow: 0px -1px 2px 0px rgba(254, 178, 0, 0.39),
      /*上边阴影*/
      -1px 0px 2px 0px rgba(254, 178, 0, 0.39),
      /*左边阴影*/
      1px 0px 2px 0px rgba(254, 178, 0, 0.39),
      /*右边阴影*/
      0px 1px 2px 0px rgba(254, 178, 0, 0.39);
    /*下边阴影*/
  }

</style>
