 
//делаем глобальными все переменные, с которыми будем работать в других функциях
var container, camera, scene, renderer, light; 
var container2, camera2, scene2, renderer2, light2; 
var adj1, inc1; var adj2, inc2, vector_exit; var tru_table, Logic;
var adj3, perevoski;
var arr_operation, arr_operation2, operand, operand2;
 	
	var rows_count = 6;
	var columns_count = 6;
	var edges_count = 7;	// количество ребер графа
    var td_size = 30;	
				
window.onload =
 function() 
{

	arr_operation = [ '\\vee', '\\Rightarrow', '\\wedge', '\\Leftrightarrow' ];
	arr_operation2 = [ 'Or', 'Imp', 'And', 'Tanta' ];
	var mas = random(0,3,3); // массив из трех случайных операций
	
	operand = [ ' x', ' y', ' \\overline{x}', ' \\overline{y}'];
	operand2 = [ '(x)', '(y)', 'Not(x)', 'Not(y)'];	
	mas_op = random( 0, 3, 4 ); // массив из четырех случайных операндов
	
	var arr_formula_header = [];
		arr_formula_header[0] = 'x';
		arr_formula_header[1] = 'y';		
		arr_formula_header[2] = '\\overline{x}'
		arr_formula_header[3] = '\\overline{y}'		
		arr_formula_header[4] = operand[mas_op[0]] + arr_operation[mas[0]] + operand[mas_op[1]];
		arr_formula_header[5] = operand[mas_op[2]] + arr_operation[mas[2]] + operand[mas_op[3]];
		arr_formula_header[6] = 'f(x,y)';		
		
	var formula = 'f(x,y) = (' + operand[mas_op[0]] + arr_operation[mas[0]] + operand[mas_op[1]] + ')'+ arr_operation[mas[1]] + 
				  '(' + operand[mas_op[2]] + arr_operation[mas[2]] + operand[mas_op[3]] + ')'; //alert( formula );
	
	var arr_formula_value = [];	
	arr_formula_value[0] = arr_operation2[mas[0]] + '(' + operand2[mas_op[0]] + ', ' + operand2[mas_op[1]] + ')';
	
	arr_formula_value[1] = arr_operation2[mas[2]] + '(' + operand2[mas_op[2]] + ', ' + operand2[mas_op[3]] + ')'; 
				  
	arr_formula_value[2] = arr_operation2[mas[1]] + 
								'(' + arr_formula_value[0] + ', ' + arr_formula_value[1] + ')'; 					  
				  
	document.getElementById('formula').innerHTML  = formula;

	
	tru_table = new matroid( 'tru_table', 'Таблица истинности', 4, 7, 'true', 'table02', ['?', 0, 1] ); 
	                 // название (!) переменной, заголовок
					 // кол-во строк, кол-во столбцов, 
					 // префикс ID ячеек, ID поля, где будет рисоваться матрица
					 // перечень возможных значений ячеек

//	Logic = new logic();
  x_values = [ 0,0,1,1 ]; y_values = [ 0,1,0,1 ]; 
	for (var i=0; i<4; ++i)
		{     	
			tru_table.matrix[i][0] = x_values[i] ;
			tru_table.matrix[i][1] = y_values[i] ;	
			tru_table.matrix[i][2] = Logic.Not( x_values[i] );
			tru_table.matrix[i][3] = Logic.Not( y_values[i] );
			
			tru_table.matrix_user[i][0] = tru_table.matrix[i][0] ;
			tru_table.matrix_user[i][1] = tru_table.matrix[i][1] ;	
		}
	
	
	var sudoku = "";

    	var x0 = 10, y0 = 135; var td_size2 = 80; 
	for (var j=0; j< 7 ; ++j)
				{ 	   
					sudoku = sudoku +'<div style="position: absolute; left: '+ String(x0 +td_size2*j) +'px; top: '+ String(y0 - 40) +'px;' +
					'width = ' + String(td_size2) + 'px; text-align:center;" class="tod2" > '; 
					sudoku = sudoku + '<span CLASS="math">' +  arr_formula_header[j] + '</span>';
					sudoku = sudoku + '</div>\n'; 
				}
	document.getElementById('table0').innerHTML  = sudoku;
		
	
	var zFunc = Parser.parse( arr_formula_value[0] ); //alert( arr_formula_value[0] );
		for (var i=0; i<4; ++i)
			{  
				var m = zFunc.evaluate({ x: x_values[i] , y: y_values[i] }); //alert(m);			
				tru_table.matrix[i][4] = m;
			}
	var zFunc = Parser.parse( arr_formula_value[1] ); //alert( arr_formula_value[1] );
		for (var i=0; i<4; ++i)
			{  
				var m = zFunc.evaluate({ x: x_values[i] , y: y_values[i] }); //alert(m);			
				tru_table.matrix[i][5] = m;
			}			
		//alert( arr_formula_value[2] );
	var zFunc = Parser.parse( arr_formula_value[2] ); 
		for (var i=0; i<4; ++i)
			{  
				var m = zFunc.evaluate({ x: x_values[i] , y: y_values[i] }); //alert(m);			
				tru_table.matrix[i][6] = m;
			}			
			
		
	tru_table.show_matrix( x0, y0, false );
	
	
			for (var i=0; i<4; ++i)
			{        
			for (var j=0; j<7; ++j)
				{ 	   
					var _id = tru_table.id_td_prefix + String(i)+ ','+ +String(j);
					document.getElementById(_id).style.left = String( x0+ td_size2*j) +'px'; 					
					document.getElementById(_id).style.width = String(td_size2) + 'px'; 
					if (j<2) 
					{ 
						document.getElementById(_id).onclick = ''; 
						var _id = tru_table.id_td_prefix + String(i)+ ','+ +String(j);
					    document.getElementById(_id).innerHTML = String(  tru_table.matrix[i][j] ); 	
					}
				}
			}
			
	var _id = tru_table.id_button_verify;
	document.getElementById(_id).style.left = String( x0+ td_size2*(j+1)) +'px'; 		
	var _id = tru_table.id_span_info;
	document.getElementById(_id).style.left = String( x0+ td_size2*(j+1)) +'px'; 
	var _id = tru_table.id_title;
	document.getElementById(_id).style.top = String( y0 - 68 ) +'px'; 

	 
	 var vector = []; vector[0] = []; vector[1] = []; vector[2] = [];
		for (var i=0; i<4; ++i)
			{  	 
				vector[0][i] = tru_table.matrix[i][6];
				vector[1][i] = tru_table.matrix[i][6];				
				vector[2][i] = tru_table.matrix[i][6];				
			}
			
	var mas = random(0,3,4); // массив из трех случайных операций
		vector[1][mas[0]] = Logic.Not( vector[1][mas[0]] );
		for (var i=1; i<4; ++i)
			{
				var a = getrandom(0, 1) ; 
				if (a==0) {vector[1][mas[i]] = Logic.Not( vector[1][mas[i]] ); }			
			}
			
	vector[2][mas[1]] = Logic.Not( vector[2][mas[1]] );		
		for (var i=2; i<4; ++i)
			{
				var a = getrandom(0, 1) ; 
				if (a==0) {vector[2][mas[i]] = Logic.Not( vector[2][mas[i]] ); }			
			}
	
	var sssr = '';
	var mas = random(0,2,3); // массив из трех случайных операций
		for (var i=0; i<3; ++i)
			{
				sssr = sssr + '<input name="sdnf_variant" type="radio" value="' + mas[i] + '"> <span CLASS="math">'  + sdnf_eval( vector[mas[i]]) + '</span> <br>';
			}

	document.getElementById('sdnf').innerHTML = sssr +
	'<div style = "position: absolute; top: 100px; left: 505px; font-size: 20px;">' +
	'<a href="javascript: sdnfverify();" class="gamebutton gamebutton-orange"><span>Проверить</span></a> </div>\n' +
	'<div id = "sdnf_info"style = "position: absolute; top: 130px; left: 505px; font-size: 20px;">' + ' Инфо </div>\n';	
	
	var sssr = '';
	var mas = random(0,2,3); // массив из трех случайных операций
		for (var i=0; i<3; ++i)
			{
				sssr = sssr + '<input name="sknf_variant" type="radio" value="' + mas[i] + '"> <span CLASS="math">'  + sknf_eval( vector[mas[i]]) + '</span> <br>';
			}

		document.getElementById('sknf').innerHTML = sssr;	
		
		jsMath.Process(document);
	
	
 		init(); 
 		init2();
		
		animate();	
}


