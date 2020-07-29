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
		        <tr>
		          <th scope="row">1</th>
		          <td>宋</td>
		          <td>111</td>
		          <td>男</td>
		          <td>21</td>
		          <td>222</td>
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
		name: "Product",
		data(){
			return {};
		}
	}
</script>

<style>
	
</style>
