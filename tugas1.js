// tugas 1

// 1) method toString()
// digunakan untuk merubah tipe data number ke string
const number = 12345

const numToStr = number.toString()
console.log(`1. toString() :  ${numToStr} adalah tipe data ${typeof (numToStr)}`)

const name = "thoyim WALIN"
// 2) toUpperCase()
// Membuat karakter pada string kapital
console.log(`2. toUpperCase() : ${name.toUpperCase()}`)

// 3) toLowerCase()
// Membuat karakter pada string kecil/tidak kapital
console.log(`3. toLowerCase() : ${name.toLowerCase()}`)

const absen = ['dono', 'kasino', 'indro']
// 4) push()
// manambah data array dari yang paling akhir
absen.push('sule')
console.log(`4. push() : ${absen}`)

// 5) pop()
// menghapus data array dari yang paling akhir
absen.pop()
console.log(`5. pop() : ${absen}`)

// 6) unshift()
// menambah data array dari yang paling awal
absen.unshift('andre')
console.log(`6. unshift() : ${absen}`)

// 7) shift()
// menghapus data array dari yang paling awal
absen.shift('andre')
console.log(`7. shift() : ${absen}`)

// 8) Math.random()
// untuk membuat nilai acak
const angka = Math.random() * 10
console.log(`8. Math.random : ${angka}`)

// 9) Math.round()
// membulatkan suatu bilangan ke bilangan bulat terdekat
const bilBulat = Math.round(angka)
console.log(`9. Math.random : ${bilBulat}`)

// 10) Math.ceil()
// membulatkan suatu bilangan ke atas ke bilangan bulat terdekat
const bulatAtas = Math.ceil(angka)
console.log(`10. Math.random : ${bulatAtas}`)

// 11) Math.floor()
// untuk membulatkan suatu bilangan ke bawah ke bilangan bulat terdekat
const bulatBawah = Math.floor(angka)
console.log(`11. Math.random : ${bulatBawah}`)

// tugas 1 end