function sdnfverify()
{
   var inputs = document.getElementsByName("sdnf_variant");
   var sel1 = -1;
	for (var i = 0; i<inputs.length; i++)
		{
			if (inputs[i].checked) {  sel1 = inputs[i].value; break;}
		}	
			
	if (sel1==-1) 	{ add_message("Вы не выбрали нужную СДНФ!", "sdnf_info", "red"); return; }
	
   var inputs = document.getElementsByName("sknf_variant");
   var sel2 = -1;
	for (var i = 0; i<inputs.length; i++)
		{
			if (inputs[i].checked) {  sel2 = inputs[i].value; break;}
		}	
			
	if (sel2==-1) { add_message("Вы не выбрали нужную СКНФ!", "sdnf_info", "red"); return; }	
	
	//console.log( parseInt(sel1) );
	//console.log( parseInt(sel2) );
	if (sel1==0 && sel2==0) { add_message("СДНФ и СКНФ выбраны верно!", "sdnf_info", "green"); }
			else { add_message("СДНФ и СКНФ выбраны неверно!", "sdnf_info", "red"); }
		
}

function sdnf_eval( vector )
{
	var sdnf; var sdnf_text = ''; var first = true;
		for (var i=0; i<4; ++i)
			{   
				if ( vector[i] == 1) 
					{ 
						if (first == true) { sdnf = ''; first = false;} else { sdnf = arr_operation[0] + ' '; }
						sdnf = sdnf + ' (' + tru_table.matrix[i][0] + ' ' + arr_operation[2] + ' ';
						sdnf = sdnf.replace(new RegExp('0', 'g'), '\\overline{x}');	
						sdnf = sdnf.replace(new RegExp('1', 'g'), 'x');		
						var sssr = tru_table.matrix[i][1] + ') '; 
						sssr = sssr.replace(new RegExp('0', 'g'), '\\overline{y}');	
						sssr = sssr.replace(new RegExp('1', 'g'), 'y');						
						
						sdnf = sdnf + sssr;						
						//console.log( sdnf[i] );
					}
					else sdnf = ''; 
				sdnf_text = sdnf_text +  sdnf ;
			}
		if (sdnf_text.length<3) {sdnf_text = 'отсутствует';}	
		return sdnf_text;
}


