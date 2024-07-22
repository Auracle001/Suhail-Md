const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_02_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTczLFxuICAgICAgICA5LFxuICAgICAgICAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjksXG4gICAgICAgIDgyLFxuICAgICAgICA3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDczLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MixcbiAgICAgICAgMTg2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzOCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDg5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYzLFxuICAgICAgICA2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgyLFxuICAgICAgICA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDI3LFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVHTGpraGdLOEthWSs3QlByTFk0Vnp0NzBtYU1QUndzRUZIT0psREROQXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzOTU5NjU2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEM4NjE2Rjc2NTg4REY2OTQxQjcwOTc5NkFFM0JEMUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDU1MzMzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNuWHVpeUNUUlhPS1Jta29FM2FoVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmZkMzIxY2QtYjcwYy00ZTA0LTgzMGMtOGU5OGRkZjAyYjE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDE0LFxuICAgICAgMjUzLFxuICAgICAgMTgzLFxuICAgICAgMTMzLFxuICAgICAgMTA1LFxuICAgICAgMTkzLFxuICAgICAgMTIsXG4gICAgICAxNTEsXG4gICAgICAyMDEsXG4gICAgICA2NCxcbiAgICAgIDExNixcbiAgICAgIDIxNSxcbiAgICAgIDEwNixcbiAgICAgIDIwNCxcbiAgICAgIDMxLFxuICAgICAgMTE0LFxuICAgICAgODYsXG4gICAgICAyMyxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICA3OCxcbiAgICAgIDExNSxcbiAgICAgIDE1MyxcbiAgICAgIDgwLFxuICAgICAgMzQsXG4gICAgICAyMDQsXG4gICAgICA2NixcbiAgICAgIDk4LFxuICAgICAgMTM4LFxuICAgICAgMjExLFxuICAgICAgNTEsXG4gICAgICAxMDksXG4gICAgICAxMjcsXG4gICAgICAxNyxcbiAgICAgIDY3LFxuICAgICAgMjE2LFxuICAgICAgNDYsXG4gICAgICAxNTUsXG4gICAgICA1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxU1JGWVFRM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzOTU5NjU2MDo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODc3OTc3NzE4NTgwNjY6NDZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQXVyYWNsZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hTnJYZ1EzcVh0dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidERDVWhFd3g1Mm1DTUpFRmR6dldYbmNVRWlxSWh0OHA5TlYwUzlsckhpVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnZUwyOGdLQ2JOK3RpRWFZalV3TGVodFRPVTY4ZkpZbTMwRWN6dm1aMWxrYys0bVZpb0p1YTd6K2hsNjlUYXFiQmx3TTdaTW9aT1A3K1R5a3I5TFFEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxU0QwTmxuRnRzUGRoY1ppaWRIclBOUFE5R3hVaTRrZWF6aStUY0JEUjFYeU95MlAxTEhObzV5NEwyblVXWHc0R0JvSXRoVnBOUWpEbVcwTnpMUU9qdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM5NTk2NTYwOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDU1MzI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRXJ0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFcnQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2NStNZi9iZU1mdWlFSHJ5YWlpMEcvQUNTbjNwUFJvbGF2UGs5eG5VUXQ4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MjM5NzI4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDU1MzMwODMxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
