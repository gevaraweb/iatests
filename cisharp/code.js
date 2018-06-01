var otvet; // здесь будем хранить правильный ответ

// Функция генерирует случайное число от min_random до max_random
 function getrandom(min_random, max_random) {
 var range = max_random - min_random + 1;
 return Math.floor(Math.random()*range) + min_random;}

 // Функция генерирует массив из l случайных чисел со значениями от min до max 
function random(min,max,l)
{var arr = [],m = [],n = 0;
  if (max - min < l-1) return;
  for (var i=0; i<=(max-min); i++)m[i] = i + min;
  for (var i=0; i<l; i++) {n = Math.floor(Math.random()*(m.length)); arr[i]=m.splice(n,1);}; 
  return arr
}


 //Проверка правильности (условная)
function proverka()  {
var countR = 0;
for ( var i = 0; i < test.length; i++ ) {

		  nameId  = 'test' + String( i ); RightItem = antworten[i];
		  
			var selectedItem = '';
			for ( n=0; n<document.getElementsByName( nameId ).length; n++ ) {
				if (document.getElementsByName( nameId )[n].checked) {
						//alert("включен "+(i+1)+" radio-переключатель");
					selectedItem = selectedItem + String( n + 1 );
					}
			}
			
		  if ( selectedItem == '' ) {
			 alert( 'Сначала выберите правильный вариант ответа на ' + String(i+1) + ' вопрос!' );
			 return false;
		   }
			//alert( String(RightItem).length );  alert( selectedItem.length ); 
		  if ( String(RightItem).length == 2 ) { 
				if ( String(selectedItem).length != 2 ) {
					alert( 'Выберите два правильных варианта ответа!' );
					return false;
				}   
		   }
   }
   
 for ( var i = 0; i < test.length; i++ ) { 
			RightItem = antworten[i]; 
			
			  nameId  = 'test' + String( i ); RightItem = antworten[i];
		  
			var selectedItem = '';
			for ( n=0; n<document.getElementsByName( nameId ).length; n++ ) {
				if (document.getElementsByName( nameId )[n].checked) {
						//alert("включен "+(i+1)+" radio-переключатель");
					selectedItem = selectedItem + String( n + 1 );
					}
			}		
			
			
			
		  if ( String(RightItem).length != 2 ) {   
		  if ( selectedItem == RightItem ) {
				countR++;
			  //alert( 'правильный вариант ответа!' ); 
			document.getElementById( 'span' + String( i ) + '-'+ String( RightItem ) ).style.background = "green";		
			  
		  }
		  else {
				document.getElementById( 'span' + String( i ) + '-'+ String( selectedItem ) ).style.background = "red";
				document.getElementById( 'span' + String( i ) + '-'+ String( RightItem ) ).style.background = "green";		
				//alert( 'неправильный вариант ответа!' ); 
		  }
		  }
		  else 
		  {
			  var a =  String(RightItem).charAt(0);  var b =  String(RightItem).charAt(1);
			  if ( parseInt( a ) > parseInt( b ) ) { String(RightItem) = String( b ) + String( a );  }
			  
			  var a =  String( selectedItem ).charAt(0);  var b =  String( selectedItem ).charAt(1);
			  if ( parseInt( a ) > parseInt( b ) ) { selectedItem = String( b ) + String( a );  }	 
				
				if ( String( selectedItem ).charAt(0) == String(RightItem).charAt(0) ) {
				document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( selectedItem ).charAt(0) ) )  ).style.background="green";}
				else {
				document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( selectedItem ).charAt(0) ) )  ).style.background="red";
				document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( RightItem ).charAt(0) ) )  ).style.background="green";		
				}
				
				if ( String( selectedItem ).charAt(1) == String(RightItem).charAt(1) ) {
				document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( selectedItem ).charAt(1) ) )  ).style.background="green";}
				else {
				document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( selectedItem ).charAt(1) ) )  ).style.background="red";
				document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( RightItem ).charAt(1) ) )  ).style.background="green";		
				}
				if ( String( selectedItem ).charAt(0) == String(RightItem).charAt(1) ) {
				document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( selectedItem ).charAt(0) ) )  ).style.background="green";}
				if ( String( selectedItem ).charAt(1) == String(RightItem).charAt(0) ) {
				document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( selectedItem ).charAt(1) ) )  ).style.background="green";}		
		  }
		  
		  
			if ( podskaska[i] != '') { document.getElementById( 'podskaska' + String( i ) ).innerHTML = 'Подсказка: ' + podskaska[i]; }
			//document.getElementById( "button" + String( i ) ).disabled = true;
	}
	document.getElementById( 'result').value = String(countR) + " верных ответов!";
}

 	var dictionary = [];
		dictionary[0] = "animal";
		dictionary[1] = "world";
		dictionary[2] = "country";
		dictionary[3] = "example";
		dictionary[4] = "watch";
		dictionary[5] = "wood";
		dictionary[6] = "dog";
		dictionary[7] = "ship";
		dictionary[8] = "science";
		dictionary[9] = "sun";
		dictionary[10] = "woman";
		dictionary[11] = "mountain";
	
	
 	var dictRus = [];
		dictRus[0] = "ужасный";
		dictRus[1] = "непременно";
		dictRus[2] = "инструмент";
		dictRus[3] = "куролес";
		dictRus[4] = "лесопосадка";
		dictRus[5] = "лестница";
		dictRus[6] = "вынести";
		dictRus[7] = "американец";
		dictRus[8] = "жесткий";
		dictRus[9] = "присутствие";
		dictRus[10] = "разбитый";
		dictRus[11] = "жизненный";
		dictRus[12] = "задание";
		dictRus[13] = "куролес";
		dictRus[14] = "участник";
		dictRus[15] = "обрадоваться";
		dictRus[16] = "бесконечный";
		dictRus[17] = "непонятно";
		dictRus[18] = "структура";
		dictRus[19] = "поглядывать";


		var answer,answer2,answer3,answer4;