function sknf_eval( vector )
{
	var sknf; var sknf_text = ''; var first = true;
		for (var i=0; i<4; ++i)
			{   
				if ( vector[i] == 0) 
					{ 
						if (first == true) { sknf = ''; first = false;} else { sknf = arr_operation[2] + ' '; }
						sknf = sknf + ' (' + tru_table.matrix[i][0] + ' ' + arr_operation[0] + ' ';
						sknf = sknf.replace(new RegExp('1', 'g'), '\\overline{x}');	
						sknf = sknf.replace(new RegExp('0', 'g'), 'x');		
						var sssr = tru_table.matrix[i][1] + ') '; 
						sssr = sssr.replace(new RegExp('1', 'g'), '\\overline{y}');	
						sssr = sssr.replace(new RegExp('0', 'g'), 'y');						
						
						sknf = sknf + sssr;						
						//console.log( sknf[i] );
					}
					else sknf = ''; 
				sknf_text = sknf_text +  sknf ;
			}
		if (sknf_text.length<3) {sknf_text = 'отсутствует';}	
		return sknf_text;
}

function init()
{			
		//создаем сцену
	scene = new THREE.Scene(); 
				
	AddCamera( 0, 0, 140 );  // добавляем камеру			
	AddLight( 0, 0, 200 );  //устанавливаем белый свет 

		//рендерер 
	try
       {
          renderer=new THREE.WebGLRenderer( { antialias: true } ); 
       }
	catch(err)
      {
		alert('В вашем браузере отсутствует поддержка WebGL!');
       try
             {
				renderer=new THREE.CanvasRenderer; 
	            }
				catch(err)
					{	
				alert('Пожалуйста, установите новый браузер с поддержкой WebGL!');
              }
     }

	 	//устанавливаем цвет фона
	renderer.setClearColor( 0xfffff0 );
		//устанавливаем ему размеры экрана
	renderer.setSize( 500, 500 );
		//и добавляем в наш созданный элемент
	container = document.getElementById('MyWebGLApp');
	container.appendChild( renderer.domElement );
	
	adj1 = new matroid( 'adj1', 'Матрица смежности', rows_count, columns_count, 'adjfirst', 'table1', ['?', 0, 1] ); 
	                 // название (!) переменной, заголовок
					 // кол-во строк, кол-во столбцов, 
					 // префикс ID ячеек, ID поля, где будет рисоваться матрица
					 // перечень возможных значений ячеек
	
	inc1 = new matroid( 'inc1', 'Матрица инцидентности', rows_count, edges_count, 'incfirst', 'table12', ['?', 0, 1] ); 

	
	
var geometry = new THREE.Geometry;
var material = new THREE.LineBasicMaterial( { color: 0xcc0000 } );



for (var i=0; i< rows_count; i++)
{
var a = new THREE.Vector3(
      -45*Math.cos( Math.PI/3*i ) + getrandom(-5,5), 45*Math.sin( Math.PI/3*i )+ getrandom(-5,5), 0 );
geometry.vertices.push( a ); 

var Circmaterial = new THREE.MeshBasicMaterial( {color: 0x000000} );
var Circgeometry = new THREE.CircleGeometry(1, 32, 0, 2*Math.PI );	
var krugok = new THREE.Mesh(Circgeometry, Circmaterial);
krugok.position = a;
scene.add( krugok );

		var TextSprite = createTextSprite( String( i+1 ), 'Bold 200px Arial', '#0000FF' );
		var x = geometry.vertices[i].x;
		var y = geometry.vertices[i].y;
		var z = geometry.vertices[i].z;
		TextSprite.position.set( 1.1*x, 1.1*y, 1.1*z );		
		scene.add( TextSprite );
	
}




var material = new THREE.LineBasicMaterial( { color: 0x1a4780 } );
var line_count = 0; var line_number = 1;
var mas = random( 1, 15, edges_count );
var k = 1/6;

for (var i=0; i< rows_count; i++)
{
for (var j=i+1; j< columns_count; j++)
{
	line_count++;
	if (inmas( line_count, mas ) )
		{
			var a = geometry.vertices[i];
			var b = geometry.vertices[j];
			Line( a, b, material, scene ); 
			
			adj1.matrix[i][j] = 1; adj1.matrix[j][i] = 1;

			inc1.matrix[i][line_number - 1] = 1; // ребро line_number инцидентно вершине i (нумерация с нуля)
			inc1.matrix[j][line_number - 1] = 1; // ребро line_number инцидентно вершине j (нумерация с нуля)
			
			var R = a.distanceTo( b );  k = 20/ R ;
			
			var x = ( a.x + k*b.x ) / (1 + k);
			var y = ( a.y + k*b.y ) / (1 + k);
			var z = ( a.z + k*b.z ) / (1 + k);
			
			var TextSprite = createTextSprite( String( line_number ), 'Bold 192px Arial', '#000000' );
			TextSprite.position.set( 1*x, 1*y, 1*z );		
			scene.add( TextSprite );
			line_number++;
			
			
		}
}


 
	adj1.show_matrix( 10, 52 );
	inc1.show_matrix( 10, 280 );
}

//alert( line_count );


}
	
