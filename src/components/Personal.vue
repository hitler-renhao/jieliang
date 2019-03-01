<template>
  <div class="Personal">
    <title>个人资料</title>
    <!-- 个人信息 -->
    <div class="information">
      <aside>个人信息</aside>
      <div class="text">
        <input type="text" placeholder="请填写姓名" v-model="name" v-if="userName" readonly>
        <!-- <input type="text" placeholder="请填写姓名" v-model="name" v-else autofocus="autofocus"> -->
        <!-- <button @click="changeName">改姓名</button> -->
        <button class="birthday">姓名</button>
      </div>
      <div class="text">
        <input type="text" placeholder="请填写手机号" v-model="phone" v-if="userPhone" readonly>
        <!-- <input type="text" placeholder="请填写手机号" v-model="phone" v-else autofocus="autofocus"> -->
        <!-- <button @click="changePhone">改手机号</button> -->
        <button class="birthday">手机</button>
      </div>
    </div>
    <!-- 会员积分 -->
    <div class="information">
      <aside>会员积分</aside>
      <div class="text">
        <input type="text" v-model="birthday" class="readonly" readonly>
        <button class="birthday">生日</button>
      </div>
      <div class="text">
        <input type="text" v-model="points" class="readonly" readonly>
        <button class="birthday">积分</button>
      </div>
    </div>
    <div class="information">
      <!-- <button class="save" @click="saving">保存</button> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Personal',
    data() {
      return {
        name: '',
        phone: '',
        birthday: '',
        points: '',
        userName: true,
        userPhone: true,
        // userId: '1'
      }
    },
    created() {
      this.http.get('/memberAccount/accountDetails', {
          userId: localStorage.getItem('userId')
        })
        .then(res => {
          console.log(res.data.code);
          if (res.data.code == 200) {
            console.log(res.data.data);
            let data = res.data.data
            this.name = data.nickname
            this.phone = data.cellPhoneNumber
            this.birthday = data.birthday
            this.points = data.point || 0
          } else if (res.data.code == 400) {
            alert(res.data.message)
          } else if (res.data.code == 401) {
            alert('您还未登录!');
            this.$router.push({
              path: '/Login',
              query: {
                path: 'Personal'
              }
            })
          }
        })

    },
    methods: {
      changeName() {
        this.userName = false
        // alert(this.name)
      },
      changePhone() {
        this.userPhone = false
        // alert(this.phone)
      },
      saving() {
        this.http.post('/memberAccount/updateAccount', {
            userId: localStorage.getItem('userId'),
            nickname: this.name,
            cellPhoneNumber: this.phone
          })
          .then(res => {
            console.log(res.data.code);
            if (res.data.code == 200) {
              console.log(res.data.data);
            } else if (res.data.code == 400) {
              alert(res.data.message)
            }
          })
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Personal {
    width: 94%;
    /* height: 96vh; */
    height: 100%;
    background-color: #F2F2F2;
    padding: 14px 11px;
  }

  .text {
    position: relative;
    height: 30%;
  }

  .information {
    height: 193px;
  }

  button {
    position: absolute;
    top: 14px;
    right: 30px;
    width: 100px;
    height: 30px;
    border-radius: 3px;
    border: 1px solid #EC7474;
    background-color: #fff;
    font-size: 14px;
    color: #EC7474;
    z-index: 111;
    outline: none;
  }

  .birthday {
    border: none;
    color: #999;
    text-align: right;
  }

  aside {
    font-size: 14px;
    color: #999;
    text-align: left;
    border-left: 4px solid #ECC974;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  input {
    width: 90%;
    height: 80%;
    border: none;
    border-radius: 8px;
    margin: 3px;
    outline: none;
    padding-left: 3vh;
  }

  input::placeholder {
    color: #999;
  }

  .save {
    width: 90%;
    height: 50px;
    top: 80vh;
    left: 3vh;
    border: none;
    background: linear-gradient(to right, #ECC974, #FEE89F);
    color: #fff;
    border-radius: 8px;
    font-size: 16px;
  }

</style>
