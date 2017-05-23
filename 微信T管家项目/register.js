$(function () {
	$('input[type="button"]:nth-child(1)').on('click',function () {
		localStorage.setItem('username',$('#username').val());
		localStorage.setItem('password',$('#password').val());
		alert("注册成功！您的用户名为" + localStorage.getItem("username")+ "," + "密码为" + localStorage.getItem("password") + ",请牢记！！");
	});
	$('input[type="button"]:nth-child(2)').on('click',function () {
		window.close();
	});
});