function  bs_test() {

	question = 'Решите блок-схему';
	
	var a = getrandom(-10,11);		
	var b = getrandom(-10,11);
	
            var example = document.getElementById("example"),
                ctx     = example.getContext('2d');
            example.width  = 640;
            example.height = 560;
			
			// СТРЕЛКА a->b
			ctx.beginPath();
			ctx.moveTo(450, 40); //начало
			ctx.lineTo(450,	60); //конец 
			ctx.lineTo(445,	55); // конец -5
			ctx.moveTo(450, 60); // конец
			ctx.lineTo(455,	55); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
			
			// А=... 
            ctx.strokeRect(400, 10, 100, 30);
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('a = '+a, 427, 13);
			

			// B=... 
			ctx.strokeRect(400, 60, 100, 30);
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('b = '+b, 427, 63);
			
			// СТРЕЛКА 1 условие
			ctx.beginPath();
			ctx.moveTo(450, 90);
			ctx.lineTo(450,	110);
			ctx.lineTo(445,	105); 
			ctx.moveTo(450, 110);
			ctx.lineTo(455,	105);
			ctx.lineWidth = 2;
			ctx.stroke();
			
			// начало 1 условия
			ctx.beginPath();
			ctx.moveTo(450, 110); // начало
			ctx.lineTo(500,	135); // правый край +50 +25
			ctx.lineTo(450,	160); // низ +0 +50
			ctx.lineTo(400, 135); // левый край -50 +25
			ctx.lineTo(450,	110); // в начало
			ctx.lineWidth = 2;
			ctx.stroke();
			
			// A>B ? 
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('a>b', 435, 123);
			
			// +
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('+', 380, 110);
			
			// -
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('-', 500, 110);
			
			// стрелка true
			ctx.beginPath();
			ctx.moveTo(400, 135); //начало
			ctx.lineTo(350,	135);
			ctx.lineTo(350,	185); //конец 
			ctx.lineTo(345,	180); // конец -5
			ctx.moveTo(350, 185); // конец
			ctx.lineTo(355,	180); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
			
			// b:=a-b
			ctx.strokeRect(300, 185, 100, 30);
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('b = a-b', 317, 190);
			
			//стрелка false
			ctx.beginPath();
			ctx.moveTo(500, 135); //начало
			ctx.lineTo(550,	135);
			ctx.lineTo(550,	185); //конец 
			ctx.lineTo(545,	180); // конец -5
			ctx.moveTo(550, 185); // конец
			ctx.lineTo(555,	180); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
       
			// b:=a+b
			ctx.strokeRect(500, 185, 100, 30);
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('b = a+b', 517, 190);
			
			// Стрелка на новое условие
			ctx.beginPath();
			ctx.moveTo(550, 215); //начало
			ctx.lineTo(550,	265);
			ctx.lineTo(450,	265); // право - середина
			ctx.moveTo(350, 215);
			ctx.lineTo(350,	265);
			ctx.lineTo(450,	265); // лево - середина
			ctx.lineTo(450,	300); //конец 
			ctx.lineTo(445,	295); // конец -5
			ctx.moveTo(450, 300); // конец
			ctx.lineTo(455,	295); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
			// конец 1 блока уловия
			
			
			
			
			// начало 2 условия (1-e+190)
			ctx.beginPath();
			ctx.moveTo(450, 300); // начало
			ctx.lineTo(500,	325); // правый край +50 +25
			ctx.lineTo(450,	350); // низ +0 +50
			ctx.lineTo(400, 325); // левый край -50 +25
			ctx.lineTo(450,	300); // в начало
			ctx.lineWidth = 2;
			ctx.stroke();
			
			// A>B ? 
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('a>b', 435, 313);
			
			// +
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('+', 380, 300);
			
			// -
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('-', 500, 300);
			
			// стрелка true
			ctx.beginPath();
			ctx.moveTo(400, 325); //начало
			ctx.lineTo(350,	325);
			ctx.lineTo(350,	375); //конец 
			ctx.lineTo(345,	370); // конец -5
			ctx.moveTo(350, 375); // конец
			ctx.lineTo(355,	370); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
			
			// a:=b-a
			ctx.strokeRect(300, 375, 100, 30);
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('a = b-a', 317, 380);
			
			//стрелка false
			ctx.beginPath();
			ctx.moveTo(500, 325); //начало
			ctx.lineTo(550,	325);
			ctx.lineTo(550,	375); //конец 
			ctx.lineTo(545,	370); // конец -5
			ctx.moveTo(550, 375); // конец
			ctx.lineTo(555,	370); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
       
			// a:=a+b
			ctx.strokeRect(500, 375, 100, 30);
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('a = a+b', 517, 380);
			
			// Стрелка на новое условие
			ctx.beginPath();
			ctx.moveTo(550, 405); //начало
			ctx.lineTo(550,	455);
			ctx.lineTo(450,	455); // право - середина
			ctx.moveTo(350, 405);
			ctx.lineTo(350,	455);
			ctx.lineTo(450,	455); // лево - середина
			ctx.lineTo(450,	490); //конец 
			ctx.lineTo(445,	485); // конец -5
			ctx.moveTo(450, 490); // конец
			ctx.lineTo(455,	485); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
			// конец 2 блока уловия
			
			// вывод
			ctx.beginPath();
			ctx.moveTo(450, 490); 
			ctx.lineTo(500,	490); 
			ctx.lineTo(490,	520);
			ctx.lineTo(390, 520); 
			ctx.lineTo(400,	490);
			ctx.lineTo(450, 490);			
			ctx.lineWidth = 2;
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText (' a + b = ? ', 398, 493);
			ctx.stroke();
	
	if (a>b) {
		b=a-b;
	}
		else b=a+b;
	if (a>b) {
		a=b-a;
	}
		else a=a+b;

	answer = String(a + b); // Записываем ответ 
	
	answer2 = String( parseInt(answer) + 1 );	
	answer3 = String( parseInt(answer) + 2 );	
	answer4 = String( parseInt(answer) - 1 );
	answer5 = String( parseInt(answer) - 2 );	
		return question;
}




