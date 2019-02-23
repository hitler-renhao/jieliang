<template>
  <div class="VipCenter">
    <div class="top"></div>
    <ul class="banner">
      <li @click="myOptometrist">
        <img src="../assets/img/vipcenter-optometrist.png" alt="">
        <p>我的验光</p>
      </li>
      <li @click="myPoints">
        <img src="../assets/img/vipcenter-points.png" alt="">
        <p>我的积分</p>
      </li>
      <li @click="myInformation">
        <img src="../assets/img/vipcenter-information.png" alt="">
        <p>我的资料</p>
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
  </div>
</template>

<script>
  export default {
    name: 'VipCenter',
    data() {
      return {
        dialog: false,    // 弹出框
      }
    },
    methods: {
      myOptometrist() {
        alert('我的验光');
        this.$router.push({ path: '/OptometryHistory'})
      },
      myPoints() {
        alert('我的积分')
      },
      myInformation() {
        alert('我的资料')
      },
      verify () {
        alert('立即验证')
      },
      cancel () {
        this.dialog = false;
      }
    },
    created() {
      this.dialog = false;   // 测试
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .VipCenter {
    height: 100vh;
    background-color: #FFFDF7;
  }

  .top {
    height: 35vh;
    background: url(../assets/img/vipcenter-banner.png) no-repeat;
    background-size: 97%;
  }

  .banner {
    width: 93%;
    height: 30vh;
    padding: 0 2vh;
    margin-top: 5vh;
    display: flex;
    justify-content: space-between;
  }

  li {
    float: left;
    list-style: none;
    width: 30%;
    height: 12.6vh;
    background: url(../assets/img/vipcenter-bg.png);
    text-align: center;
  }

  img {
    width: 22px;
    margin: 2.5vh;
  }

  p {
    margin: 0;
    line-height: 14px;
    font-size: 14px;
    color: #333;
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
    background: linear-gradient(to right, #ECC974 , #FEE89F);
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

</style>
