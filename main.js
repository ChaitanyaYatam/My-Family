    var images=["family.JPG","me.JPG","IMG_6459.JPG","IMG_0462.jpg","IMG_8928.jpg"]
    var names=["My Family","Me, Chaitanya Yatam","My Brother, Sriram Yatam","My Mom, Ramani Yatam","My Dad, Ramakrishna Yatam"]
    var i = 0

function nextpic(){
    i++;
    var nfma = 4;
    if (i>nfma){
        i=0
    }
    var ui= images[i]
    var un= names[i]
    document.getElementById("pic").src=ui
    document.getElementById("name").innerHTML=un
}
