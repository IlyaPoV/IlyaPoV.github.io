$(document).ready(function(){
	$('.next').click(function(){
		console.log('push')
		var currentImage = $('.slide.current');
		var currentImageIndex = $('.slide.current').index();
		console.log($('.slide').length);
		var nextImageIndex = currentImageIndex + 1;
		console.log(nextImageIndex);
		var nextImage = $('.slide').eq(nextImageIndex);
		console.log(nextImage);
		currentImage.fadeOut(0);
		currentImage.removeClass('current');


		
		if (nextImageIndex == $('.slide:last').index()+1) {
			$('.slide').eq(0).fadeIn(0);
			$('.slide').eq(0).addClass('current');
		} else{
			nextImage.fadeIn(0);
			nextImage.addClass('current');
		}
	})
	$('.prev').click(function(){
		var currentImage = $('.slide.current');
		var currentImageIndex = $('.slide.current').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.slide').eq(prevImageIndex);
		currentImage.fadeOut(0);
		currentImage.removeClass('current');

		if(currentImageIndex == 0){
			$('.slide').eq($('.slide:last').index()).fadeIn(0);
			$('.slide').eq($('.slide:last').index()).addClass('current');
		}else{
			prevImage.fadeIn(0);
			prevImage.addClass('current');
		}		
	})
})