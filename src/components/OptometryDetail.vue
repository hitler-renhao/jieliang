<template>
  <div class="OptometryDetail">
    <div class="hasInfo" v-if="info">
      <div class="demand">
        <i></i>
        <span>配镜需求</span>
        <button class="demands">远用</button>
      </div>
      <div class="visualDetails">
        <i></i>
        <span>视力详情</span>
        <!-- 表格1 -->
        <table border="0" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <td></td>
              <td>右眼(R)</td>
              <td>左眼(L)</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>球镜</td>
              <td> {{ data1[0].amount1 }} </td>
              <td> {{ data1[0].amount2 }} </td>
            </tr>
            <tr>
              <td>柱镜</td>
              <td> {{ data1[0].amount3 }} </td>
              <td> {{ data1[0].amount4 }} </td>
            </tr>
            <tr>
              <td>轴位</td>
              <td> {{ data1[0].amount5 }} </td>
              <td> {{ data1[0].amount6 }} </td>
            </tr>
            <tr>
              <td>棱镜</td>
              <td> {{ data1[0].amount7 }} </td>
              <td> {{ data1[0].amount8 }} </td>
            </tr>
            <tr>
              <td>棱镜底</td>
              <td> {{ data1[0].amount9 }} </td>
              <td> {{ data1[0].amount10 }} </td>
            </tr>
            <tr>
              <td>矫正视力</td>
              <td> {{ data1[0].amount11 }} </td>
              <td> {{ data1[0].amount12 }} </td>
            </tr>
          </tbody>
        </table>

        <!-- 表格2 -->
        <table border="0" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <td>瞳高</td>
              <td>ADD</td>
              <td>焦距</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ data2[0].amount1 }}</td>
              <td>{{ data2[0].amount2 }}</td>
              <td>{{ data2[0].amount3 }}</td>
            </tr>
          </tbody>
        </table>

        <!-- 表格3 -->
        <table border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td rowspan="4">渐进片</td>
              <td>RPD</td>
              <td>{{ data3[0].amount1}}</td>
            </tr>
            <tr>
              <td>LPD</td>
              <td>{{ data3[0].amount2 }}</td>
            </tr>
            <tr>
              <td>RPH</td>
              <td>{{ data3[0].amount3 }}</td>
            </tr>
            <tr>
              <td>LPH</td>
              <td>{{ data3[0].amount4 }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 建议 -->
      <div class="suggest">
        <i></i>
        <span>诊断建议</span>
        <p readonly> {{ suggest }} </p>
      </div>

      <!-- 验光师 -->
      <div class="optometrist">
        <i></i>
        <span>验光师: {{ optometrist }}</span>
      </div>
    </div>

    <div class="noInfo" v-if="!info">
      <p>对不起，您目前还没有验光数据</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'OptometryDetail',
    data() {
      return {
        data1: [{
          amount1: '1',
          amount2: '2',
          amount3: '3',
          amount4: '4',
          amount5: '5',
          amount6: '6',
          amount7: '7',
          amount8: '8',
          amount9: '9',
          amount10: '10',
          amount11: '11',
          amount12: '12',
        }],
        data2: [{
          amount1: '1',
          amount2: '2',
          amount3: '3',
        }],
        data3: [{
          amount1: '1',
          amount2: '2',
          amount3: '3',
          amount4: '4',
        }],
        // 建议
        suggest: '1、少看电子产品，加强用眼知识；2、定期对眼睛进行各项指标检查；3、眼疲劳时，尽量少使用眼药水；4、去眼科请去正规医院进行治疗，避免病情加重。',
        // 验光师
        optometrist: '贾二蛋',

        // 是否有数据
        info: true
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  i {
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background: #ECC974;
    display: block;
    float: left;
    margin: 12px;
  }

  span {
    font-size: 16px;
    color: #333;
    line-height: 5vh;
  }

  .demands {
    display: block;
    margin: 2vh 1vh;
    width: 13.5vh;
    height: 4vh;
    border-radius: 2vh;
    background: linear-gradient(to right, #ECC974, #FEE89F);
    font-size: 14px;
    color: #fff;
    outline: none;
  }

  .visualDetails {
    margin-top: 3vh;
  }

  table {
    width: 87%;
    border-right: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    margin: 2vh 3.5vh;
  }

  td {
    width: 29%;
    height: 6.5vh;
    border-left: 1px solid #dedede;
    border-top: 1px solid #dedede;
    color: #666;
    text-align: center;
  }

  .suggest p {
    width: 87%;
    height: 18.74vh;
    background: #F8F8F8;
    margin: 0 auto;
    border: 1px solid #dedede;
    font-size: 14px;
  }

  .optometrist {
    margin-top: 3vh;
  }

  .optometrist span {
    font-size: 16px;
    color: #333;
  }

  .noInfo {
    width: 100%;
    height: 100vh;
    background: url(../assets/img/OptometryDetail-noinfo.png)50% 30% no-repeat;
    background-size: 60%;
  }
  .noInfo p {
    width: 100%;
    position: absolute;
    top: 55vh;
    font-size: 14px;
    color: #999;
    text-align: center;
  }

</style>
