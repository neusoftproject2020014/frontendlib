<template>
	<div>
		<form>
		    <div class="form-group row" v-for="entry in formEntry" v-bind:key="entry.name">
		      <label for="inputEmail3" class="col-sm-2 col-form-label">{{entry.name}}</label>
		      <div class="col-sm-4">
		        <input type="text" class="form-control" id="input" :placeholder="entry.placeholder">
		      </div>
		    </div>
		  <div class="form-group row">
		    <div class="col-sm-2">
		      <router-link :to="btn1.clickUrl" class="btn btn-primary">{{btn1.showInfo}}</router-link>
		    </div>
			<div class="col-sm-2">
			  <button type="submit" class="btn btn-primary">{{btn2}}</button>
			</div>
		  </div>
		</form>
	</div>
</template>

<script>
	export default {
		name: "Form",
		data(){
			return {};
		},
		props:{
			// 表单条目
			// 数组中的每个对象格式如下
			/**
			 * {
			 *		name,
			 * 		placeholder,
			 */
			formEntry:{
				type: Array,
				required: true
			},
			btn1:{
				default: "点击",
				requied: false,
			},
			btn2:{
				default: "点击",
				requied: false,
			}
		},
	}
</script>

<style>
</style>