// Функция результат работы программы для теста
function resultProgram_test() {
	p = 9;

    var n = 1800 + getrandom( 12, 99 ), k = 0;
	
	question = "В результате выполнения следующей программы:" +  ' <br><br>  <pre>' +
' var n,k: word;' + '<br>' +
' begin' + '<br>' +
'    n:=' + String( n ) + ';' + '<br>' +
'    k:=0;' + '<br>' +
'    repeat' + '<br>' +
'      k:=10*k+n mod 10;' + '<br>' +
'      n:=n div 10;' + '<br>' +
'    until n<>0;' + '<br>' +
' write(k);' + '<br>' +
' end.' + '</pre><p><br>' +
'будет выведено… <br>';


    k = ( 10 * k + n ) % 10; 
    n = Math.floor( n / 10 ); 


    while ( n == 0 ) {
      k = ( 10 * k+n ) % 10; 
      n = Math.floor( n / 10 );
    }
	
	answer = String( k );
	answer2 = String( parseInt(answer) + 1 );	
	answer3 = String( parseInt(answer) + 2 );	
	answer4 = String( parseInt(answer) - 1 );
	return question;

	}

// Функция результат работы программы для теста
function resultProgramSI_test() {
	
var a = getrandom( -9, 9 ), b = getrandom( -9, 9 ), c; 
 c = a > b ? b + a : b - a; 
	answer = c; 
	
	question = "<code>Тернарный оператор.</code> В результате выполнения следующего фрагмента кода:" +  ' <br><br>  <pre>' +
' int a = '+String( a ) +', b = ' + String( b )+', c; ' + '<br>' +
' c = a > b ? b + a : b - a; ' +  '</pre><p>' +
'переменная <code>с</code> равна… <br>';

	answer = String( answer );
	answer2 = String( parseInt(answer) + 1 );	
	answer3 = String( parseInt(answer) + 2 );	
	answer4 = String( parseInt(answer) - 1 );
	return question;
	}

