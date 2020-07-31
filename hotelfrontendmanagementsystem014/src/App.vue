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
                <div class="col-md-7 col-sm-8">
                    <nav id="site-nav" class="nav navbar-default">
                        <ul class="nav navbar-nav">
                            <li><a href="#" v-on:click="intercept('/')">主页</a></li>
                            <li><a href="#" v-on:click="intercept('/room')">客房管理</a></li>
                            <li><a href="#" v-on:click="intercept('/customer')">房客管理</a></li>
                            <li><a href="#" v-on:click="intercept('/product')">消费管理</a></li>
                            <li><a href="#" v-on:click="intercept('report')">报表</a></li>
                        </ul>
                    </nav>
                </div>
				<div class="col-md-1 col-sm-2">
					
				    <figure id="site-logo">
				        <button id="logTip" data-toggle="modal" data-target="#exampleModal" style="background-color: #FFFFFF;border: #FFFFFF;">
							<div v-if="loginFlag">
								<img src="./assets/images/login.png" alt="Logo" style="width: 40px;">
							</div>
							<div v-else>
								<img src="./assets/images/unlogin.png" alt="Logo" style="width: 40px;">
							</div>
				          
				        </button>
				    </figure>
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
		<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <div>
					<ul class="nav nav-tabs">
						<li class="nav-item">
							<a class="nav-link active" href="#" v-on:click="changeToLogin()">登陆</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#"  v-on:click="changetoReg()">注册</a>
						</li>
					</ul>
		        </div>
		        <div>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
				  <div v-if="loginFlag">
					  <h3>您已经通过{{userInfo.name}}进行登陆</h3>
					  <div class="modal-footer">
					    <button id="cancel1" type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
						<button type="submit" class="btn btn-primary" v-on:click="logout()">退出</button>
					    <button type="submit" class="btn btn-primary" v-on:click="destory()">注销</button>
				
					  </div>
				  </div>
				  <div v-else>
					  <form v-on:submit.prevent="handleForm()">
					  	<div class="form-group row">
					  		<label for="inputEmail3" class="col-sm-2 col-form-label">用户名</label>
					  		<div class="col-sm-4">
					  			<input type="text" class="form-control" id="input" placeholder="用户名"
					  			 required v-model="userInfo.name">
					  		</div>
					  	</div>
					  	
					  	<div class="form-group row">
					  		<label for="inputEmail3" class="col-sm-2 col-form-label">密码</label>
					  		<div class="col-sm-4">
					  			<input type="text" class="form-control" id="input" placeholder="密码"
					  			 required v-model="userInfo.passwd">
					  		</div>
					  	</div>
					  	<div class="form-group row" v-if="logining==false">
					  		<label for="inputEmail3" class="col-sm-2 col-form-label">确认密码</label>
					  		<div class="col-sm-4">
					  			<input type="text" class="form-control" id="input" placeholder="确认密码" 
					  			required v-model="confirmPasswd">
					  		</div>
					  	</div>
					  	<div class="form-group row" >
					  		<span class="text-danger">{{errorTip}}</span>
					  	</div>
					  	<div class="modal-footer">
					  	  <button id="cancel" type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
					  	  <button type="submit" class="btn btn-primary" v-if="logining">登陆</button>
					  	  <button type="submit" class="btn btn-primary" v-else>注册</button>
					  	</div>
					  </form>	
				  </div>
				
				
		      </div>
		     
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
<script>
	export default {
		name: "App",
		data(){
			return {
				userInfo:{
					name:"",
					passwd:""
				},
				confirmPasswd:"",
				loginFlag:false,
				logining:true,
				errorTip:""
			};
		},
		methods:{
			changeToLogin(){
				console.log(this.logining)
				this.logining=true;
			},
			changetoReg(){
				console.log(this.logining)
				this.logining=false;
			},
			handleForm(){
				if(this.logining){
					this.login();
				}
				else{
					this.register();
				}
			},
			login(){
				this.axiosJSON.post("/user/login", this.userInfo).then(result=>{
					
					if(result.data.status.status=="OK"){
						this.loginFlag=true;
						alert(result.data.status.message);
						document.getElementById("cancel").click();
						this.$router.push("/"); //编程方式跳转到部门列表组件
					}
					else{
						alert(result.data.status.message);
					}
				});
			},
			register(){
				if (this.userInfo.passwd != this.confirmPasswd){
					this.errorTip = "两次输入密码不一致，请重新输入";
					this.userInfo.passwd="";
					this.confirmPasswd="";
					return;
				}
				this.axiosJSON.post("/user/register", this.userInfo).then(result=>{
					
					if(result.data.status.status=="OK"){
						this.logining=true;
						alert(result.data.status.message);
						document.getElementById("cancel1").click();
						this.$router.push("/"); //编程方式跳转到部门列表组件
						
					}
					else{
						alert(result.data.status.message);
					}
				});
				
			},
			destory(){
				this.axiosJSON.post("/user/destory", this.userInfo).then(result=>{
					if(result.data.status.status=="OK"){
						this.loginFlag=false;
						alert(result.data.status.message);
						document.getElementById("cancel1").click();
						this.$router.push("/"); //编程方式跳转到部门列表组件
					}
					else{
						alert(result.data.status.message);
					}
				});
			},
			logout(){
				this.loginFlag=false;
				alert("退出成功");
				document.getElementById("cancel1").click();
				this.$router.push("/"); //编程方式跳转到部门列表组件
			},
			intercept(uri){
				if(this.loginFlag || uri =='/'){
					this.$router.push(uri);
				}
				else{
					document.getElementById("logTip").click();
				}
				
			}
			
		}
		
	}
	
</script>

<style>
@import url("assets/font-awesome/css/font-awesome.min.css"); 
@import url("plugins/slick/slick.css");
@import url("plugins/slick-nav/slicknav.css");
@import url("plugins/wow/animate.css");
@import url("assets/bootstrap/dist/css/bootstrap.min.css");	
</style>
