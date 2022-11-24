const button = lumpia.button;
const markup = lumpia.markup;
const helper = lumpia.helper;

// COMMAND > /START
bot.start(ctx => {
  // start dengan keyboard inline
  let nama = ctx.from.first_name;
  if (ctx.from.last_name) nama += ' ' + ctx.from.last_name;

  // cleansing nama biar tidak error karakter khusus HTML
  nama = helper.clearHTML(nama);

  let pesan = `🤖Halo <b>${nama}</b>, Perkenalkan aku Bot OpenSIS (Sistem Informasi Sekolah) SMAN 1 Gegesik.`;
  pesan += '\n\nAku bisa membantu mendapatkan informasi seputar nilai ujian, jadwal pelajaran, pembayaran SPP dan lain-lain.';
  pesan += '\n\nSilakan pilih salah satu menu di bawah ini untuk memulai, ya.';

  /*
  MENU KEYBOARD INLINE
  Button
  */
  let keyboard = [];

  // Keyboard baris pertama
  // diawali dengan index 0
  keyboard[0] = [
    button.text('😼 Jadwal Pelajaran', 'jadwal_pelajaran'),
    button.text('👀 Nilai ujian', 'nilai_ujian')
  ];

  // Keyboard baris kedua
  keyboard[1] = [
    button.url('📚 Docs', 'https://lumpia.js.org'),
    button.url('👥 @botindonesia', 'https://t.me/botindonesia')
  ];

  keyboard[2] = [
    button.text('👀 Informasi PPDB', 'info_ppdb')
  ];

  ctx.replyWithHTML(pesan, {
    reply_markup: markup.inlineKeyboard(keyboard)
  });

})


/*
MENU KEYBOARD INLINE
Result
*/

// Result Button Test  
bot.hears(['tes pesan'], ctx => ctx.reply(pesanUjian));
// Default Responses 
bot.action('ok_paham', ctx => ctx.reply('🤖Good!'))
bot.action('kembali_menu', ctx => ctx.reply(pesan))

// BUTTON > Jadwal Pelajaran
bot.action('jadwal_pelajaran', ctx => ctx.reply('Ya, saya.'))
// End of BUTTON > Jadwal Pelajaran


// BUTTON > Nilai Ujian 
var pesanUjian = '🤖Ok, Untuk mencari nilai ujian, silakan beri aku perintah menggunakan salah satu dari dua format berikut ini:';
pesanUjian += '\n\n💌 Nilai(spasi)NIS: '
pesanUjian += '\n✅ Contoh:  Nilai 123456 '
pesanUjian += '\n\nAtau menggunakan format berikut ini untuk mencari nilai ujian tertentu. '
pesanUjian += '\n\n💌 Nilamapel(spasi)Kode Mapel(spasi)NIS '
pesanUjian += '\n✅ Contoh:  Nilaimapel MTK 123456 '
pesanUjian += '\n\n Ketik /kodemapel untuk melihat daftar kode mata pelajaran '

bot.action('nilai_ujian', ctx => ctx.reply(pesanUjian))
// End of BUTTON > Nilai Ujian







//
