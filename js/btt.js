$(function () {
	$("#btt").hide();
	$(window).scroll(function () {
		$("#pos").text($(this).scrollTop());
		if ($(this).scrollTop() > 700) {
			$("#btt").fadeIn();
		} else {
			$("#btt").fadeOut();
		}
	});
	$("#btt a").click(function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			1000
		);
		// リンク先に飛んでエラーページが表示されるのを防ぐ
		return false;
	});
});