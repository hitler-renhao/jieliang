<template>
  <div class="404">
    404
  </div>
</template>

<script>
  export default {
    name: '404',
    data() {
      return {
        phone: '',
        smsCode: ''
      }
    },
    methods: {
      getSms () {
        alert(this.phone)
      },
      Login () {
        alert('登录_____' + this.smsCode)
      }
    },
    created() {
      this.http.get('posts').then(res=>{
        console.log(res.data)
    }) 
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
    height: 20px;
    margin: 3vh 0;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
    line-height: 38px;
    outline: none;
  }

  .getSms {
    position: absolute;
    top: 3vh;
    right: 15vh;
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
    box-shadow: 0px -1px 2px 0px rgba(254, 178, 0, 0.39),   /*上边阴影*/
                -1px 0px 2px 0px rgba(254, 178, 0, 0.39),   /*左边阴影*/
                1px 0px 2px 0px rgba(254, 178, 0, 0.39),    /*右边阴影*/
                0px 1px 2px 0px rgba(254, 178, 0, 0.39);    /*下边阴影*/
  }

</style>
