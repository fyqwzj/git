window.onload=function(){

//只能输入纯数字的输入框:<input type="text" name="" οninput="value=value.replace(/[^\d]/g,'')">

//var label=document.getElementById("name");   
//label.innerHTML="XXXXXX"; //JS 
 
//JQuery的方式 
//$("#name").html("XXXXX"); //JQuery 

	var username=document.getElementById('username')
	var password1=document.getElementById('FristPassword')
	var password2=document.getElementById('SecondPassword')

	username.onfocus=function(){

		this.placeholder=''
		
	}

	password1.onfocus=function(){
		this.placeholder=''

	}

	password2.onfocus=function(){
		this.placeholder=''
	}

	username.onblur=function(){

		this.placeholder='请输入用户名'

		var re=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{3,12}$/

		if (!re.test(username.value)){
				$("#usernameLabel").html("用户名必须以数字字母组成的3-12位数！")
				$('.warning').css('color','red')
		}
		else{
				$('.warning').text("*")
				$('.warning').css('color','#000')	
		}
	}

	password1.onblur=function(){

		this.placeholder='请输入密码'

		var re = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/

		//字母 数字 符号 ：高
		//字母 数字 ：中
		//全部是字母/数字 ：低
		//升序 / 降序 例如123456 654321 56789： 报错为密码太简单

		if (!re.test(username.value)){
				$('#FristPasswordLabel').text("密码强度：高")
				$('.warning').css('color','red')
		}
		else{
				$('.warning').text("*")
				$('.warning').css('color','#000')	
		}
		
	}
	

	password2.onblur=function(){

		//判断password1 == password2 相等即可

		this.placeholder='请确认密码'


	}
}

