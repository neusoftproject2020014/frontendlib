<template>
	<div>
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
		       <th scope="row">{{$index}}</th>
		       <td>{{cstm.name}}</td>
		       <td>{{cstm.id}}</td>
		       <td>{{cstm.gender}}</td>
		       <td>{{cstm.age}}</td>
		       <td>{{cstm.phone}}</td>
			   <td>{{cstm.rid}}</td>
		       <td>{{cstm.checkintime}}</td>
		       <td>{{cstm.checkouttime}}</td>
		       <td>
				   <router-link v-bind:to="{name:'customermodify', params: {id:cstm.id}}" class="btn btn-default">修改</router-link> 
		           <router-link v-bind:to="{name:'customerview', params: {id:cstm.id}}" class="btn btn-default">查看</router-link>
				   <button class="btn btn-danger pull-right" role="button" aria-pressed="true" data-toggle="modal"
						data-target="#deleteConfirm" v-on:click="deleting(cstm.id, cstm.name, cstm.rid)">退房</button>
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
		 	        <h5 class="modal-title" id="exampleModalLabel">请核对退房信息</h5>
		 	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		 	          <span aria-hidden="true">&times;</span>
		 	        </button>
		 	      </div>
		 	      <div class="modal-body">
		 	        <div class="form-group row">
		 	            <label for="staticEmail" class="col-sm-3 col-form-label">姓名</label>
		 	            <label for="staticEmail" class="col-sm-3 col-form-label">{{deletingCstm.name}}</label>
		 	         </div>
					 <div class="form-group row">
					     <label for="staticEmail" class="col-sm-3 col-form-label">身份证号</label>
					     <label for="staticEmail" class="col-sm-3 col-form-label">{{deletingCstm.id}}</label>
					  </div>
					  <div class="form-group row">
					      <label for="staticEmail" class="col-sm-3 col-form-label">房号</label>
					      <label for="staticEmail" class="col-sm-3 col-form-label">{{deletingCstm.rid}}</label>
					   </div>
		 	      </div>
		 	      <div class="modal-footer">
		 	        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
		 	        <button type="button" class="btn btn-primary" data-dismiss="modal"
						v-on:click="checkOut(deletingCstm.id)">确定退房</button>
		 	      </div>
		 	    </div>
		 	  </div>
		 	</div>
		 </div>	
		 <router-link to="/customer/checkin" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">办理入住</router-link>   
		
	</div>
	   
</template>

<script>
	export default {
		name: "CustomerList",
		data(){
			return {
				deletingCstm:{
					id:"",
					name:"",
					rid:""
				},
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
				this.axiosJSON.get("customer/list",{
						params:{
							rows:this.rows,
							page:this.page,
						}					
					}).then(result=>{
						let resultData = result.data;
						if (resultData.status.status == "OK"){
							this.customerList=resultData.data.objectList;
							this.count=resultData.config.count;
							this.pageCount=resultData.config.pageCount;
							
						}						
					});
			},
			deleting(id, name, rid){
				this.deletingCstm.name=name;
				this.deletingCstm.id=id;
				this.deletingCstm.rid=rid;
				
			},
			checkOut(){
				this.axiosJSON.get("customer/checkout",{
						params:{
							id:this.deletingCstm.id
						}					
					}).then(result=>{
						let resultData = result.data;
						alert(resultData.status.message)
						if (resultData.status.status == "OK"){
							this.getCustomerList();
						}						
					});
			}
				
		},
	}
</script>

<style>
</style>