// Функция результат работы программы для теста
function resultProgramSI_test2() {
	
var a = getrandom( -9, 9 ), b = getrandom( -9, 9 ), x; 
     if (a > -2 && b < 4)
            {
                x = a+1;
            }
            else
                if (a > -2 || b < 4)
            {
                x = a-1;
            }
            else x = a;
	answer = x; 
	
	question = "В результате выполнения следующего фрагмента кода:" +  ' <br>  <pre>' +
		' int a = '+String( a ) +', b = ' + String( b )+', x; ' + '<br>' +
		' if ( a > -2 && b < 4 ) <br>' +
		'  {  <br>' +
        '     x = a + 1; <br>' +
        '  } <br>' +
		' else <br>' + 
		' if ( a > -2 || b < 4 ) <br>' +
		'  { <br> ' +
		'     x = a - 1;<br>' +
		'  } <br>' + 
		' else x = a; </pre><p>' +
'переменная <code>x</code> равна… <br>';
	answer = String( answer );
	answer2 = String( parseInt(answer) + 1 );	
	answer3 = String( parseInt(answer) + 2 );	
	answer4 = String( parseInt(answer) - 1 );
	return question;
	}

// Функция результат работы программы для теста
function href_test() {
	
	var k = getrandom( 0, dictionary.length - 1 );  var word =  dictionary[k]; // выбираем случайное слово из словаря
	var word2 =  word + '.ru';
	answer = '&lt;a href="' + word2 + '"&gt; ' + word + ' &lt;/a &gt;'; 
	answer2 = '&lt;a href="' + word + '"&gt; ' + word2 + ' &lt;/a &gt;'; 	
	answer3 = '&lt;a link="' + word2 + '"&gt; ' + word + ' &lt;/a &gt;'; 
	answer4 = '&lt;a src="' + word2 + '"&gt; ' + word + ' &lt;/a &gt;'; 
	
	question = "Правильная ссылка на сайт " + word2 + ' может иметь вид:';

	return question;
}

// Функция результат работы программы для теста
function src_test() {
	
	var k = getrandom( 0, dictionary.length - 1 );  var word =  dictionary[k]; // выбираем случайное слово из словаря
	var word2 =  word + '.jpg';
	answer = '&lt;img src="' + word2 + '" width="120" height="80" alt="' + word + '"&gt;'; 
	answer2 = '&lt;img href="' + word + '" width="120" height="80" alt="' + word2 + '"&gt;'; 	
	answer3 = '&lt;img link="' + word2 + '" width="120" height="80" alt="' + word + '"&gt;'; 
	answer4 = '&lt;img href="' + word2 + '" width="120" height="80" alt="' + word + '"&gt;'; 
	
	question = "Правильная ссылка на картинку " + word2 + ' может иметь вид:';

	return question;
}

var i = 0;

