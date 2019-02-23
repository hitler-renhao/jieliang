<template>
  <div class="OptometryHistory">
    <!-- <title>111</title> -->
    <ul v-for="item in tableData">
      <li>
        <p>姓&nbsp;&nbsp;&nbsp;&nbsp;名: {{item.name}}</p>
        <p>验光师: {{item.optometry}}</p>
        <p>时&nbsp;&nbsp;&nbsp;&nbsp;间: {{item.time}}</p>
        <button @click="view(item.id)">查看</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'OptometryHistory',
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      view (id) {
        alert(id)
      }
    },
    created () {
      this.tableData = [{
          name: '贾二蛋',
          optometry: '王小虎',
          time: '2019-01-01 23:59:59',
          id: '1'
        }, {
          name: '贾二蛋',
          optometry: '王小虎',
          time: '2019-01-01 23:59:59',
          id: '2'
        }, {
          name: '贾二蛋',
          optometry: '王小虎',
          time: '2019-01-01 23:59:59',
          id: '3'
        }, {
          name: '贾二蛋',
          optometry: '王小虎',
          time: '2019-01-01 23:59:59',
          id: '4'
        }]
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .OptometryHistory {
    padding-top: 5vh;
    height: 100vh;
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
  button {
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
</style>
