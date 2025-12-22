/*const fs = require('fs').promises;

async function get_file_list(directory_path) {
    try {
	const file_array = await fs.readdir(directory_path);
	return file_array;
    } catch (error) {
	console.error('Error:', error.message);
    }
}

var image_list = get_file_list("./images/");

async function random_image() {
    var index = await Math.floor(Math.random() * image_list.length);
    return image_list[index];
}

const n = random_image();

const element = document.getElementById("my_image");
if (element) {
    element.innerHTML = "<img src=" + image_list[n] + " width=250>";
else {
    console.error('Error loading content: Element with ID `my_image` not found');
console.log("Hello");
*/