var  test = new Array(); var podskaska = new Array(); var testType = new Array(); 
var antworten = new Array();

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 var a = getrandom( 5, 9 ), b = getrandom( 3, 7 ), c = getrandom( 12, 16 ); 
 question =  "Найти результат: <pre> int a = " + String( a ) + ", b = " + String( b ) + ", c = " + String( c ) +  "; <br>     a += b; c -= a; c++; <br> c = ? </pre>";
 
 a += b; c -= a; c++; 
 answer = c;

	answer = String( answer );
	var variants1 = random(1,4,2); var variants2 = random(1,4,2);
	answer2 = String( parseInt(answer) + parseInt(variants1[0]) );	
	answer3 = String( parseInt(answer) + parseInt( variants1[1]) );	
	answer4 = String( parseInt(answer) - parseInt(variants2[0]) );	
	answer5 = String( parseInt(answer) - parseInt(variants2[1]) );		
 test[i][0] = question;  
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 test[i][5] =  answer5;
 i++;
 
 
 
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 var a = getrandom( 2, 4 ), b = getrandom( 3, 5 ), c = getrandom( 52, 76 ); 
 question =  "Найти результат: <pre> int a = " + String( a ) + ", b = " + String( b ) + ", c = " + String( c ) +  "; <br>     a *= b; c /= a; c--; <br> c = ? </pre>";
 
 a *= b; c /=a; c--;
 answer = Math.trunc( c );

	answer = String( answer );
	var variants1 = random(1,4,2); var variants2 = random(1,4,2);
	answer2 = String( parseInt(answer) + parseInt(variants1[0]) );	
	answer3 = String( parseInt(answer) + parseInt( variants1[1]) );	
	answer4 = String( parseInt(answer) - parseInt(variants2[0]) );	
	answer5 = String( parseInt(answer) - parseInt(variants2[1]) );		
 test[i][0] = question;  
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 test[i][5] =  answer5;
 
 
i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 var a = getrandom( 32, 75 ), b = getrandom( 1, 3 ), c ; 
 question =  "Найти результат: <pre> int a = " + String( a ) + ", b = " + String( b ) + ", c; <br>     c = a % b; <br> c = ? </pre>";
 
 c = a % b;
 answer = c;

	answer = String( answer );
	var variants1 = random(1,4,2); var variants2 = random(1,4,2);
	answer2 = String( parseInt(answer) + parseInt(variants1[0]) );	
	answer3 = String( parseInt(answer) + parseInt( variants1[1]) );	
	answer4 = String( parseInt(answer) - parseInt(variants2[0]) );	
	answer5 = String( parseInt(answer) - parseInt(variants2[1]) );		
 test[i][0] = question;  
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 test[i][5] =  answer5;
  i++;
 
 
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 var a = getrandom( 5, 9 );  b = getrandom( 2, 4 );
 
 question =  'Найти результат: <pre> int i = 0; int a = ' + String( a ) + '; <br>   while ( i < 5 ) { <br>     if ( i != ' + b + ' ) a = a + i; <br>     i++; <br>   }  <br> a = ? </pre>';
 var k = 0;
    while ( k < 5 ) { 
     if ( k != b ) a = a + k; 
     k++; 
   }  
 
 answer = a;

	answer = String( answer );
	var variants1 = random(1,4,2); var variants2 = random(1,4,2);
	answer2 = String( parseInt(answer) + parseInt(variants1[0]) );	
	answer3 = String( parseInt(answer) + parseInt( variants1[1]) );	
	answer4 = String( parseInt(answer) - parseInt(variants2[0]) );	
	answer5 = String( parseInt(answer) - parseInt(variants2[1]) );		
 test[i][0] = question;  
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 test[i][5] =  answer5;
  i++;
 
 
 
   test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 var a = getrandom( 5, 9 ); 
 
 question =  "Найти результат: <pre> int a = " + String( a ) + "; <br>   for ( int i = 1; i < 5; i++ ) { <br>     a = a + i; <br>   }  <br> a = ? </pre>";
 
 for (var k=0; k<5; k++) {
	a = a + k;	
 }
 
 answer = a;

	answer = String( answer );
	var variants1 = random(1,4,2); var variants2 = random(1,4,2);
	answer2 = String( parseInt(answer) + parseInt(variants1[0]) );	
	answer3 = String( parseInt(answer) + parseInt( variants1[1]) );	
	answer4 = String( parseInt(answer) - parseInt(variants2[0]) );	
	answer5 = String( parseInt(answer) - parseInt(variants2[1]) );		
 test[i][0] = question;  
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 test[i][5] =  answer5;
  i++;
 
 
 
  test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 var a = getrandom( 5, 9 ), b = getrandom( 2, 4 ); 
 
 question =  "Найти результат: <pre> int a = " + String( a ) + ", b = " + String( b ) + "; <br>   for ( int i = 1; i < 5; i++ ) { <br>     if (i == b) break; <br>     a = a + i; <br>   }  <br> a = ? </pre>";
 
 for (var k=0; k<5; k++) {
	if (k == b) break;
	a = a + k;	
 }
 
 answer = a;

	answer = String( answer );
	var variants1 = random(1,4,2); var variants2 = random(1,4,2);
	answer2 = String( parseInt(answer) + parseInt(variants1[0]) );	
	answer3 = String( parseInt(answer) + parseInt( variants1[1]) );	
	answer4 = String( parseInt(answer) - parseInt(variants2[0]) );	
	answer5 = String( parseInt(answer) - parseInt(variants2[1]) );		
 test[i][0] = question;  
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 test[i][5] =  answer5;
  i++;
 
 
  test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 var a = getrandom( 5, 9 ), b = getrandom( 3, 5 ); 
 
 question =  "Найти результат: <pre> int a = " + String( a ) + ", b = " + String( b ) + "; <br>   for ( int i = 1; i < 5; i++ ) { <br>     if (i == b) continue; <br>     a = a + i; <br>   }  <br> a = ? </pre>";
 
 for (var k=0; k<5; k++) {
	if (k == b) continue;
	a = a + k;	
 }
 
 answer = a;

	answer = String( answer );
	var variants1 = random(1,4,2); var variants2 = random(1,4,2);
	answer2 = String( parseInt(answer) + parseInt(variants1[0]) );	
	answer3 = String( parseInt(answer) + parseInt( variants1[1]) );	
	answer4 = String( parseInt(answer) - parseInt(variants2[0]) );	
	answer5 = String( parseInt(answer) - parseInt(variants2[1]) );		
 test[i][0] = question;  
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 test[i][5] =  answer5;
  i++;
  
  
  
   test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 var a = getrandom( 101, 136 ); 
 
 question =  'Найти результат: <pre> int a = ' + a + ' % 8; String sssr = ""; <br> '
   + '   switch (a) { <br>'
   + '       case 1: sssr = "Понедельник"; break; <br>'
   + '       case 2: sssr = "Вторник"; break; <br>'
   + '       case 3: sssr = "Среда"; break; <br>'
   + '       case 4: sssr = "Четверг"; break; <br>'
   + '       case 5: sssr = "Пятница"; break; <br>'
   + '       case 6: sssr = "Суббота"; break; <br>'
   + '       case 7: sssr = "Воскресенье"; break; <br>'
   + '       default : sssr = "Ошибка"; break; <br>'
   + '    }'
   + '<br> sssr = ? </pre>';
 
  var sssr=""; b = a % 8;
    switch (b) { 
       case 1: sssr = "Понедельник"; break; 
       case 2: sssr = "Вторник"; break; 
       case 3: sssr = "Среда"; break; 
       case 4: sssr = "Четверг"; break; 
       case 5: sssr = "Пятница"; break; 
       case 6: sssr = "Суббота"; break; 
       case 7: sssr = "Воскресенье"; break; 
       default : sssr = "Ошибка"; break; 
   }
 
 var arrDay = [ "Ошибка", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ];
 answer = sssr;

	answer = String( answer );	
	
	 test[i][0] = question;  
	 test[i][1] = answer;
	 test[i][2] =  arrDay[ ( a+1) % 8 ];
	 test[i][3] =  arrDay[ ( a+2) % 8 ];
	 test[i][4] =  arrDay[ ( a-1) % 8 ];
	 test[i][5] =  arrDay[ ( a-2) % 8 ];



 
