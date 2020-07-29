<template>
	<div class="room">
		<div class="container">
			<SearchBar></SearchBar>
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
		          <th scope="col">押金</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <th scope="row">1</th>
		          <td>宋</td>
		          <td>111</td>
		          <td>男</td>
		          <td>21</td>
		          <td>222</td>
		          <td>302</td>
		          <td>
		            <a href="" class="btn btn-default">修改</a> 
		            <a href="" class="btn btn-default">查看</a>
		            <a href="#" class="btn btn-danger">删除</a>
		          </td>
		        </tr>
		      </tbody>
		    </table>
			<Form></Form>
		</div>
		
	</div>
	
</template>

<script>
	import SearchBar from '@/components/commons/searchbar.vue'
	import Form from '@/components/commons/form.vue'
	export default {
		name: "Room",
		data(){
			return {};
		},
		components: {
		  Form,
		  SearchBar
		}
	}
</script>

<style>
	
</style>
