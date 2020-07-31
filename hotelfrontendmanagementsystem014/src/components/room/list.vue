<template>
	<div class="room">
		<div class="container">
		    <table class="table">
		      <caption><h3>酒店客房信息</h3></caption>
		      <thead class="thead-dark">
		        <tr>
		          <th scope="col"></th>
		          <th scope="col">房号</th>
		          <th scope="col">楼层</th>
		          <th scope="col">价格</th>
		          <th scope="col">类型</th>
		          <th scope="col">状态</th>
		          <th scope="col">操作</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr v-for="room in roomList" v-bind:key="room.rid">
		          <th scope="row">{{$index}}</th>
		          <td>{{room.rid}}</td>
		          <td>{{room.type}}</td>
		          <td>{{room.floor}}</td>
		          <td>{{room.price}}</td>
		          <td>{{room.status}}</td>
		          <td>
					<router-link v-bind:to="{name:'roommodify', params: {rid:room.rid}}" class="btn btn-default">修改</router-link>
					<router-link v-bind:to="'/room/view/:'+room.rid" class="btn btn-default">查看</router-link>
					<button class="btn btn-danger pull-right" role="button" aria-pressed="true" data-toggle="modal"
											data-target="#deleteConfirm" v-on:click="deleting(room.rid, room.floor, room.type)">删除</button>
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
				        <h5 class="modal-title" id="exampleModalLabel">请核对要删除的房间信息</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				        <div class="form-group row">
				            <label for="staticEmail" class="col-sm-3 col-form-label">房间楼层</label>
				            <label for="staticEmail" class="col-sm-3 col-form-label">{{deletingRoom.floor}}</label>
				        </div>
							 <div class="form-group row">
								 <label for="staticEmail" class="col-sm-3 col-form-label">房间号</label>
								 <label for="staticEmail" class="col-sm-3 col-form-label">{{deletingRoom.rid}}</label>
							  </div>
							  <div class="form-group row">
								  <label for="staticEmail" class="col-sm-3 col-form-label">房间类型</label>
								  <label for="staticEmail" class="col-sm-3 col-form-label">{{deletingRoom.type}}</label>
							   </div>
						</div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
				        <button type="button" class="btn btn-primary" data-dismiss="modal"
									v-on:click="roomDelete()">确定删除</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>	
		</div>
		<router-link to="/room/add" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">增加房间</router-link>
	</div>
	
</template>

<script>
	export default {
		name:"RoomList",
		data(){
			return {
				deletingRoom:{
					rid:"",
					floor:"",
					type:""
				},
				roomList:[],
				page:1,
				rows:10,
				count:0,
				pageCount:0
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				this.axiosJSON.get("/room/getListByAllWithPage",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.roomList=result.data.data.objectList;
					this.count=result.data.config.count;
					this.pageCount=result.data.config.pageCount;
				});
			},
			deleting(rid, floor, type){
				this.deletingRoom.rid=rid;
				this.deletingRoom.floor=floor;
				this.deletingRoom.type=type;
				
			},
			roomDelete(){
				this.axiosJSON.get("room/delete",{
						params:{
							rid:this.deletingRoom.rid
						}					
					}).then(result=>{
						let resultData = result.data;
						alert(resultData.status.message)
						if (resultData.status.status == "OK"){
							this.getList();
						}						
					});
			}
		}
	}
</script>

<style>
	
</style>
