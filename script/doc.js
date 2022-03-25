window.onload = function loadDataToDocument() {
    //alert("Page loaded");
    document.getElementById("sarrera-data-sec").innerHTML = getParameterByName("sarrera-data");
    document.getElementById("irteera-data-sec").innerHTML = getParameterByName("irteera-data");
    document.getElementById("sexua-sec").innerHTML = getParameterByName("sexua");
    document.getElementById("adina-sec").innerHTML = getParameterByName("adina");
    document.getElementById("ilea-sec").innerHTML = getParameterByName("ilea");
    document.getElementById("arraza-sec").innerHTML = getParameterByName("arraza");
    document.getElementById("kol-kokapena-sec").innerHTML = getParameterByName("kolonia-kokapena");
    //document.getElementById("irteera-data-sec").innerHTML = localStorage.getItem("argazkia");

    if(getParameterByName("Ovario-histerectomia")) {
        document.getElementById("ovario-histerectomia").innerHTML = "X";
    } if (getParameterByName("Ovariectomia")){
        document.getElementById("ovariectomia").innerHTML = "X";
    } if (getParameterByName("Orquiectomia")){
        document.getElementById("orquiectomia").innerHTML = "X";
    }
    
    if(getParameterByName("belarri-ezkerrean")) {
        document.getElementById("arra").innerHTML = "X";
    } if (getParameterByName("belarri-eskuinean")) {
        document.getElementById("emea").innerHTML = "X";
    }

    if(getParameterByName("gaixotasun-bai")) {
        document.getElementById("gaixorik-bai").innerHTML = "X";
    } if (getParameterByName("gaixotasun-ez")) {
        document.getElementById("gaixorik-ez").innerHTML = "X";
    }
    document.getElementById("lorratzen-deskribapena").innerHTML = getParameterByName("lorratzen-deskribapena");

    if(getParameterByName("bizitzeko-gai")) {
        document.getElementById("bizitzeko-gai").innerHTML = "X";
    } if (getParameterByName("bizitzeko-ez-gai")){
        document.getElementById("bizitzeko-ez-gai").innerHTML = "X";
    } if (getParameterByName("eutanasiatua")){
        document.getElementById("eutanasiatua").innerHTML = "X";
    }
    document.getElementById("arrazonamendua").innerHTML = getParameterByName("arrazonamendua");
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}