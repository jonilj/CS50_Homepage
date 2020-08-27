// This functions switches between the images in the gallery
function switchImage()  {
    let imgelement=document.getElementById('imgg')

    if (imgelement.src.match("1"))
    {
        imgelement.src="images/desert2.png";
    }
    else if (imgelement.src.match("2"))
    { 
        imgelement.src="images/desert3.png";
    }
    else
    {
        imgelement.src="images/desert1.png";
    }
}

