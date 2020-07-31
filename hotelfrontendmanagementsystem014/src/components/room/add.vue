<template>
	<form method="post" v-on:submit.prevent="add()">
	    <div class="form-group row">
	      <label for="inputEmail3" class="col-sm-2 col-form-label">房间编号</label>
	      <div class="col-sm-4">
	        <input type="text" class="form-control" 
				id="input" placeholder="房间编号" v-model="room.rid">
	      </div>
	    </div>
		<div class="form-group row">
		  <label for="inputEmail3" class="col-sm-2 col-form-label">房间类型</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="房间类型" v-model="room.type">
		  </div>
		</div>
		<div class="form-group row">
		  <label for="inputEmail3" class="col-sm-2 col-form-label">所在楼层</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="所在楼层" v-model="room.floor">
		  </div>
		</div>
		<div class="form-group row">
		  <label for="inputEmail3" class="col-sm-2 col-form-label">价格</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="价格" v-model="room.price">
		  </div>
		</div>
		<div class="form-group row">
		  <label for="inputEmail3" class="col-sm-2 col-form-label">房间状态</label>
		  <div class="col-sm-4">
		    <input type="text" class="form-control" 
				id="input" placeholder="房间状态" v-model="room.status">
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
</template>

<script>
	export default {
		name: "RoomAdd",
		data(){
			return {
				room:{
					rid:"",
					type:"",
					floor:"",
					price:"",
					status:"",
				},
			}
		},
		methods:{
			add(){
				//console.log(this.room)
				this.axiosJSON.post("/room/add",this.room).then(result=>{
					let resultData = result.data;
					console.log(resultData)
					if(resultData.status.status=="OK"){
						alert(resultData.status.message);
						this.$router.push("/room"); //编程方式跳转到部门列表组件
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
