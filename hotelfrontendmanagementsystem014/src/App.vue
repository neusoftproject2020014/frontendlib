<template>
  <div id="app">
    <!-- <div id="page-loader">
        <div class="loaders">
            <img src="./assets/images/loader/3.gif" alt="First Loader">
            <img src="./assets/images/loader/4.gif" alt="First Loader">
        </div>
    </div> -->
    <header id="site-header">
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <figure id="site-logo">
                        <a href="index.html"><img src="./assets/images/logo.png" alt="Logo"></a>
                    </figure>
                </div>
                <div class="col-md-8 col-sm-8">
                    <nav id="site-nav" class="nav navbar-default">
                        <ul class="nav navbar-nav">
                            <li><router-link to="/">主页</router-link></li>
                            <li><router-link to="/">酒店基础信息</router-link></li>
                            <li><router-link to="/room">客房管理</router-link></li>
                            <li><router-link to="/customer">房客管理</router-link></li>
                            <li><router-link to="/">消费管理</router-link></li>
                            <li><router-link to="/reportform">报表</router-link></li>
                            <li><router-link to="/">系统管理</router-link></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-2 col-sm-4">
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
    <router-view></router-view>
    <a href="#top" id="scroll-top"><i class="fa fa-angle-up"></i></a>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    
  </div>
</template>

<style>
@import url("assets/font-awesome/css/font-awesome.min.css"); 
@import url("plugins/slick/slick.css");
@import url("plugins/slick-nav/slicknav.css");
@import url("plugins/wow/animate.css");
@import url("assets/bootstrap/dist/css/bootstrap.min.css");	
</style>