// класс для проверки правильности заполения матриц
  function matroid( name, title, row, col, id_td_prefix, id_span_show, ar_values ) {
		this.matrix = new Array(row); 
		this.matrix_user = new Array(row); 
		this.ar_values = ar_values; 	
		this.name = name; 		
		this.title = title;	
		this.error_count = 0;
		
	for (var i=0; i<row; ++i) 
			{  
				this.matrix[i]=new Array( col ) ;
				this.matrix_user[i]= new Array( col ) ;						
			}
			
    for (i=0; i<row; ++i) 
        {  
  		    for (j=0; j<col; ++j)
		        {	   
				   this.matrix_user[i][j] = '?'; // неизвестно
				   this.matrix[i][j]= 0;  				   
				}		
		}  			
			

		this.row = row; 	
		this.col = this.matrix[0].length; 
		this.id_td_prefix = id_td_prefix;
		this.id_span_show = id_span_show;
		var random_value = getrandom( 1, 100000 );
		this.id_button_verify = 'id_button_verify' + String(random_value);		
		this.id_title = 'id_title' + String(random_value);
		this.id_span_info = 'id_span_info' + String(random_value);
		
	this.show_matrix = function( x0, y0, visible, tolko_matrica, readonly )
		{
			if (visible == undefined) { visible = false;}
			if (tolko_matrica == undefined) { tolko_matrica = false;}	
			if (readonly == undefined) { readonly = false;}				
		var sudoku = "";
		sudoku = sudoku +'<div id="' + this.id_title + '" style = "position: absolute; top: '+ String(y0-30) + 'px; left: '+ String(x0) +'px; font-size: 20px;">' +
			this.title + '</div>\n';
			
		for (var i=0; i<parseInt(row); ++i)
			{        
			for (var j=0; j<parseInt(col); ++j)
				{ 	   
					sudoku = sudoku +'<div style="left: '+ String(x0+td_size*j) +'px; top: '+ String(y0+td_size*i) +'px; ' ;
					sudoku = sudoku +'" ';
					sudoku = sudoku + 'id="'+ this.id_td_prefix + String(i)+ ','+ +String(j)+'"';
					if (readonly == false) {sudoku = sudoku + '  onClick="' + this.name + '.zvet('+i+','+j+');" ';}
					sudoku = sudoku + ' class="tod" ';
					sudoku = sudoku + '> '; 
					if (visible==true) { sudoku = sudoku + String( this.matrix[i][j] ); }
					sudoku = sudoku + '</div>\n'; 

				}
			}
			if (tolko_matrica == false)
			{
			sudoku = sudoku +'<div id="' + this.id_button_verify + '" style = "position: absolute; top: '+ String(y0) + 'px; left: '+ String(x0 + td_size*(col+1)) +'px; font-size: 20px;">' +
			'<a href="javascript: ' + this.name + '.verify();" class="gamebutton gamebutton-orange"><span>Проверить</span></a> </div>\n';
			//sudoku = sudoku +'<div id="button_new_game1"> <a href="javascript:new_game()" class="gamebutton gamebutton-green"><span>Новая игра</span></a> </div>\n';	
			sudoku = sudoku +'<div id="' + this.id_span_info + '" style = "position: absolute; top: ' + String(y0 + 30) + 'px; left: '+ String(x0 + td_size*(col+1)) +'px; font-size: 20px;">' +
			' У вас одна подсказка. Заполните все ячейки, и нажмите "Проверить". </div>\n';		
			}
			document.getElementById( this.id_span_show ).innerHTML = sudoku; //alert(sudoku);
		}
	
	this.zvet = function( i,j )
     {  i=parseInt(i); j=parseInt(j); //console.log( String( this.matrix_user[i][j] ) );
  	   if ( this.matrix_user[i][j]=='?')
           { var zvetik="#f5f5dc"; this.matrix_user[i][j]= this.ar_values[1];}
		   else
  	   if ( this.matrix_user[i][j] == this.ar_values[ this.ar_values.length - 1 ])
           { var zvetik="white"; this.matrix_user[i][j] = '?'; }		   
		   else
			 for (var k=1; k< this.ar_values.length - 1; ++k)	
				    {  
						if ( this.matrix_user[i][j] == this.ar_values[ k ] )
				             { var zvetik="#f5f5dc"; this.matrix_user[i][j] = this.ar_values[k + 1]; break;}			
					}
		   

		var _id = id_td_prefix + String(i)+','+String(j);
		document.getElementById( _id ).style.backgroundColor = zvetik;
		if ( this.matrix_user[i][j] !='?' ) 
				{ 
						document.getElementById( _id ).innerHTML = String( this.matrix_user[i][j] );
				}
			 else {document.getElementById( _id ).innerHTML = ''; }
		
     }	
	

	this.verify = function ( )
		{   

		for (var i=0; i< this.row; ++i)
			{  
			for (var j=0; j< this.col; ++j)
				{
				  if ( this.matrix_user[i][j]=='?') 
				         { 
						    add_message("Не все поля заполнены!", this.id_span_info, "red");
  	                        document.getElementById( this.id_td_prefix + String(i)+','+String(j)).style.backgroundColor = 'violet';						   
						    return false;
						}					   
						   
				}

        }

		for (var i=0; i< this.row; ++i)
			{  
			for (var j=0; j< this.col; ++j) 
				{
				  if ( this.matrix_user[i][j] != this.matrix[i][j] ) 
				        { 
				           add_message("Есть неверная ячейка!", this.id_span_info, "red");
  	                       if (this.error_count==0) 
								{document.getElementById( this.id_td_prefix + String(i)+','+String(j)).style.backgroundColor = 'red';	}
							this.error_count = 1;
						   return false;
						}							   	   
				}

        }
		add_message("Все поля заполнены правильно!", this.id_span_info, "green" );
		
   }

	
	}
	
	
