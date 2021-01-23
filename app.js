let table = document.getElementById("tableSepet");
let buttons = document.getElementsByClassName("sepeteEkle");
let spanToplam =document.getElementById("spanToplam");
let toplam = 0;


function sepeteEkle(urunAdi , fiyat ){
    let row = table.insertRow(table.rows.length),
        cell1 = row.insertCell(0),
        cell2 = row.insertCell(1),
        cell3 = row.insertCell(2);

    cell1.innerHTML = urunAdi;
    cell2.innerHTML = fiyat;
    cell3.innerHTML = "<button class='silButton' onClick='satirSil(this,"+fiyat+")'>Sil</button>";
   
    toplam += fiyat;
    toplamYazdir(toplam);
}

function satirSil(element, fiyat ){
    let rowIndex = element.parentNode.parentNode.rowIndex;
    table.deleteRow(rowIndex);

    toplam -= fiyat;
    toplamYazdir(toplam);
}

function toplamYazdir(toplam){
    toplam  = toplam.toFixed(2);
    spanToplam.innerHTML = toplam + " TL";
}
