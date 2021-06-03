//task1
$('div span').css('color', 'blue')
//task2
$('div .myclass').css('color', 'red')
//task3
$('div.active').css('color', 'green')
//task4
$('.content1 li:first').css('color', 'red')
$('.content1 li:eq(3)').css('color', 'cyan')
$('.content1 li:last').css('color', 'gold')
//task5
$('ul#nav>li').children().css('color', 'red')
//task6
$('#task6').children().not('h2').css('color', 'red')
//task7
$('#content2 ul li:gt(2)').css('color', 'blue')
//task8
$('tr:even').css('background-color', 'pink')
$('tr:odd').css('background-color', 'blue')
//task9
$('#content3>li:first, #content3>li:gt(2)').css('color', 'red')