function animate()
{
 	requestAnimationFrame(animate);
	render();
}		
		

function render() 
{
	renderer.render(scene, camera);
	renderer2.render(scene2, camera2);	
}	





function init2()
{			
		//создаем сцену
	scene2 = new THREE.Scene(); 
				
	AddCamera2(0, 0, 140);  // добавляем камеру			
	AddLight2( 0, 0, 200 );  //устанавливаем белый свет 

		//рендерер 
	try
       {
          renderer2=new THREE.WebGLRenderer( { antialias: true } ); 
       }
	catch(err)
      {
		alert('В вашем браузере отсутствует поддержка WebGL!');
       try
             {
				renderer2=new THREE.CanvasRenderer; 
	            }
				catch(err)
					{	
				alert('Пожалуйста, установите новый браузер с поддержкой WebGL!');
              }
     }

	 	//устанавливаем цвет фона
	renderer2.setClearColor( 0xfffff0 );
		//устанавливаем ему размеры экрана
	renderer2.setSize( 500, 500 );
		//и добавляем в наш созданный элемент
	container2 = document.getElementById('MyWebGLApp2');
	container2.appendChild( renderer2.domElement );


	adj2 = new matroid( 'adj2', 'Матрица смежности', rows_count, columns_count, 'adjtwo', 'table2', ['?', 0, 1] ); 
	                 // название (!) переменной, заголовок
					 // кол-во строк, кол-во столбцов, 
					 // префикс ID ячеек, ID поля, где будет рисоваться матрица
					 // перечень возможных значений ячеек
	
	inc2 = new matroid( 'inc2', 'Матрица инцидентности', rows_count, edges_count, 'inctwo', 'table22', ['?', 0, 1, -1 ] ); 
	
	vector_exit = new matroid( 'vector_exit', 'Вектор выходов (исходов)', 1, rows_count, 'vector_exit', 'vector_exit', ['?', 0, 1, 2, 3, 4, 5] ); 
	
	
var geometry = new THREE.Geometry;
var material = new THREE.LineBasicMaterial( { color: 0xcc0000 } );



for (var i=0; i<6; i++)
{
var a = new THREE.Vector3(
      -45*Math.cos( Math.PI/3*i ) + getrandom(-5,5), 45*Math.sin( Math.PI/3*i )+ getrandom(-5,5), 0 );
geometry.vertices.push( a ); 

var Circmaterial = new THREE.MeshBasicMaterial( {color: 0x000000} );
var Circgeometry = new THREE.CircleGeometry(1, 32, 0, 2*Math.PI );	
var krugok = new THREE.Mesh(Circgeometry, Circmaterial);
krugok.position = a;
scene2.add( krugok );

		var TextSprite = createTextSprite( String( i+1 ), 'Bold 200px Arial', '#0000FF' );
		var x = geometry.vertices[i].x;
		var y = geometry.vertices[i].y;
		var z = geometry.vertices[i].z;
		TextSprite.position.set( 1.1*x, 1.1*y, 1.1*z );		
		scene2.add( TextSprite );
	
}




var material =  0x1a4780;

var line_count = 0; var line_number = 1;
var mas = random( 1, 15, 7 );
var k = 1/6;

for (var i=0; i<5; i++)
{  
for (var j=i+1; j<6; j++)
{
	line_count++;

	if (inmas( line_count, mas ) )
		{
			var a = geometry.vertices[i];
			var b = geometry.vertices[j];
			
			var rnm =  getrandom(0,1); 
			if (rnm == 1) { 
								Arrow( a, b, material, scene2 ); 
								adj2.matrix[i][j] = 1;  vector_exit.matrix[0][i]++;
								inc2.matrix[i][line_number - 1] = 1; // ребро line_number инцидентно вершине i (нумерация с нуля)
								inc2.matrix[j][line_number - 1] = -1; // ребро line_number инцидентно вершине i (нумерация с нуля)								
						  }
						else { // иногда и в обратную сторону	
								Arrow( b, a, material, scene2 ); 
								adj2.matrix[j][i] = 1; vector_exit.matrix[0][j]++;
								inc2.matrix[i][line_number - 1] = -1; // ребро line_number инцидентно вершине i (нумерация с нуля)	
								inc2.matrix[j][line_number - 1] = 1; // ребро line_number инцидентно вершине i (нумерация с нуля)										
							}		
						
						
			var R = a.distanceTo( b );  k = 20/ R ;
			
			var x = ( a.x + k*b.x ) / (1 + k);
			var y = ( a.y + k*b.y ) / (1 + k);
			var z = ( a.z + k*b.z ) / (1 + k);
			
			var TextSprite = createTextSprite( String( line_number ), 'Bold 192px Arial', '#000000' );
			TextSprite.position.set( 1*x, 1*y, 1*z );		
			scene2.add( TextSprite );
			line_number++;
			
			
		}
}

}

//alert( line_count );

var dir = new THREE.Vector3( 1, 0, 0 );
var origin = new THREE.Vector3( 0, 0, 0 );
var length = 50;
var hex = 0x00ff00;

var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex, 10 );
//scene.add( arrowHelper );

	adj2.show_matrix( 10, 52 );
	inc2.show_matrix( 10, 280 );
	vector_exit.show_matrix( 25, 510, false );
	
	
 adj3 = new matroid( 'adj3', '', rows_count+1, columns_count+1, 'adj3_', 'table3', ['?', 0, 1, 2, 3, 4, 5] ); 
 perevoski = new matroid( 'perevoski', 'Укажите порядковый номер города', rows_count, 1, 'perevoski_', 'table32', ['?', 1, 2, 3, 4, 5, 6] ); 
 var yorks = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  	var marshrut = random( 0, rows_count, rows_count + 1 );
		var otvet = '';
		for (var j=0; j<= rows_count ; ++j) {	
             otvet =  otvet + String(j)+ ': '+ yorks[marshrut[j]] + '  ';
		}
	//console.log( otvet ); 

 	document.getElementById('gorod_name').innerHTML  = String( yorks[marshrut[0]] );
 	document.getElementById('gorod_name2').innerHTML  = String( yorks[marshrut[0]] ); 
 	document.getElementById('gorod_name3').innerHTML  = String( yorks[marshrut[0]] ); 	
	var k=getrandom(2,3);
 	document.getElementById('gorod2_name').innerHTML  = String( yorks[marshrut[k]] ); 
	
		for (var j=0; j< rows_count ; ++j)
			{
					perevoski.matrix[j][0] = j+1; 
			}
		for (var j=0; j< rows_count+1 ; ++j)
			{
					//console.log(  parseInt(marshrut[j]) + 1);
			}

	for (var j=0; j< rows_count ; ++j)
				{ 
					//console.log( 'j = ' + j); console.log( marshrut[j] ); console.log( marshrut[j+1] );
					adj3.matrix[ marshrut[j] ][ marshrut[j+1] ] = 1; 
					adj3.matrix[ marshrut[j+1] ][ marshrut[j] ] = 1; 					
				}
					adj3.matrix[ marshrut[rows_count] ][ marshrut[0] ] = 1; 
					adj3.matrix[ marshrut[0] ][ marshrut[rows_count] ] = 1; 		

   /* add_vertices =  getrandom( 0 , rows_count);
	for (var j=0; j<= rows_count ; ++j)
				{	
					if (adj3.matrix[ add_vertices ] [j] == 0)
						{
							adj3.matrix[ add_vertices ][j] = 1;
							adj3.matrix[j][ add_vertices ] = 1; 
							break;
						}
				}
	*/
					
	// Запутываем ответ
	  	var zaputanka = random( 1, rows_count, rows_count );
		var help = [];
		
		
	for (var j=0; j< rows_count ; ++j)	
		{
				help[j] = perevoski.matrix[j][0];
		}
		
	for (var j=0; j< rows_count ; ++j)	
		{
			perevoski.matrix[j][0] =  help[zaputanka[j]-1];
		}		
	
	
 	adj3.show_matrix( 60, 36, true, true, true );
	perevoski.show_matrix( 425, 50, false );

		var sudoku = ""; var arr_ =  [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G']

    	var x0 = 30, y0 = 45; var td_size = 30; 
	for (var j=0; j< 8 ; ++j)
				{ 	   
					sudoku = sudoku +'<div style="position: absolute; left: '+ String(x0 +td_size*j) +'px; top: '+ String(y0 - 40) +'px;' +
					'width = ' + String(td_size) + 'px; text-align:center;" class="tod" > '; 
					sudoku = sudoku + '<span CLASS="math">' +  arr_[j] + '</span>';
					sudoku = sudoku + '</div>\n';
					sudoku = sudoku +'<div style="position: absolute; left: '+ String(x0-1) +'px; top: '+ String(y0 + 1 - 40 + td_size*j) +'px;' +
					'width = ' + String(td_size) + 'px; text-align:center;" class="tod" > '; 
					sudoku = sudoku + '<span CLASS="math">' +  arr_[j] + '</span>';
					sudoku = sudoku + '</div>\n';			
				}
				
	for (var j=1; j< 7 ; ++j)
				{ 
					sudoku = sudoku +'<div style="position: absolute; left: '+ String(x0+320) +'px; top: '+ String(y0 + 1 - 26 + td_size*j) +'px;' +
					'width = ' + String(td_size) + 'px; text-align:center;" class="tod" > ';
					//	console.log( zaputanka[j-1] );
					sudoku = sudoku + '<span CLASS="math">' +  yorks[marshrut[ zaputanka[j-1] ]] + '</span>';
					sudoku = sudoku + '</div>\n';				
				}
	document.getElementById('table31').innerHTML  = sudoku;
	
}
	
	
	
