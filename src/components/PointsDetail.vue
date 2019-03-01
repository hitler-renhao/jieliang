<template>
  <div class="PointsDetail">
    <title>积分明细</title>
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
      this.getPoint();
      this.getPointDetail()
    },
    methods: {
      getPoint() {
        this.http.get('/api/member/point/' + 1)
          .then(res => {
            if (res.data.code == 200) {
              this.points = res.data.data.point
            } else if (res.data.code == 400) {
              alert(res.data.message)
            } else if (res.data.code == 401) {
            alert('您还未登录!');
            this.$router.push({
                path: '/Login',
                query: {
                  path: 'PointsDetail'
                }
              })
          }
          })
      },
      getPointDetail() {
        this.http.get('/api/member/point/', {
            offset: 1,
            size: 10000,
            memberAccountId: localStorage.getItem('userId')
          })
          .then(res => {
            if (res.data.code == 200) {
              console.log(res.data.data);
              var data = res.data.data
              var obj = {};
              var from, time, count;
              for (var index = 0; index < data.length; index++) {
                obj.from = data[index].updateReason
                obj.count = data[index].updatedMemberPoint
                obj.time = this.changeTimes(data[index].gmtCreate)
                this.data.push(obj)
              }
            } else if (res.data.code == 400) {
              alert(res.data.message)
            } else if (res.data.code == 401) {
            alert('您还未登录!');
            this.$router.push({
                path: '/Login',
                query: {
                  path: 'PointsDetail'
                }
              })
          }
          })
      },
      // 时间转换函数
      changeTimes (times) {
        let time = times.split(' ')[0];
        // alert(times)
        return time.split('-')[0] + '年' + time.split('-')[1] + '月' + time.split('-')[2] + '日'
      }
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
