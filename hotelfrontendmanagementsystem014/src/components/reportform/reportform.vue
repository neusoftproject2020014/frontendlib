<template>
	<div class="container">
	  <div class="row">
	     <div class="col-xs-4">
			 <div class="col-xs-12" style="height:50px;"></div>
	        <nav>
				<ul class="nav nav-pills nav-stacked span2" style="font-size: 18px">
	            <li><a href="#">客人入住报表</a></li>
	            <li><a href="#">客人离店报表</a></li>
	            <li><a href="#">财务进账报表</a></li>
	          </ul>
	        </nav>  
	     </div>
	     <div class="col-xs-6">
			<h5 style="color: #F00">某时间段客人入住报表</h5>
			
	        <table class="table">
	          <thead class="thead-dark">
	            <tr>
	              <th scope="col"></th>
	              <th scope="col">姓名</th>
	              <th scope="col">身份证</th>
	              <th scope="col">性别</th>
	              <th scope="col">年龄</th>
	              <th scope="col">手机号</th>
	              <th scope="col">房号</th>
	              <th scope="col">入住时间</th>
	              <th scope="col">退房时间</th>
	            </tr>
	          </thead>
	          <tbody>
	            <tr>
	              <th scope="row">1</th>
	              <td>宋</td>
	              <td>111</td>
	              <td>男</td>
	              <td>21</td>
	              <td>222</td>
	              <td>302</td>
	              <td>2020/7/28</td>
	              <td>-- --</td>
	            </tr>
	          </tbody>
	        </table>
	        <table class="table">
	          <caption><h5 style="color: #F00">某时间段客人离店报表</h5></caption>
	          <thead class="thead-dark">
	            <tr>
	              <th scope="col"></th>
	              <th scope="col">姓名</th>
	              <th scope="col">身份证</th>
	              <th scope="col">性别</th>
	              <th scope="col">年龄</th>
	              <th scope="col">手机号</th>
	              <th scope="col">房号</th>
	              <th scope="col">入住时间</th>
	              <th scope="col">退房时间</th>
	            </tr>
	          </thead>
	          <tbody>
	            <tr>
	              <th scope="row">1</th>
	              <td>宋</td>
	              <td>111</td>
	              <td>男</td>
	              <td>21</td>
	              <td>222</td>
	              <td>302</td>
	              <td>2020/7/28</td>
	              <td>-- --</td>
	            </tr>
	          </tbody>
	        </table>
	        <table class="table">
	          <caption><h5 style="color: #F00">某时间段财务进账报表</h5></caption>
	          <thead class="thead-dark">
	            <tr>
	              <th scope="col"></th>
	              <th scope="col">商品消费总计</th>
	              <th scope="col">住房消费总计</th>
	              <th scope="col">押金总计</th>
	            </tr>
	          </thead>
	          <tbody>
	            <tr>
	              <th scope="row">1</th>
	              <td>宋</td>
	              <td>111</td>
	              <td>男</td>
	            </tr>
	          </tbody>
	        </table>
	      </div>
	    </div>
	</div>
</template>

<script>
	export default {
		name: "ReportForm",
		data(){
			return {};
		}
	}
</script>

<style>
</style>
