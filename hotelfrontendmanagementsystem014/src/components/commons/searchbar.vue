<template>
	<div>
		<div class="input-group col-md-3" style="margin-top:0px positon:relative">
		    <input type="text" class="form-control" :placeholder="placeholder" />
		    <span class="input-group-btn">
		        <a href="" class="btn btn-info btn-search">查找</a>
		    </span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SearchBar",
		data(){
			return {};
		},
		props:{
			placeholder:{
				type: String,
				required: true
			}
		},
	}
</script>

<style>
</style>
