// NOT BEING USED

ImageList = new Array(4);

var length = 4;

var i = 0;
for (i = 0; i < length; i++) {
    ImageList[i] = "../images/me/me_" + i + ".png";
}

async function RandomImage() {
    var index = await Math.floor(Math.random() * ImageList.length);
    return ImageList[index];
}

const n = RandomImage();

document.write("<img src=" + ImageList[n] + " width=250>")
