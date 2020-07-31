<template>
	<div class="container">
	  <div class="row">
	     <div class="col-xs-3">
			 <div class="col-xs-12" style="height:50px;"></div>
	        <nav>
				<ul class="nav nav-pills nav-stacked span2" style="font-size: 18px">
	            <li><router-link to="/report/checkinform">客人入住报表</router-link></li>
	            <li><router-link to="/report/checkoutform">客人离店报表</router-link></li>
	            <li><router-link to="/report/financialform">财务进账报表</router-link></li>
	          </ul>
	        </nav>  
	     </div>
	     <div class="col-xs-8">
			<router-view></router-view>
	      </div>
	    </div>
	</div>
</template>

<script>
	export default {
		name: "Report",
		data(){
			return {};
		}
	}
</script>

<style>
</style>
