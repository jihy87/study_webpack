var $menu = $('.header .menu'),
$contents = $('.sec'),
$doc = $('html, body');

// 해당 섹션으로 스크롤 이동
$('#wrap').on('click','.menu a, .scrto', function(e){
	var attr = $(this).attr('href');
	var hdrHig = $('header').outerHeight();
	var offsetTop = $(attr).offset().top - hdrHig;
	$doc.stop().animate({
	scrollTop:offsetTop
	}, 500);
	e.preventDefault();
});

// menu class on 추가 
$(window).scroll(function(){
	var scltop = $(window).scrollTop();
	var hdrHig = $('header').outerHeight() + 6;
	$.each($contents, function(idx, item){
		var $secTgt = $contents.eq(idx);
		var targetTop = $secTgt.offset().top - hdrHig;

		if (targetTop <= scltop) {
			$menu.removeClass('on');
			$menu.eq(idx).addClass('on');
		}
		if (!(200 <= scltop)) {
			$menu.removeClass('on');
		}

		if (scltop > $('.spot').offset().top+$('.slide').outerHeight()) {
			$('header').addClass('bg');
		} else {
			$('header').removeClass('bg');
		}
	})
});

// Go to the TOP 
var btnTop = $('.crewclass'); 
btnTop.on('click', function(e){
	e.preventDefault();
	$doc.stop().animate({
		scrollTop : 0
	},500)
});

// 애니메이션
$('.slide_info .field_txt').addClass('trans')

// slick 슬라이더
$('.spot .slide').slick({
	autoplay: true,
	dots: true,
	prevArrow: $('.btn_slide.prev'),
	nextArrow: $('.btn_slide.next'),
});

$('input, textarea').on('change', function(){
	to = 'crewclass@twayair.com';
	name = 'name: ' + $('#name').val() + '%0D%0A';
	email = 'e-mail: ' +$('#email').val() + '%0D%0A';
	phone = 'phone: ' +$('#phone').val() + '%0D%0A';
	subject = $('#subject').val();
	body = $('#txt').val();
});

$('.wrap_mail .btn').on('click', function(){
	var result = txtFieldCheck() == true ? true : false;
	// console.log(result);
	if (!result) {
		// alert('outlook으로 메일을 전송합니다.');
		$('.wrap_mail .btn').attr({
			'href':'mailto:'+ to+ '?subject=' +subject+ '&body=' +name+phone+email+body
		});
	}
})

function txtFieldCheck(){
	// form안의 모든 text type 조회
	var txtIpt = $('.form input[type=text]');
	var txtArea = $('.form textarea');

	for(var i = 0; i < txtIpt.length; i ++){
		// console.log($(txtIpt[i]).val());
		if("" == $(txtIpt[i]).val() || null == $(txtIpt[i]).val()){
			var ele_id = $(txtIpt[i]).attr("id");
			var label_txt = $("label[for='" + ele_id +"']").text();
			// console.log("id : " + ele_id + ", label : " + label_txt);
			showAlert(ele_id, label_txt);
			return true;
		}
	}
	if("" == $(txtArea).val() || null == $(txtArea).val()){
		var ele_id = $(txtArea).attr("id");
		var label_txt = $("label[for='" + ele_id +"']").text();
		// console.log("id : " + ele_id + ", label : " + label_txt);
		showAlert(ele_id, label_txt);
		return true;
	}
}


function showAlert(ele_id, label_txt){
	alert(label_txt + "을(를) 입력하세요");
	// 해당 id에 focus.
	$("#" + ele_id).focus();
}