i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 question = resultProgramSI_test();
	answer = String( answer );
	var variants1 = random(1,4,2); var variants2 = random(1,4,2);
	answer2 = String( parseInt(answer) + parseInt(variants1[0]) );	
	answer3 = String( parseInt(answer) + parseInt( variants1[1]) );	
	answer4 = String( parseInt(answer) - parseInt(variants2[0]) );	
	answer5 = String( parseInt(answer) - parseInt(variants2[1]) );		
 test[i][0] = question;  
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 test[i][5] =  answer5;

i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 question = resultProgramSI_test2();
	answer = String( answer );
	var variants1 = random(1,4,2); var variants2 = random(1,4,2);
	answer2 = String( parseInt(answer) + parseInt(variants1[0]) );	
	answer3 = String( parseInt(answer) + parseInt( variants1[1]) );	
	answer4 = String( parseInt(answer) - parseInt(variants2[0]) );	
	answer5 = String( parseInt(answer) - parseInt(variants2[1]) );		
 test[i][0] = question;  
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 test[i][5] =  answer5;

 
  i++;
  test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
  
  var sssr = dictRus[ getrandom( 0, dictRus.length - 1 ) ]; var bias = getrandom( 0, 2 );
  var rf = sssr.substring(0+bias,2+bias); var arrp = random( 0, 4, 5 );
  var inString = getrandom( 0, 1 );
  if ( inString == 1 ) {
		rf = rf + sssr.substring( 2+bias, 3+bias );
	}
	else rf = rf + sssr.substring( 3+bias, 4+bias );
 
 question =  'Найти результат: <pre> char c; string sssr = "'+sssr+'";<br>   if (sssr.Contains("' + rf + '")) { c = sssr['+arrp[0]+']; }<br>      else { c = sssr['+arrp[1]+']; }<br> c = ?</pre>';
   if (sssr.indexOf(rf) > -1) {
		answer = sssr.charAt( arrp[0] ); answer2 = sssr.charAt( arrp[1] );
		}
		else { answer = sssr.charAt( arrp[1] ); answer2 = sssr.charAt( arrp[0] ); }
		answer3 = sssr.charAt( arrp[2] );
		answer4 = sssr.charAt( arrp[3] );		
		answer5 = sssr.charAt( arrp[4] );		

 test[i][0] = question; 
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3; 
 test[i][4] =  answer4; 
 test[i][5] =  answer5;
  
  
  i++;
  test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
  
  var sssr = dictRus[ getrandom( 0, dictRus.length - 1 ) ]; var bias = getrandom( 0, 4 );
  var rf = sssr.substring(0+bias,3+bias); //var arrp = random( 0, 4, 5 );
  var inString = getrandom( 0, 3 );
  if ( inString > 0 ) {
		rf = rf + sssr.substring( 3+bias, 4+bias );
	}
	else rf = rf + sssr.substring( 4+bias, 5+bias );
 
 question =  'Найти результат: <pre> int pos; string sssr = "'+sssr+'";<br>   pos = sssr.IndexOf( "' + rf + '" ); <br> pos = ?</pre>';
   var pos = sssr.indexOf(rf);
   	answer = String( pos );
	var variants1 = random(1,4,2); var variants2 = random(1,2,2);
	answer2 = String( parseInt(answer) + parseInt(variants1[0]) );	
	answer3 = String( parseInt(answer) + parseInt( variants1[1]) );	
	answer4 = String( parseInt(answer) - parseInt(variants2[0]) );	
	answer5 = String( parseInt(answer) - parseInt(variants2[1]) );		
 test[i][0] = question;  
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 test[i][5] =  answer5;
  
  
  i++;
  test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
  
  var sssr = dictRus[ getrandom( 0, dictRus.length - 1 ) ]; 
  var arrp = random( 0, 4, 5 );
  var pos = arrp[0];
  var count = getrandom( 3, 5 );
  var rf = sssr.substr(pos,count);

 
 question =  'Найти результат: <pre> string sssr = "'+sssr+'";<br>'+
 '   string rf = sssr.Substring( ' + pos + ', ' + count + ' ); <br> rf = ?</pre>';
   

   	answer = rf;		
 test[i][0] = question;  
 test[i][1] = answer;
 test[i][2] =  sssr.substr(arrp[1],count);
 test[i][3] =  sssr.substr(arrp[2],count);
 test[i][4] =  sssr.substr(arrp[3],count);
 test[i][5] =  sssr.substr(arrp[4],count);
 
  
  i++;
  
