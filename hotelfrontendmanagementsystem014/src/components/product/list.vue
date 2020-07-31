<template>
	<div class="room">
		<div class="container">
		    <table class="table">
		      <caption><h3>酒店商品信息</h3></caption>
		      <thead class="thead-dark">
		        <tr>
		          <th scope="col"></th>
		          <th scope="col">商品编号</th>
		          <th scope="col">商品名称</th>
		          <th scope="col">价格</th>
		          <th scope="col">类型</th>
		          <th scope="col">库存</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr v-for="p in productList" v-bind:key="p.pid">
		          <th scope="row">{{$index}}</th>
		          <td>{{p.pid}}</td>
		          <td>{{p.name}}</td>
		          <td>{{p.price}}</td>
		          <td>{{p.type}}</td>
		          <td>{{p.stock}}</td>
		          <td>
		            <a href="" class="btn btn-default">修改</a> 
		            <a href="" class="btn btn-default">查看</a>
		            <a href="#" class="btn btn-danger">删除</a>
		          </td>
		        </tr>
		      </tbody>
		    </table>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: "ProductList",
		data(){
			return {
				productList: [],
				rows: 4,
				page: 1
			};
		},
		created(){
			this.getProductList();
		},
		methods:{
			getProductList(){
				this.axiosJSON.get("product/list",{
						params:{
							rows:this.rows,
							page:this.page,
						}					
					}).then(result=>{
						let resultData = result.data;
						if (resultData.status.status == "OK"){
							this.productList=resultData.data.objectList;
							this.count=resultData.config.count;
							this.pageCount=resultData.config.pageCount;
							
						}						
					});
			},
		},
	}
</script>

<style>
	
</style>
