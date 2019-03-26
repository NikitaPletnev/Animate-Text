//Функция добавления слов
$(document).ready(function() {
	let str = prompt('Введите текст,пожалуйста.');
	if(str == null || str == ""){
      alert("Ничего не введено");
      let str = prompt('Введите текст,пожалуйста.')
	}
    var arr = [];
    arr = str.split('')
    for (var i = 0; i < arr.length; i++) {
         let text = arr[i];
         let s = "";
         s += "<div class = 'sim'>" + text + "</div>"
         $('#text').append(s);
    }
})
//Применение анимации
$(document).ready(function(){
	$('.sim').mouseover(function(){
		let sim = $(this)
		TweenMax.to(sim , 1, {"font-size":70 , "color":"#00FF00"});
	})
})
//Возврат текста к обычным параметрам 
$(document).ready(function(){
	$('.sim').mouseout(function(){
		let sim1 = $(this)
		TweenMax.to(sim1 , 1, {"font-size":40 , "color":"#000000"});
	})
})