<template>
  <div class="PointsDetail">
    <div class="banner">
      <p>您当前拥有积分:</p>
      <h2> {{ points }} </h2>
    </div>
    <div class="detail">
      <aside>积分明细</aside>
      <ul v-for="item in data">
        <li>
          <p class="from"> {{ item.from }} </p>
          <p class="time"> {{ item.time }} </p>
          <p class="count"> {{ item.count }} </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PointsDetail',
    data() {
      return {
        points: '',

        data: [],
      }
    },
    created() {
      this.points = '89898898'
      this.data = [{
          from: '进店消费',
          time: '2018年12月11日',
          count: '+100000'
        },{
          from: '进店消费',
          time: '2018年12月11日',
          count: '+100001'
        },{
          from: '进店消费',
          time: '2018年12月11日',
          count: '+100002'
        }]
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .PointsDetail {
    height: 100vh;
  }

  .banner {
    height: 20vh;
    background: linear-gradient(to right, #ECC974, #FEE89F);
    text-align: left;
    padding: 0 3vh;
  }

  .banner p {
    font-size: 14px;
    color: #fff;
    line-height: 8vh;
  }

  .banner h2 {
    font-size: 49px;
    color: #fff;
    margin: 0;
    font-weight: 100;
    display: inline-block;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .detail {
    text-align: left;
    margin-top: 2vh;
    padding: 0 2vh;
  }
  aside {
    color: #ECC974;
    font-size: 14px;
    line-height: 44px;
    border-bottom: 1px solid #f2f2f2;
  }
  li {
    position: relative;
    border-bottom: 1px solid #f2f2f2;
    padding: 2vh 1vh;
  }
  .from {
    font-size: 14px;
    color: #333;
    line-height: 28px;
  }
  .time {
    font-size: 12px;
    color: #999;
    line-height: 24px;
  }
  .count {
    position: absolute;
    top: 5vh;
    right: 5vh;
    font-size: 17px;
    color: #ec7474;
  }

</style>
