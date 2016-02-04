function run1()
	{document.frm.rest.value += "1";}
function run2()
	{document.frm.rest.value += "2";}
function run3()
	{document.frm.rest.value += "3";}
function runPlus()
	{document.frm.rest.value += "+";}

function run4()
	{document.frm.rest.value += "4";}
function run5()
	{document.frm.rest.value += "5";}
function run6()
	{document.frm.rest.value += "6";}
function runMinus()
	{document.frm.rest.value += "-";}

	function run7()
	{document.frm.rest.value += "7";}
function run8()
	{document.frm.rest.value += "8";}
function run9()
	{document.frm.rest.value += "9";}
function runDivide()
	{document.frm.rest.value += "/";}

function run0()
	{document.frm.rest.value += "0";}
function runPoint()
	{document.frm.rest.value += ".";}
function runPercent()
	{document.frm.rest.value += "%";}
function runMultiply()
	{document.frm.rest.value += " * ";}

	function runClear()
	{document.frm.rest.value = "";}


function evalu()
	{
		var evalo = eval(document.frm.rest.value)
		document.frm.rest.value = evalo;
	}



