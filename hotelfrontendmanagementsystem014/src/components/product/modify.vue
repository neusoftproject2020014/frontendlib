<template>
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">修改商品</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="modify()">
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 col-form-label">商品编号</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" 
							id="input" v-model="product.pid">
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 col-form-label">商品名称</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" 
							id="input"  v-model="product.name">
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 col-form-label">价格</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" 
							id="input"  v-model="product.price">
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 col-form-label">类型</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" 
							id="input"  v-model="product.type">
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 col-form-label">库存</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" 
						id="input"  v-model="product.stock">
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
		
		</div>
	</div>
</template>

<script>
	//部门修改组件
	export default {
		name:"ProductModify",
		data(){
			return {
				product:{}
			};
		},
		props:{
			pid:{
				required:true,
			}
		},
		created(){ //组件的创建生命周期函数
			let productPid=this.$route.params.pid;
			this.getProduct(productPid);
			
		},
		methods:{
			getProduct(){
				this.axiosJSON.get("/product/getBypid?pid="+this.pid).then(result=>{
					this.product=result.data.data.object;
				});
			},
			modify(){
				this.axiosJSON.post("/product/modify",this.product).then(result=>{
					if(result.data.status.status=="OK"){
						alert(result.data.status.message);
						this.$router.push("/product/list"); //编程方式跳转到部门列表组件
					}
					else{
						alert(result.data.status.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>