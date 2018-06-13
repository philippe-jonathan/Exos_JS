document.getElementById('image1').addEventListener("mouseover", function a1()
{
	document.getElementById('image1').setAttribute('src',
		'images/image1_2.jpg');
});

document.getElementById('image1').addEventListener("mouseout", function a2()
{
	document.getElementById('image1').setAttribute('src',
		'images/image1.jpg');
});