$('.login-link').click(function(){
	let modalLogin = $('.modal.modal-login');
	modalLogin.addClass('modal-open');
})
$('.modal-close').click(function(){
	let modalLogin = $('.modal.modal-login');
	modalLogin.removeClass('modal-open');
})