var valRnd = getrandom(0,1);
if ( valRnd == 0 ) { 
	 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
	 test[i][0] = href_test();
	 test[i][1] = answer;
	 test[i][2] =  answer2;
	 test[i][3] =  answer3; 
	 test[i][4] =  answer4; 
}
else {
	 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
	 test[i][0] = src_test();
	 test[i][1] = answer;
	 test[i][2] =  answer2;
	 test[i][3] =  answer3; 
	 test[i][4] =  answer4;  
}

i++;

var valRnd = getrandom(0,1);
if ( valRnd == 0 ) { 
	 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
	 test[i][0] = 'Новый абзац в HTML создается с помощью тега:';
	 test[i][1] = "&lt; p &gt;";
	 test[i][2] = "&lt; br &gt;";
	 test[i][3] = "&lt; hr &gt;";
	 test[i][4] = "&lt; pre &gt;";
 }
 else {
  
	  test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
	 test[i][0] = 'Перенос строки в HTML создается с помощью тега:';
	 test[i][1] = "&lt; br &gt;";
	 test[i][2] = "&lt; p &gt;";
	 test[i][3] = "&lt; hr &gt;";
	 test[i][4] = "&lt; pre &gt;";
 }
 i++;
  
  
  var valRnd = getrandom(0,1);
