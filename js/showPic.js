function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
function preparePlaceholder() {
    if (!document.createElement) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("class","placeholder_pic");
    placeholder.setAttribute("src","img/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("class","placeholder_text");
    var desetext = document.createTextNode("Choose an image");
    description.appendChild(desetext);
    var list = document.getElementsByClassName("pic_list")[0];
    insertAfter(placeholder,list);
    insertAfter(description,placeholder)
}
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
addLoadEvent(preparePlaceholder);
