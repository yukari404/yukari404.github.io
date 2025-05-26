list_img=["images/premiumbath.jpg", "images/main.jpg", "images/present.jpg", "images/catchphrase.jpg"];

var num_images =list_img.length;
var idx_image =0;

function changeImage() {
	var ele_image =document.getElementById("graphic");
	ele_image.src =list_img[idx_image];
	ele_image.alt =list_img[idx_image];

	idx_image =idx_image + 1;

	if(idx_image >= num_images) {
		idx_image =0;
	}
}

if(num_images > 1) {
	setInterval(changeImage, 3000);
}

	

