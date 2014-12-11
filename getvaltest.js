autowatch = 1;


//flonum
var num = null;
//function
var func = null;
//matrix
var mat = null;
//multislider
var mult = null;

function loadbang () {
	num = patcher.getnamed("testnum");
	func = patcher.getnamed("testfunc");
	mat = patcher.getnamed("testmatrix");
	mult = patcher.getnamed("testmult");
}

function getnum () {
	var f = num.getvalueof();
	post(f, "\n");
}

function getfunc() {
	post("function value---------\n");
	var v = func.getvalueof();
	v.forEach(function (el) { post(el, "\n"); });
	post("end-------------------\n");
}

function getmult() {
	post("multislider value---------\n");
	var v = mult.getvalueof();
	post(v, "\n");
	v.forEach(function(el){ post(el, "\n") });
	post("end-------------------\n");
}

function getmatrix() {
	post("matrix value---------\n");
	var v = mat.getvalueof();
	post(v, "\n");
	v.forEach(function(el){ post(el, "\n") });
	post("end-------------------\n");	
}