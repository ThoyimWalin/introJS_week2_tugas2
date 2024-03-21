// Tugas 2

const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]

// fungsi cari nama
const searchName = (key, limits, callback) => {

    // fungsi filter nama berdasarkan key
    const search = name.filter((nm) => nm.toLowerCase().includes(key.toLowerCase()))

    // melakukan pembatasan jumlah array berdasarkan limit
    const limit = search.slice(0, limits)
    let hasil = ''
    if(limit.length<1){
        console.log(hasil);
    } else {
        hasil = limit
    }

    // variabel output
    const output = `
Daftar Orang : ${name}

kata Kunci : ${key} 

jumlah output : ${limits}

Hasil Pencarian : ${hasil}
    `
    callback(output)
}

// fungsi callback untuk menampilkan output
const tampil = tampilkan => console.log(tampilkan)


searchName('aasn', 3, tampil)

// Tugas 2 end