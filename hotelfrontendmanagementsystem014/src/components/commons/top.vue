<template>
	<div>
		<div id="page-loader">
		    <div class="loaders">
		        <img src="../src/assets/images/loader/3.gif" alt="First Loader">
		        <img src="../src/assets/images/loader/4.gif" alt="First Loader">
		    </div>
		</div>
		<header id="site-header">
		    <div class="container">
		        <div class="row">
		            <div class="col-md-3">
		                <figure id="site-logo">
		                    <a href="index.html"><img src="../src/assets/images/logo.png" alt="Logo"></a>
		                </figure>
		            </div>
		            <div class="col-md-6 col-sm-8">
						<div id="app"></div>
		            </div>
		            <div class="col-md-3 col-sm-4">
		                <div class="contact-in-header clearfix">
		                    <i class="fa fa-mobile"></i>
		                    <span>
		                        Call Us Now
		                        <br>
		                    <strong>111 222 333 444</strong>
		                    </span>
		                </div>
		            </div>
		        </div>
		    </div>
		</header>
	</div>
</template>

<script>
	export default {
		name: "Top",
		data(){
			return {};
		}
	}
</script>

<style>
</style>
