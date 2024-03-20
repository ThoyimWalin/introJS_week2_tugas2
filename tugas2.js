// Tugas 2

const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]

// fungsi cari nama
const searchName = (key, limits, tampil) => {

    // fungsi filter nama berdasarkan key
    const search = name.filter((nm) => nm.toLowerCase().includes(key.toLowerCase()))

    // melakukan pembatasan jumlah array berdasarkan limit
    const limit = search.slice(0, limits)

    // variabel output
    const output = `
Daftar Orang : ${name}

kata Kunci : ${key} 

jumlah output : ${limits}

Hasil Pencarian : ${limit}
    `
    tampil(output)
}

// fungsi callback untuk menampilkan output
const callback = tampilkan => console.log(tampilkan)


searchName('an', 3, callback)

// Tugas 2 end