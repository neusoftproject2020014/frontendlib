<template>
	<div class="box">
		<div class="box-header with-border">
			<h3 class="box-title">修改房间</h3>
		</div>
		<div class="box-body">
			<form method="post" v-on:submit.prevent="modify()">
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 col-form-label">房间编号</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" 
							id="input" v-model="room.rid">
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 col-form-label">房间类型</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" 
							id="input"  v-model="room.type">
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 col-form-label">所在楼层</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" 
							id="input"  v-model="room.floor">
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 col-form-label">价格</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" 
							id="input"  v-model="room.price">
					</div>
				</div>
				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 col-form-label">房间状态</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" 
						id="input"  v-model="room.status">
					</div>
				</div>
				<div class="form-group row">
					<div class="col-sm-2">
						<button type="submit" class="btn btn-primary">提交</button>
					</div>
					<div class="col-sm-2">
						<router-link to="/room" class="btn btn-primary">取消</router-link>
					</div>
				</div>
			</form>
		
		</div>
	</div>
</template>

<script>
	//部门修改组件
	export default {
		name:"RoomModify",
		data(){
			return {
				room:{}
			};
		},
		props:{
			rid:{
				required:true,
			}
		},
		created(){ //组件的创建生命周期函数
			let roomRid=this.$route.params.rid;
			this.getRoom(roomRid);
			
		},
		methods:{
			getRoom(){
				this.axiosJSON.get("/room/getByRid?rid="+this.rid).then(result=>{
					this.room=result.data.data.object;
				});
			},
			modify(){
				this.axiosJSON.post("/room/modify",this.room).then(result=>{
					if(result.status.status=="OK"){
						alert(result.dstatus.message);
						this.$router.push("/room/list"); //编程方式跳转到部门列表组件
					}
					else{
						alert(result.status.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>
