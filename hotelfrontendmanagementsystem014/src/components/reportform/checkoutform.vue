<template>
	<div>
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
	</div>
</template>

<script>
	export default {
		name: "ReportCheckOutForm",
		data(){
			return {
			};
		},
		methods:{
		}
		
	}
</script>

<style>
</style>
