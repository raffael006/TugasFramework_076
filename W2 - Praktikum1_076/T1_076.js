function konversiSuhu(suhu, jenisKonversi) {
    let hasil;

    switch (jenisKonversi) {
        case 'CtoF':
            hasil = (suhu * 9 / 5) + 32;
            return hasil + " °F";

        case 'CtoR':
            hasil = suhu * 4 / 5;
            return hasil + " °R";

        case 'FtoC':
            hasil = (suhu - 32) * 5 / 9;
            return hasil + " °C";

        case 'FtoR':
            hasil = (suhu - 32) * 4 / 9;
            return hasil + " °R";

        case 'RtoC':
            hasil = suhu * 5 / 4;
            return hasil + " °C";

        case 'RtoF':
            hasil = (suhu * 9 / 4) + 32;
            return hasil + " °F";
    }
}

document.getElementById("formSuhu").addEventListener("submit", function (event) {
    event.preventDefault();

    const suhu = parseFloat(document.getElementById("suhu").value);
    const jenisKonversi = document.getElementById("konversi").value;

    const hasil = konversiSuhu(suhu, jenisKonversi);
    document.getElementById("hasil").innerText = "Hasil konversi: " + hasil;
});