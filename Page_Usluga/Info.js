"use strict"

let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "Info.xml", false);
xmlhttp.send();
let xmlDoc = xmlhttp.responseXML;
let len = xmlDoc.getElementsByTagName('Info').length;
for (let counter = 0; counter < len; counter++) {
    let xmldeck = xmlDoc.getElementsByTagName('Info')[counter].childNodes;
    let div = document.createElement('div');
    div.className = 'Info';
    let group = document.createElement('span');
    group.innerHTML = xmldeck[1].innerHTML;
    div.appendChild(group);
    let time = document.createElement('span');
    time.className = 'time';
    div.appendChild(time);
    let cost = document.createElement('div');
    let info = document.createElement   ('div');
    info.className = 'info';
    info.appendChild(group);
    info.appendChild(time);
    info.appendChild(cost);
    div.appendChild(info);
    document.body.getElementsByClassName('Info')[0].appendChild(div);
}