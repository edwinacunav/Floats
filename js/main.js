var tab1 = ['preamble-link', 'first-article-link', 'second-article-link', 'history-link'];
var tab2 = ['first-article-link', 'preamble-link', 'second-article-link', 'history-link'];
var tab3 = ['second-article-link', 'preamble-link', 'first-article-link', 'history-link'];
var tab4 = ['history-link', 'preamble-link', 'first-article-link', 'second-article-link'];
var box1 = ['preamble-box', 'first-article-box', 'second-article-box', 'history-box'];
var box2 = ['first-article-box', 'preamble-box', 'second-article-box', 'history-box'];
var box3 = ['second-article-box', 'preamble-box', 'first-article-box', 'history-box'];
var box4 = ['history-box', 'preamble-box', 'first-article-box', 'second-article-box'];
function showTab(targets) {
	var currentTab = document.getElementById(targets[0]);
	var nextTab1 = document.getElementById(targets[1]);
	var nextTab2 = document.getElementById(targets[2]);
	var nextTab3 = document.getElementById(targets[3]);
	currentTab.className = 'active';
	nextTab1.className = ' ';
	nextTab2.className = ' ';
	nextTab3.className = ' ';
}
function showBox(targets){
	var currentTarget = document.getElementById(targets[0]);
	var nextBox1 = document.getElementById(targets[1]);
	var nextBox2 = document.getElementById(targets[2]);
	var nextBox3 = document.getElementById(targets[3]);
	currentTarget.style.display = 'block';
	currentTarget.className = 'code-box active';
	nextBox1.style.display = 'none';
	nextBox1.className = 'code-box';
	nextBox2.style.display = 'none';
	nextBox2.className = 'code-box';
	nextBox3.style.display = 'none';
	nextBox3.className = 'code-box';
}
/* function show(first, second, target){
	var currentTarget = document.getElementById(target);
	currentTarget.style.display = 'block';
	currentTarget.className = 'code-box active';
	document.getElementById(first).style.display = 'none';
	document.getElementById(second).style.display = 'none';
} */			