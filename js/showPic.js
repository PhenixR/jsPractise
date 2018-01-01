function showPic(whichpic) {
    if (!document.getElementsByClassName("placeholder_pic")) {
        return false;
    }
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementsByClassName("placeholder_pic")[0];
    placeholder.setAttribute("src",source);
    if (document.getElementsByClassName("placeholder_text")) {
    var text = whichpic.getAttribute("title");
    var description = document.getElementsByClassName("placeholder_text")[0];
    description.firstChild.nodeValue =text;
    }
    return true;
}
function prepareGallery() {
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementsByClassName) {
        return false;
    } 
    if (!document.getElementsByClassName("pic_list")) {
        return false;
    }
    var gallery = document.getElementsByClassName("pic_list")[0];
    var links = gallery.getElementsByTagName("a");
    for ( var i=0; i < links.length; i++) {
        links[i].onclick = function() {
            return !showPic(this);
        }
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