function AddCamera( X,Y,Z )
{		
	camera = new THREE.PerspectiveCamera( 45, 300 / 300, 1, 10000 );		
	camera.position.set(X,Y,Z);
	scene.add( camera ); 	
}		

function AddLight( X,Y,Z )
{	
	light = new THREE.DirectionalLight( 0xffffff );
	light.position.set(X,Y,Z);
	scene.add( light ); 
}	

function AddCamera2( X,Y,Z )
{		
	camera2 = new THREE.PerspectiveCamera( 45, 300 / 300, 1, 10000 );		
	camera2.position.set(X,Y,Z);
	scene.add( camera2 ); 	
}		

function AddLight2( X,Y,Z )
{	
	light2 = new THREE.DirectionalLight( 0xffffff );
	light2.position.set(X,Y,Z);
	scene.add( light2 ); 
}	

 function Line(a,b, material, sc)
{ 

var geometry = new THREE.Geometry;
geometry.vertices.push( a );	
geometry.vertices.push( b );				
var line = new THREE.Line( geometry, material );
sc.add( line );
	
}	

 function Arrow( pointX, pointY, material, sc)
{ 

	var direction = new THREE.Vector3().subVectors( pointY, pointX );
	var arrow = new THREE.ArrowHelper( 
	direction.clone().normalize(), pointX, direction.length(), material, 10 );

	var rotation = new THREE.Euler().setFromQuaternion( arrow.quaternion );
	arrow.setRotationFromEuler( arrow.rotation );
	sc.add( arrow );
	
}	
	



	
	
	
 function createTextSprite(text, font, color)
{
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = font; 
	//canvas.width  = 400;
   // canvas.height = 80;
	
	context.fillStyle   = color;
	context.lineWidth = 4;

	context.fillText( text, 60, 140);
	
	var texture = new THREE.Texture(canvas); 
	texture.needsUpdate = true;
	
	var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
	
	var sprite = new THREE.Sprite( spriteMaterial );
	sprite.scale.set( 8, 4, 1.0);
	return sprite;	

}

function norightmouse()
{
  return false;
} 
document.oncontextmenu=norightmouse;
document.onmousedown=norightmouse;




 
 // Функция генерирует случайное число от min_random до max_random
 function getrandom(min_random, max_random) 
 {
 var range = max_random - min_random + 1;
 return Math.floor(Math.random()*range) + min_random;
 }
 
 	  
// Функция генерирует массив из count случайных чисел со значениями от min до max 
function random(min,max,count)
{var arr = [],m = [],n = 0;
  if (max - min < count-1) return;
  for (var i=0; i<=(max-min); i++)m[i] = i + min;
  for (var i=0; i<count; i++) {n = Math.floor(Math.random()*(m.length)); arr[i]=m.splice(n,1);}; 
  return arr
}

// Функция проверяет лежит ли элемент в массиве
function inmas(a, arr)
{
	 var flag = false;
	 for (var i=0; i<arr.length; i++)
		{
			if (arr[i] == a) { flag = true; break;}
		}
	return flag;
}

  
function add_message( message, span_message, color )
{
   document.getElementById( span_message ).innerHTML = '<font color = ' + color + ' > ' + message + '</font>';
}
  