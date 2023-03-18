var colors = document.querySelectorAll('.color');
var fabrics = document.querySelectorAll('.fabric');
var designs = document.querySelectorAll('.design');
var categories = document.querySelectorAll('.category');
var selectedColor;
var selectedFabric;
var selectedDesign;
var selectedCategory;


for (var i = 0; i < colors.length; i++) {
	    colors[i].addEventListener('click', function() {
		selectedColor = this.querySelector('h3').innerHTML;
		console.log('Selected Color: ' + selectedColor);
        localStorage.setItem('selcolor',selectedColor);
        window.location.href= "fabric.html";
	});
}

for (var i = 0; i < fabrics.length; i++) {
	    fabrics[i].addEventListener('click', function() {
		selectedFabric = this.querySelector('h3').innerHTML;
		console.log('Selected fabric: ' + selectedFabric);
        localStorage.setItem('selfabric',selectedFabric);
        window.location.href= "designs.html";
	});
}

for (var i = 0; i < designs.length; i++) {
	    designs[i].addEventListener('click', function() {
		selectedDesign = this.querySelector('h3').innerHTML;
		console.log('Selected Design: ' + selectedDesign);
        localStorage.setItem('seldesign',selectedDesign);
        window.location.href= "Gender.html";
	});
}

for (var i = 0; i < categories.length; i++) {
	    categories[i].addEventListener('click', function() {
		selectedCategory = this.querySelector('h3').innerHTML;
		console.log('Selected category: ' + selectedCategory);
        localStorage.setItem('selcat',selectedCategory);
        window.location.href= "final.html";
	});
}
var catsel = "."+localStorage.getItem('selcat');
var showitem = document.querySelectorAll(catsel);
console.log(showitem.length);

for(var i=0;i<showitem.length;i++){
    showitem[i].classList.remove("hidden");
    console.log(showitem[i].classList);
}

console.log('selected color:' + localStorage.getItem('selcolor'));
console.log('selected fabric:' + localStorage.getItem('selfabric'));
console.log('selected design:' + localStorage.getItem('seldesign'));
console.log('selected category:' + localStorage.getItem('selcat'));