if ( valRnd == 0 ) { 
	 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
	 test[i][0] = 'Таблица в HTML создается с помощью тега:';
	 test[i][1] = "&lt; table &gt;";
	 test[i][2] = "&lt; td &gt;";
	 test[i][3] = "&lt; tr &gt;";
	 test[i][4] = "&lt; pre &gt;";
}
 else {
  
	 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
	 test[i][0] = 'Строка таблицы в HTML создается с помощью тега:';
	 test[i][1] = "&lt; tr &gt;";
	 test[i][2] = "&lt; td &gt;";
	 test[i][3] = "&lt; th &gt;";
	 test[i][4] = "&lt; pre &gt;";
 }
 i++;
  
var valRnd = getrandom(0,1);
if ( valRnd == 0 ) { 
	 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
	 test[i][0] = 'Ячейка в таблице в HTML создается с помощью тега:';
	 test[i][1] = "&lt; td &gt; или &lt; th &gt;";
	 test[i][2] = "&lt; td &gt;";
	 test[i][3] = "&lt; tr &gt;";
	 test[i][4] = "&lt; pre &gt;";
}
else {
 
	  test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
	 test[i][0] = 'С помощью тега &lt; pre &gt; в HTML:';
	 test[i][1] = "текст отображается также, как набирался (с учетом всех пробелов)";
	 test[i][2] = "создается перенос строки";
	 test[i][3] = "создается новый абзац";
	 test[i][4] = "создается мигающий текст";
 }
 i++;
 
document.write( ' <canvas id="example" width="0" height="0">Обновите браузер</canvas> ' );
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = bs_test();
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 test[i][5] =  answer5;


 
 
 
var sssr = "<p>";
for ( var i = 0; i < test.length; i++ ) {

 		sssr = sssr + '<b>' + String( i + 1 ) + '. ' + test[i][0] + '</b><p>';
		var arr = random( 1, test[i].length - 1, test[i].length - 1 );
		var rightItem = ''; 
		
	 for ( var j = 1; j < test[i].length; j++ ) {
		
		sssr = sssr + '<p style = "margin-left: 24px;"><input id="test' + String( i ) + 
			'" name="test' + String( i ) + '" type="' + testType[i] + '" value="value' + 
			String( j ) +'">' +  '<span id = "span' + String( i ) + '-'+ String( j ) + '">' + String( test[i][ arr[j-1] ] ) + '</span>' + '<p/>';
			
			if ( arr[j-1] == 1 ) { rightItem = String(rightItem) + String(j); }
			if ( testType[i] == 'checkbox' ) { if ( arr[j-1] == 2 ) { rightItem = String(rightItem) + String(j); } }  
	 
	 
	 }
sssr = sssr + '<span id = "podskaska' + String(i) + '"></span><p>\n';

antworten[i] = rightItem;	 
//sssr = sssr + '<input type = "button" id = "button' + String(i) + '" onclick="proverka(' + String(i) + ', ' 
//	+ rightItem + ');" value = "Проверить"> </input> <br> <br>';
 
}
 
 
document.getElementById( 'vopros' ).innerHTML = sssr;

document.write( '<p><input id="super" type = "button" onclick="proverka();" value = "Проверить"> </input> <br> <br>' );

document.write( '<p><input id="result" type = "button" value = "Результат"> </input> <br>' );



