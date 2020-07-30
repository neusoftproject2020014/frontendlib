<template>
	<div class="room">
		<div class="container">
			<SearchBar :placeholder=searchPh></SearchBar>
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
		          <th scope="row">1</th>
		          <td>{{room.rid}}</td>
		          <td>{{room.type}}</td>
		          <td>{{room.floor}}</td>
		          <td>{{room.price}}</td>
		          <td>{{room.status}}</td>
		          <td>
					<router-link v-bind:to="'/room/modify/'+room.rid" class="btn btn-default">修改</router-link>
					<router-link v-bind:to="'/room/view/'+room.rid" class="btn btn-default">查看</router-link>
					<router-link v-bind:to="'/room/delete/'+room.rid" class="btn btn-default">删除</router-link>
				  </td>
		        </tr>
		      </tbody>
		    </table>
			<Form :formEntry=formEntrys></Form>
		</div>
		
	</div>
	
</template>

<script>
	import SearchBar from '@/components/commons/searchbar.vue'
	import Form from '@/components/commons/form.vue'
	export default {
		name: "Room",
		data(){
			return {
				formEntrys:[
					{name: '房间号', placeholder:'房间'},
					{name: '房间类型',placeholder:'类型'},
					{name: '所在楼层',placeholder:'楼层'}, 
					{name: '房间价格',placeholder:'价格'},
					{name: '房间状态',placeholder:'状态'}
					],
				searchPh:"请输入客户身份证号"
			};
		},
		components: {
		  Form,
		  SearchBar
		}
	}
	export default {
		name:"RoomList",
		data(){
			return {
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
					this.roomList=result.data.objectList;
					this.count=result.config.count;
					this.pageCount=result.config.pageCount;
				});
			},
			deleteRoom(rid){
				let checkresult=confirm("您确认要删除此房间么");
				if(checkresult){
					this.axiosJSON.post("/room/delete",{rid:rid}).then(result=>{
						alert(result.data.message);
						if(result.status.status=="OK"){
							this.getList();
						}
					});
				}
			}
		}
	}
</script>

<style>
	
</style>
