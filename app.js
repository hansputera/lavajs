let { exec } = require('child_process');

// Validasi : Lavalink file

let lava = require(',/Lavalink.jar');
if (lava === undefined) {
console.log('[INFO] Melakukan Download terhadap Lavalink !');
exec('wget https://github.com/Frederikam/Lavalink/releases/download/3.3.1/Lavalink.jar', (err, stdout, stderr) => {
if (err) {
return console.log('[INFO] lavalink gagal di download!');
} 
else console.log('[INFO] lavalink berhasil di download!');

let lava = require('./Lavalink.jar');
if (lava === undefined) return console.log('[INFO] Sepertinya tidak ditemukan file Lavalink!');
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
