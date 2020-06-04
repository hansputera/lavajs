let child = require('child_process');
let os = require('os');

if (!child) throw new Error('Install child_process dependency dulu di package.json');

if (os.type !== 'Linux') throw new Error('Operasi sistem harus linux.');

let exec = child.exec;

// Validasi : Lavalink file

let lava = require('./Lavalink.jar');
if (lava === undefined) {
console.log('[INFO] Melakukan Download terhadap Lavalink !');
exec('curl https://ci.fredboat.com/repository/download/Lavalink_Build/8110:id/Lavalink.jar?guest=1 -o Lavalink.jar', (err, stdout, stderr) => {
if (err) {
return console.log('[INFO] lavalink gagal di download!');
} 
else console.log('[INFO] lavalink berhasil di download!');

let lava1 = require('./Lavalink.jar');
if (lava1 === undefined) return console.log('[INFO] Sepertinya tidak ditemukan file Lavalink!');
});
console.log('[INFO] Memulai untuk menjalankan Lavalink!');
exec('java -jar Lavalink.jar', (err, stdout, stderr) => {
if (err) {
return console.log('[INFO] gagal menjalankan lavalink!');
} else {
console.log('[INFO] lavalink berhasil dijalankan!');
console.log(stdout);
}
})
} else {
exec('java -jar Lavalink.jar', (err, stdout, stderr) => {
if (err) {
return console.log('[INFO] gagal menjalankan Lavalink! ');
} else {
console.log(stdout);
}
})
}
