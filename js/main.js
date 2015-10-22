var box = ['preamble-box', 'first-article-box', 'second-article-box', 'history-box'];
function showTab(target) {
  var oldTab = document.getElementsByClassName('active-tab')[0];
  oldTab.className = ' ';
	target.className = 'active-tab';
	oldBox = document.getElementsByClassName('code-box active-box')[0];
	oldBox.className = 'code-box inactive-box';
	oldBox.style.display = 'none';
	var newBox = document.getElementById(box[tab.indexOf(target.id)]);
	newBox.className = 'code-box active-box';
	newBox.style.display = 'block';
}