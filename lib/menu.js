exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

╔════════════════════
║ *FITUR BOT ${BotName}*
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *#wikiid* <teks lo disini>
║│- Mencari perintah sesuai wikipedia secara Indonesia.
║│
║│2. *#wikien* <teks lo disini>
║│- Mencari perintah sesuai wikipedia secara Inggris.
║│
║│3. *#nulis* <teks lo disini>
║│- Membuat tulisan dikertas.
║│
║│4. *#kbbi* <teks lo disini>
║│- Mencari kata sesuai KBBI.
║│
║│5. *#quran*
║│- Mengirim ayat Al-Qur'an secara random.
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *#covidid*
║│- Memberikan informasi covid di Indonesia.
║│
║│2. *#covid* <negara>
║│- Memberikan informasi covid di Negara yang diperintahkan.
║│
║│3. *#infogempa*
║│- Memberikan informasi gempa di Indonesia.
║│
║│4. *#maps* <nama daerah>
║│- Memberikan gambar maps sesuai perintah.
║│
║│5. *#info*
║│- Memberikan informasi tentang bot.
║│
║│6. *#pembuatbot*
║│- Kirim pesan ke pembuat bot.
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *GAME* ❉──
║│1. *#foto cowok*
║│- Mengirim foto cowok secara random.
║│
║│2. *#foto cewek*
║│- Mengirim foto cewek secara random.
║│
║│3. *#fotoanime*
║│- Mengirim foto anime secara random.
║│
║│4. *#pokemon*
║│- Mengirim foto pokemon secara random.
║│
║│5. *#nekopoi*
║│- Mengirim foto nekopoi secara random.
║│
║│6. *#loli*
║│- Mengirim foto loli secara random.
║│
║│7. *#waifu*
║│- Mengirim foto waifu secara random.
║│
║│8. *#zodiak* <dd-mm-yy>
║│- Memberikan informasi zodiak anda.
║│
║│9. *#artinama* <nama lo disini>
║│- Mencarikan arti nama anda.
║│
║│10. *#pasangan* <nama lo & nama pasangan lo>
║│- Mencarikan kecocokan pasangan anda.
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *#quotes*
║│- Mengirim quotes bijak secara random.
║│
║│2. *#quotes2*
║│- Mengirim quotes bijak secara random v2.
║│
║│3. *#pantun*
║│- Mengirim pantun secara random.
║│
║│4. *#lirik* <nama lagu dan penyanyi>
║│- Mencari lirik lagu sesuai perintah.
║│
║│5. *#chord* <nama lagu dan penyanyi>
║│- Mencarikan chord lagu sesuai perintah.
║│
║│6. *#alay*  <teks lo disini>
║│- Merubah teks menjadi alay.
║│
║│7. *#say*  <teks lo disini>
║│- Mengetik teks ulang.
║│
║│8. *#infoig* <@ig lo disini>
║│- Memberikan informasi Instagram anda.
║│
║│9. *#pesankosong*
║│- Mengirim pesan kosong.
║│
║│10. *#spamcall <nomor yang dituju berawalan 8>
║│- Menspam telpon nomor perintah.
║│
║│11. *#spamsms <nomor yang dituju berawalan 8>
║│- Menspam sms nomor perintah. 
║╰───────────
╠════════════════════
║ *NOTE SEMUA PERINTAH DIATAS TANPA MENGGUNAKAN < >*
║ *MADE BY SYAHRUL SARIZ BOT*
╚════════════════════`
}
