<template>
	<form method="post" v-on:submit.prevent="modify()">
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
		  <label for="inputEmail3" class="col-sm-2 col-form-label">房号</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="房号" v-model="customer.rid">
		  </div>
		</div>
	  <div class="form-group row">
	    <div class="col-sm-2">
	      <button type="submit" class="btn btn-primary">提交更改</button>
	    </div>
		<div class="col-sm-2">
		  <router-link to="/customer" class="btn btn-primary">取消</router-link>
		</div>
	  </div>
	</form>
</template>

<script>
	//修改顾客信息
	export default {
		name:"CustomerView",
		data(){
			return {
				customer:{
				},
			};
		},
		props:{
			id:{
				required:true,
			}			
		},
		created(){ //组件的创建生命周期函数
			this.viewCustomer();
			
		},
		methods:{
			viewCustomer(id){
				this.axiosJSON.get("/customer/view", {
					params:{
						id:this.id				
					}
				}).then(result=>{
					this.customer=result.data.data.object;
				});
			},
			modify(){
				console.log(this.customer)
				this.axiosJSON.post("/customer/modify", this.customer).then(result=>{
					
					if(result.data.status.status == "OK"){
						alert(result.data.status.message);
						this.$router.push("/customer/list"); //编程方式跳转到部门列表组件
					}
					else{
						alert(result.data.status.message);
					}
				});
			}
		},			
	}
</script>

<style>
</style>
