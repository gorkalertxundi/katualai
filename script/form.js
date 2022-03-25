var alertCount;

function createDocument() {
    
    //alertCount = 0;
    //Clear data
    /*
    localStorage.clear();
    var startDate = document.getElementById("sarrera-data").value;
    var endDate = document.getElementById("irteera-data").value;
    var sexua = document.getElementById("sexua").value;
    var adina = document.getElementById("adina").value;
    var ilea = document.getElementById("ilea").value;
    var arraza = document.getElementById("arraza").value;
    var koloniakokapena = document.getElementById("koloniakokapena").value;
    var argazkia = null;
    var antzuketaID = getAntzuketaID();
    var belarriID = getBelarriID();
    var gaixorik = isGaixo();
    var lorratzenDeskribapena = document.getElementById("lorratzen-deskribapena").value;
    var biziesperantzaID = getBiziEsperantza();
    var arrazonamendua = document.getElementById("arrazonamendua").value;

    if (alertCount == 0) {
        //window.location="document.html";
        localStorage.setItem("startDate", startDate);
        localStorage.setItem("endDate", endDate);
        localStorage.setItem("sexua", sexua);
        localStorage.setItem("adina", adina);
        localStorage.setItem("ilea", ilea);
        localStorage.setItem("arraza", arraza);
        localStorage.setItem("koloniakokapena", koloniakokapena);
        localStorage.setItem("argazkia", argazkia);
        localStorage.setItem("antzuketaID", antzuketaID);
        localStorage.setItem("belarriID", belarriID);
        localStorage.setItem("gaixorik", gaixorik);
        localStorage.setItem("lorratzenDeskribapena", lorratzenDeskribapena);
        localStorage.setItem("biziesperantzaID", biziesperantzaID);
        localStorage.setItem("arrazonamendua", arrazonamendua);
    }*/
}



function getAntzuketaID() {
    var histerectomia = document.getElementById("antzuketa-ovario-histerectomia");
    var ovariectomia = document.getElementById("antzuketa-ovariectomia");
    var orquiectomia = document.getElementById("antzuketa-orquiectomia");
    
    if ((histerectomia.checked && ovariectomia.checked) || 
        (histerectomia.checked && orquiectomia.checked) ||
        (ovariectomia.checked && orquiectomia.checked)) {
            alert("Mesedez, ipini antzuketa mota bat bakarrik.");
            alertCount++;
    } else {
        if(histerectomia.checked) {
            return 0;
        } else if (ovariectomia.checked) {
            return 1;
        } else if (orquiectomia.checked) {
            return 2;
        }
    }    
}

function getBelarriID() {
    var ezkerrean = document.getElementById("belarri-ezkerrean");
    var eskuinean = document.getElementById("belarri-eskuinean");

    if (ezkerrean.checked && eskuinean.checked) {
            alert("Mesedez, ipini belarri-markaketa bat bakarrik.");
            alertCount++;
    } else {
        if(ezkerrean.checked) {
            return false;
        } else if (eskuinean.checked) {
            return true;
        }
    }    
}

function isGaixo() {
    var bai = document.getElementById("gaixotasun-bai");
    var ez = document.getElementById("gaixotasun-ez");

    if (bai.checked && ez.checked) {
        alert("Mesedez, ezinezkoa da gaixorik eta ez gaixorik egotea.");
        alertCount++;
    } else {
        if(bai.checked) {
            return true;
        } else if (ez.checked) {
            return false;
        }
    }  
}

function getBiziEsperantza() {
    var gai = document.getElementById("bizitzeko-gai");
    var ezGai = document.getElementById("bizitzeko-ez-gai");
    var eutanasiatua = document.getElementById("eutanasiatua");
    
    if ((gai.checked && ezGai.checked) || 
        (gai.checked && eutanasiatua.checked) ||
        (ezGai.checked && eutanasiatua.checked)) {
            alert("Mesedez, begiratu bizi esperantza zuzena dela.");
            alertCount++;
    } else {
        if(gai.checked) {
            return 0;
        } else if (ezGai.checked) {
            return 1;
        } else if (eutanasiatua.checked) {
            return 2;
        }
    }  
}