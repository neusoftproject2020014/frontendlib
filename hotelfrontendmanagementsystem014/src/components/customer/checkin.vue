<template>
	<form method="post" v-on:submit.prevent="checkin()">
	    <div class="form-group row">
	      <label for="inputEmail3" class="col-sm-2 col-form-label">姓名</label>
	      <div class="col-sm-4">
	        <input type="text" class="form-control" 
				id="input" placeholder="姓名" v-model="customer.name">
	      </div>
	    </div>
		<div class="form-group row">
		  <label for="inputEmail3" class="col-sm-2 col-form-label">身份证号</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="身份证号" v-model="customer.id">
		  </div>
		</div>
		<div class="form-group row">
		  <label for="inputEmail3" class="col-sm-2 col-form-label">性别</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="性别" v-model="customer.gender">
		  </div>
		</div>
		<div class="form-group row">
		  <label for="inputEmail3" class="col-sm-2 col-form-label">年龄</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="年龄" v-model="customer.age">
		  </div>
		</div>
		<div class="form-group row">
		  <label for="inputEmail3" class="col-sm-2 col-form-label">联系电话</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="联系电话" v-model="customer.phone">
		  </div>
		</div>
	  <div class="form-group row">
	    <div class="col-sm-2">
	      <button type="submit" class="btn btn-primary">提交入住</button>
	    </div>
		<div class="col-sm-2">
		  <router-link to="/customer" class="btn btn-primary">返回</router-link>
		</div>
	  </div>
	</form>
</template>

<script>
	export default {
		name: "CustomerCheckIn",
		data(){
			return {
				customer:{
					name:"",
					id:"",
					gender:"",
					age:"",
					phone:"",
					rid:"",
				},
			}
		},
		methods:{
			checkin(){
				console.log(this.customer)
				this.axiosJSON.post("/customer/checkin",this.customer).then(result=>{
					let resultData = result.data;
					console.log(resultData)
					if(resultData.status.status=="OK"){
						alert(resultData.status.message);
						this.$router.push("/customer"); //编程方式跳转到部门列表组件
					}
					else{
						alert(resultData.status.message);
					}
				});
			}
		}
		
	}
</script>

<style>
</style>
