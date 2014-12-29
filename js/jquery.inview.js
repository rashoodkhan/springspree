var scrollPosition=$(window).scrollLeft();

var txt1Once=false;
var txt2Once=false;
var txt3Once=false;
var txt4Once=false;
var txt5Once=false;
var txt6Once=false;
var txt7Once=false;
var txt8Once=false;
var txt9Once=false;
var txt10Once=false;
var txt11Once=false;
var txt12Once=false;
var txt13Once=false;
var txt14Once=false;
var txt15Once=false;
var txt16Once=false;
var txt17Once=false;
var txt18Once=false;
var txt19Once=false;
var txt20Once=false;
var txt21Once=false;
var txt22Once=false;
var txt23Once=false;

$(document).ready(function(){
var offsets = new Array;
var halfscreen = $(window).width() / 1.4;
for (i = 0; i < 24 ; i++) {

	if($('#txt'+i).length){
		offsets.push ($('#txt'+i).offset().left - halfscreen);
	}
	
}


	$('#dispCont').click(function(){
	$('.messLwr,#contCon').slideToggle('slow',function(){});
});





$(window).scroll(function(){
	scrollPosition=$(window).scrollLeft();

/*for (i = 0; i < 20 ; i++) {
	var txtcontent = new Array;
		txtcontent.push('#txt'+ i);

	scrollPosition=$(window).scrollLeft();
	if(scrollPosition>offsets[i]/*&&!txt1Once){
	
		//var txtanimate = txtcontent[i];
	//txt1Once=true;
	$(' " ' + txtcontent[i] + ' " ').animate({
		opacity : 1
	},1000);
#$('.icon').animate({
	opacity : 1,
	top : '0px'
	

}*/

if(scrollPosition>offsets[0]&&!txt1Once){
	txt1Once=true;
	$('#txt1').animate({
		opacity : 1
	},1000);
}else if(scrollPosition<offsets[0]&&txt1Once){
	txt1Once=false;
	$('#txt1').animate({
	opacity : 0
},1000);
	
}


if(scrollPosition>offsets[1]&&!txt2Once){
	txt2Once=true;
	$('#txt2').animate({
		opacity : 1
},1000);
}else if(scrollPosition<offsets[1]&&txt2Once){
	txt2Once=false;
	$('#txt2').animate({
		opacity : 0
	},1000);
	
}


if(scrollPosition>offsets[2]&&!txt3Once){
	txt3Once=true;
	$('#txt3').animate({
		opacity : 1
	},1000);
}else if(scrollPosition<offsets[2]&&txt3Once){
	txt3Once=false;
	$('#txt3').animate({
	opacity : 0
},1000);
}


if(scrollPosition>offsets[3]&&!txt4Once){
	txt4Once=true;
	$('#txt4').animate({
		opacity : 1
	},1000);
}else if(scrollPosition<offsets[3]&&txt4Once){
	txt4Once=false;
	$('#txt4').animate({
		opacity : 0
	},1000);
}


if(scrollPosition>offsets[4]&&!txt5Once){
	txt5Once=true;
	$('#txt5').animate({
		opacity : 1
	},1000);
	
}else if(scrollPosition<offsets[4]&&txt5Once){
	txt5Once=false;
	$('#txt5').animate({
	opacity : 0
	},1000);
}


if(scrollPosition>offsets[5]&&!txt6Once){
	txt6Once=true;
	$('#txt6').animate({
		opacity : 1
},1000);
}else if(scrollPosition<offsets[5]&&txt6Once){
	txt6Once=false;
	$('#txt6').animate({
		opacity : 0
	},1000);
}


if(scrollPosition>offsets[6]&&!txt7Once){
	txt7Once=true;
	$('#txt7').animate({
		opacity : 1
	},1000);
	
}else if(scrollPosition<offsets[6]&&txt7Once){
	txt7Once=false;
	$('#txt7').animate({
	opacity : 0
},1000);
	
}


if(scrollPosition>offsets[7]&&!txt8Once){
	txt8Once=true;
	$('#txt8').animate({
		opacity : 1
},1000);
	
}else if(scrollPosition<offsets[7]&&txt8Once){
	txt8Once=false;
	$('#txt8').animate({
		opacity : 0
	},1000);
	
}


if(scrollPosition>offsets[8]&&!txt9Once){
	txt9Once=true;
	$('#txt9').animate({
		opacity : 1
	},1000);
	
}else if(scrollPosition<offsets[8]&&txt9Once){
	txt9Once=false;
	$('#txt9').animate({
	opacity : 0
},1000);
	
}


if(scrollPosition>offsets[9]&&!txt10Once){
	txt10Once=true;
	$('#txt10').animate({
		opacity : 1
},1000);
	
}else if(scrollPosition<offsets[9]&&txt10Once){
	txt10Once=false;
	$('#txt10').animate({
		opacity : 0
	},1000);
	
}


if(scrollPosition>offsets[10]&&!txt11Once){
	txt11Once=true;
	$('#txt11').animate({
		opacity : 1
	},1000);
	
}else if(scrollPosition<offsets[10]&&txt11Once){
	txt11Once=false;
	$('#txt11').animate({
	opacity : 0
},1000);
}


if(scrollPosition>offsets[11]&&!txt12Once){
	txt12Once=true;
	$('#txt12').animate({
		opacity : 1
},1000);
	
}else if(scrollPosition<offsets[11]&&txt12Once){
	txt12Once=false;
	$('#txt12').animate({
		opacity : 0
	},1000);
}


if(scrollPosition>offsets[12]&&!txt13Once){
	txt13Once=true;
	$('#txt13').animate({
		opacity : 1
	},1000);
	
}else if(scrollPosition<offsets[12]&&txt13Once){
	txt13Once=false;
	$('#txt13').animate({
	opacity : 0
},1000);
}


if(scrollPosition>offsets[13]&&!txt14Once){
	txt14Once=true;
	$('#txt14').animate({
		opacity : 1
},1000);
	
}else if(scrollPosition<offsets[13]&&txt14Once){
	txt14Once=false;
	$('#txt14').animate({
		opacity : 0
	},1000);
	
}


if(scrollPosition>offsets[14]&&!txt15Once){
	txt15Once=true;
	$('#txt15').animate({
		opacity : 1
	},1000);
	
}else if(scrollPosition<offsets[14]&&txt15Once){
	txt15Once=false;
	$('#txt15').animate({
	opacity : 0
},1000);
	
}


if(scrollPosition>offsets[15]&&!txt16Once){
	txt16Once=true;
	$('#txt16').animate({
		opacity : 1
},1000);
	
}else if(scrollPosition<offsets[15]&&txt16Once){
	txt16Once=false;
	$('#txt16').animate({
		opacity : 0
	},1000);
	
}


if(scrollPosition>offsets[16]&&!txt17Once){
	txt17Once=true;
	$('#txt17').animate({
		opacity : 1
	},1000);
	
}else if(scrollPosition<offsets[16]&&txt17Once){
	txt17Once=false;
	$('#txt17').animate({
	opacity : 0
},1000);
	
}


if(scrollPosition>offsets[17]&&!txt18Once){
	txt18Once=true;
	$('#txt18').animate({
		opacity : 1
},1000);
	
}else if(scrollPosition<offsets[17]&&txt18Once){
	txt18Once=false;
	$('#txt18').animate({
		opacity : 0
	},1000);
	
}


if(scrollPosition>offsets[18]&&!txt19Once){
	txt19Once=true;
	$('#txt19').animate({
		opacity : 1
	},1000);
	
}else if(scrollPosition<offsets[18]&&txt19Once){
	txt19Once=false;
	$('#txt19').animate({
	opacity : 0
},1000);
	
}


if(scrollPosition>offsets[19]&&!txt20Once){
	txt20Once=true;
	$('#txt20').animate({
		opacity : 1
},1000);
	
}else if(scrollPosition<offsets[19]&&txt20Once){
	txt20Once=false;
	$('#txt20').animate({
		opacity : 0
	},1000);
	
}

if(scrollPosition>offsets[20]&&!txt21Once){
	txt21Once=true;
	$('#txt21').animate({
		opacity : 1
},1000);
	
}else if(scrollPosition<offsets[20]&&txt21Once){
	txt21Once=false;
	$('#txt21').animate({
		opacity : 0
	},1000);
	
}


//for the heart and root

if(scrollPosition>offsets[21]&&!txt22Once){
	txt22Once=true;
	alert(offsets[21]);
	$('div#fill').animate({
        top: '90px',
		height : '0px'
},1000);
	
}else if(scrollPosition<offsets[21]&&txt22Once){
	txt22Once=false;
	  $('div#fill').animate({
        top: '90px',
		height : '0px'
},1000);
	
}

if(scrollPosition>offsets[22]&&!txt23Once){
	txt23Once=true;
	$('div#root').animate({
        top: '233px',
		height : '0px'
},1000, 'linear');
	
}else if(scrollPosition<offsets[22]&&txt23Once){
	txt23Once=false;
	$('div#root').animate({
        top: '233px',
		height : '0px'
},1000, 'linear');
	
}



});

});