<template>
	<div class="container">
	   <a href="/customer/checkout" class="btn btn-danger pull-right" role="button" aria-pressed="true">退房</a>
	    <table class="table">
	      <thead class="thead-dark">
	        <tr>
	          <th scope="col"></th>
	          <th scope="col">姓名</th>
	          <th scope="col">身份证号</th>
	          <th scope="col">性别</th>
	          <th scope="col">年龄</th>
	          <th scope="col">手机号</th>
	          <th scope="col">房号</th>
	          <th scope="col">入住时间</th>
	          <th scope="col">退房时间</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr v-for="cstm in customerList" v-bind:key="cstm.id">
	          <th scope="row">1</th>
	          <td>cstm.name</td>
	          <td>cstm.id</td>
	          <td>cstm.gender</td>
	          <td>cstm.age</td>
	          <td>cstm.phone</td>
	          <td>cstm.rid</td>
	          <td>cstm.checkintime</td>
	          <td>cstm.checkouttime</td>
	          <td><a href="}" class="btn btn-default">修改</a> 
	                      <a href="" class="btn btn-default">查看</a></td>
	        </tr>
	      </tbody>
	    </table>
	    <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">办理入住</a>    
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "Customer",
		data(){
			return {
				customerList: [],
				rows: 4,
				page: 1
				
			};
		},
		created(){
			this.getCustomerList();
		},
		methods:{
			getCustomerList(){
				axios.get("http://localhost:8201/customer/list",{
						params:{
							rows:this.rows,
							page:this.page,
						}					
					}).then(result=>{
						console.log(result)
						let resultData = result.data;
						if(resultData.status.status=="OK"){
							this.customerList=resultData.objectList;
							this.count=resultData.config.count;
							this.pageCount=resultData.config.pageCount;
						}
					});
				},
			}
		}
</script>

<style>
</style>
