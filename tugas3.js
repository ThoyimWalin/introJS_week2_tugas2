// Tugas 3

// fungsi mencari data array berdasarkan nilai awal dan nilai akhir
const cariArray = (nilaiAwal, nilaiAkhir, dataArray) => {
    // output data asli
    console.log("Cari data Array berdasarkan nilai awal dan nilai akhir\n")
    console.log("Data Array : " + dataArray)
    console.log("Nilai Awal : " + nilaiAwal);
    console.log("Nilai Akhir : " + nilaiAkhir + "\n");

    // fungsi mengurutkan array number
    const urut = (a, b) => (a - b)
    const arrayUrut = dataArray.sort(urut)
    console.log("Array urut : " + arrayUrut + "\n")


    // cek nilai awal < nilai akhir
    if (nilaiAwal < nilaiAkhir) {
        // cek data array lebih dari 5
        if (arrayUrut.length >= 5) {
            // fungsi mengambil range data dari nilai awal - nilai akhir 
            const rangeArray = arrayUrut.filter((arr) => {
                return arr >= nilaiAwal && arr <= nilaiAkhir;
            })
            // cek data array kosong
            if (rangeArray.length < 1) {
                console.log("Data tidak ditemukan")
            } else {
                console.log("Hasil : " + rangeArray)
            }
        } else {
            console.log("Jumlah angka dalam dataArray harus lebih dari 5")
        }
    } else {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
}

cariArray(0, 10, [10, 67, 75, 10, 12, 3, 1, 90, 80, 0])

// Tugas 3 end