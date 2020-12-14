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
║│1. *#wiki* <teks lo disini>
║│- Mencari perintah sesuai wikipedia.
║│
║│2. *#nulis* <teks lo disini>
║│- Membuat tulisan dikertas.
║│
║│3. *#quran*
║│- Mengirim ayat Al-Qur'an secara random.
║│
║│4. *#pantun*
║│- Mengirim pantun secara random.
║│
║│5. *#artinama* <nama lo disini>
║│- Mencarikan arti nama anda.
║│
║│6. *#pasangan* <nama lo & nama pasangan lo>
║│- Mencarikan kecocokan pasangan anda.
║│
║│7. *#lirik* <nama lagu dan penyanyi>
║│- Mencari lirik lagu sesuai perintah.
║│
║│8. *#chord* <nama lagu dan penyanyi>
║│- Mencarikan chord lagu sesuai perintah.
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *#covid*
║│- Memberikan informasi covid di Indonesia.
║│
║│2. *#infogempa*
║│- Memberikan informasi gempa di Indonesia.
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *CONTACT* ❉──
║│1. *#pembuatbot*
║│- Kirim pesan ke pembuat bot.
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *#info*
║│- Memberikan informasi tentang bot.
║│
║│2. *#quotes*
║│- Mengirim quotes bijak secara random.
║│
║│4. *#foto cewek*
║│- Mengirim foto cewek secara random.
║│
║│5. *#foto cowok*
║│- Mengirim foto cowok secara random.
║│
║│5. *#pokemon*
║│- Mengirim foto pokemon secara random.
║│
║│6. *#fotoanime*
║│- Mengirim foto anime secara random.
║│
║│11. *#alay*  <teks lo disini>
║│- Merubah teks menjadi alay.
║│
║│12. *#say*  <teks lo disini>
║│- Mengetik teks ulang.
║│
║│13. *#infoig* <@ig lo disini>
║│- Memberikan informasi Instagram anda.
║╰───────────
╠════════════════════
║ *MADE BY SYAHRUL SARIZ BOT*
╚════════════════════`
}
