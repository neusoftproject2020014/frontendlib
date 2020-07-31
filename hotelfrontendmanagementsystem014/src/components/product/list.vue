<template>
	<div class="product">
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
						<router-link v-bind:to="{name:'productmodify', params: {pid:p.pid}}" class="btn btn-default">修改</router-link>
						
						<router-link v-bind:to="'/product/view/:'+p.pid" class="btn btn-default">查看</router-link>
						
						<button class="btn btn-danger pull-right" role="button" aria-pressed="true" data-toggle="modal"
						
												data-target="#deleteConfirm" v-on:click="deleting(p.pid, p.name, p.type,p.price,p.stock)">删除</button>
					
					</td>
		        </tr>
		      </tbody>
		    </table>
			<div>
				<!-- Modal -->
				<div class="modal fade" id="deleteConfirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLabel">请核对要删除的商品信息</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
						  <div class="modal-body">
							<div class="form-group row">
								<label for="staticEmail" class="col-sm-3 col-form-label">商品编号</label>
								<label for="staticEmail" class="col-sm-3 col-form-label">{{deletingProduct.pid}}</label>
							</div>
							<div class="form-group row">
								 <label for="staticEmail" class="col-sm-3 col-form-label">商品名称</label>
								 <label for="staticEmail" class="col-sm-3 col-form-label">{{deletingProduct.name}}</label>
							</div>
							<div class="form-group row">
								  <label for="staticEmail" class="col-sm-3 col-form-label">类型</label>
								  <label for="staticEmail" class="col-sm-3 col-form-label">{{deletingProduct.type}}</label>
							</div>
							<div class="form-group row">
							   <label for="staticEmail" class="col-sm-3 col-form-label">价格</label>
							   <label for="staticEmail" class="col-sm-3 col-form-label">{{deletingProduct.price}}</label>
							</div>
							<div class="form-group row">
								<label for="staticEmail" class="col-sm-3 col-form-label">库存</label>
								<label for="staticEmail" class="col-sm-3 col-form-label">{{deletingProduct.stock}}</label>
							</div>
						  </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
				        <button type="button" class="btn btn-primary" data-dismiss="modal"
									v-on:click="productDelete()">确定删除</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		</div>
		<router-link to="/product/add" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">增加商品</router-link>
	</div>
	
</template>

<script>
	export default {
		name: "ProductList",
		data(){
			return {
				deletingProduct:{
					pid:"",
					name:"",
					type:"",
					price:"",
					stock:"",
				},
				productList: [],
				rows: 10,
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
			deleting(pid, name, type,price,stock){
				this.deletingProduct.pid=pid;
				this.deletingProduct.name=name;
				this.deletingProduct.type=type;
				this.deletingProduct.price=price;
				this.deletingProduct.stock=stock;
				
			},
			productDelete(){
				this.axiosJSON.get("product/delete",{
						params:{
							pid:this.deletingProduct.pid
						}					
					}).then(result=>{
						let resultData = result.data;
						alert(resultData.status.message)
						
						if (resultData.status.status == "OK"){
							this.getProductList();
						}						
					});
			}
		},
	}
</script>

<style>
	
</style>
