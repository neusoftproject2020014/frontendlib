<template>
	<form method="post" v-on:submit.prevent="add()">
	    <div class="form-group row">
	      <label for="inputEmail3" class="col-sm-2 col-form-label">商品编号</label>
	      <div class="col-sm-4">
	        <input type="text" class="form-control" 
				id="input" placeholder="商品编号" v-model="product.pid">
	      </div>
	    </div>
		<div class="form-group row">
		  <label for="inputEmail3" class="col-sm-2 col-form-label">商品名称</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="商品名称" v-model="product.name">
		  </div>
		</div>
		<div class="form-group row">
		  <label for="inputEmail3" class="col-sm-2 col-form-label">价格</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="价格" v-model="product.price">
		  </div>
		</div>
		<div class="form-group row">
		  <label for="inputEmail3" class="col-sm-2 col-form-label">类型</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="类型" v-model="product.type">
		  </div>
		</div>
		<div class="form-group row">
		  <label for="inputEmail3" class="col-sm-2 col-form-label">库存</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="库存" v-model="product.stock">
		  </div>
		</div>
	  <div class="form-group row">
	    <div class="col-sm-2">
	      <button type="submit" class="btn btn-primary">提交</button>
	    </div>
		<div class="col-sm-2">
		  <router-link to="/product" class="btn btn-primary">取消</router-link>
		</div>
	  </div>
	</form>
</template>

<script>
	export default {
		name: "ProductAdd",
		data(){
			return {
				product:{
					pid:"",
					type:"",
					name:"",
					price:"",
					stock:"",
				},
			}
		},
		methods:{
			add(){
				//console.log(this.room)
				this.axiosJSON.post("/product/add",this.product).then(result=>{
					let resultData = result.data;
					console.log(resultData)
					if(resultData.status.status=="OK"){
						alert(resultData.status.message);
						this.$router.push("/product"); //编程方式跳转到部门列表组件
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