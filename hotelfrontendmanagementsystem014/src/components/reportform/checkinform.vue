<template>
	<div>
	    <table class="table">
			<caption><h5 style="color: #F00">某时间段客人入住报表</h5></caption>
			<thead class="thead-dark">
				<tr>
				  <th scope="col"></th>
				  <th scope="col">姓名</th>
				  <th scope="col">身份证</th>
				  <th scope="col">入住时间</th>
				  <th scope="col">退房时间</th>
				  <th scope="col">房间消费</th>
				  <th scope="col">产品消费</th>
				  
				</tr>
			</thead>
			<tbody>
				<tr v-for="info in checkInInfoList" v-bind:key="info.id">
				  <th scope="row">1</th>
				  <td>{{info.name}}</td>
				  <td>{{info.id}}</td>
				  <td>{{info.checkintime}}</td>
				  <td>{{info.checkouttime}}</td>
				  <td>{{info.roomCost}}</td>
				  <td>{{info.productCost}}</td>
				</tr>
			</tbody>
	    </table>
	</div>
</template>

<script>
	export default {
		name: "ReportCheckInForm",
		data(){
				return {
					checkInInfoList: [],
				};
			},
			created(){
				this.getCheckInInfoList();
			},
			methods:{
				getCheckInInfoList(){
					this.axiosJSON.get("report/checkinform").then(result=>{
						console.log(result)
						let resultData = result.data;
						if (resultData.status.status == "OK"){
							this.checkInInfoList=resultData.data.objectList;							
						}						
						});
				},
			},
		}
</script>

<style>
</style>
