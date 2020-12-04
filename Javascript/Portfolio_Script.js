$(document).ready(function(){
$('.sonbox').each(function(index){ 
	$(this).attr('sonbox-index', index);
}).click(function(){
    /*클릭된 <div>의 menu-index 값을 index 변수에 할당한다.*/
    var index = $(this).attr('son-box-index');
    /*클릭한 <div>에  clicked_menu 클래스 추가*/
	$('.sonbox[sonbox-index=' + index + ']').addClass('clicked_sonbox'); 
    /*그 외 <div>는  clicked_menu 클래스 삭제*/
	$('.sonbox[sonbox-index!=' + index + ']').removeClass('clicked_sonbox');
});
});