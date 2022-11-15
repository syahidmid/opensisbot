const button = lumpia.button;
const markup = lumpia.markup;
const helper = lumpia.helper;

// perintah start
bot.start(ctx => {
  // start dengan keyboard inline
  let nama = ctx.from.first_name;
  if (ctx.from.last_name) nama += ' ' + ctx.from.last_name;

  // cleansing nama biar tidak error karakter khusus HTML
  nama = helper.clearHTML(nama);

  let pesan = `Halo <b>${nama}</b>, Perkenalkan aku Bot OpenSIS (Sistem Informasi Sekolah)`;
  pesan += '\n\nAku bisa membantu mendapatkan informasi seputar SMAN 1 Gegesik';
  pesan += '\n\nSilakan pilih salah satu menu di bawah ini.';

  // menu keyboard inline
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

  ctx.replyWithHTML(pesan, {
    reply_markup: markup.inlineKeyboard(keyboard)
  });

})

bot.action('jadwal_pelajaran', ctx => ctx.reply('Ya, saya.'))
bot.action('nilai_ujian', ctx => ctx.answerCallbackQuery('✊🏼 Tetap semangat ya!'));


//




//
