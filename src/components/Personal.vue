<template>
  <div class="Personal">
    <!-- 个人信息 -->
    <div class="information">
      <aside>个人信息</aside>
      <div class="text">
        <input type="text" placeholder="请填写姓名" v-model="name">
        <button @click="changeName">改姓名</button>
      </div>
      <div class="text">
        <input type="text" placeholder="请填写手机号" v-model="phone">
        <button @click="changePhone">改手机号</button>
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
    <button class="save" @click="saving">保存</button>
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
        points: ''
      }
    },
    created() {
      this.name = '贾二蛋',
        this.phone = '18310215054',
        this.birthday = '1992/08/27',
        this.points = '889900'
    },
    methods: {
      changeName() {
        alert(this.name)
      },
      changePhone() {
        alert(this.phone)
      },
      saving() {
        alert(this.name + ' _____ ' + this.phone)
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Personal {
    width: 93%;
    height: 96vh;
    background-color: #F2F2F2;
    padding: 2vh;
  }

  .text {
    position: relative;
  }

  button {
    position: absolute;
    top: 2vh;
    right: 4vh;
    width: 12vh;
    height: 5vh;
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
    margin-top: 5vh;
    margin-bottom: 2vh;
  }

  input {
    width: 90%;
    height: 8vh;
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
    height: 8vh;
    top: 80vh;
    left: 3vh;
    border: none;
    background: linear-gradient(to right, #ECC974, #FEE89F);
    color: #fff;
    border-radius: 8px;
    font-size: 16px;
  }

</style>
