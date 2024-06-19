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



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "07015781709";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_40_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI4LFxuICAgICAgICA5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcsXG4gICAgICAgIDUwLFxuICAgICAgICA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2LFxuICAgICAgICA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTczLFxuICAgICAgICA4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1LFxuICAgICAgICA4NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0QkFpNDc1T2h2M3VYd09TSUZJZVRlNk9XTVl2bS9KV0NOOTBCS282eFJrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMTU3ODE3MDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU0OUY4NTE5RTZBREMzMjMyNEMzMEM0RjI0MkU2N0VGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODc4NjQ0OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMTU3ODE3MDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAyRjI2OTk4OTgyMjY5RjNENjYyMDdDNjUyOUY2MTAwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODc4NjQ0OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGdXRZTjF3eFNteW5qaXZ4a214WlJnXCIsXG4gIFwicGhvbmVJZFwiOiBcImE3MDlhYzc4LWRiZmItNGY0OS04ZDYwLWUwNDVmYWUxNTQ5ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICAxMTcsXG4gICAgICAxODYsXG4gICAgICA1NSxcbiAgICAgIDEyMixcbiAgICAgIDgxLFxuICAgICAgMjQ3LFxuICAgICAgMjE3LFxuICAgICAgMTAwLFxuICAgICAgMTQ4LFxuICAgICAgMTg2LFxuICAgICAgMTMyLFxuICAgICAgMCxcbiAgICAgIDM2LFxuICAgICAgMTIxLFxuICAgICAgNDEsXG4gICAgICA5OSxcbiAgICAgIDIzNixcbiAgICAgIDIxNSxcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAxNjYsXG4gICAgICAxNzMsXG4gICAgICAyNDQsXG4gICAgICAxMDksXG4gICAgICAyNTAsXG4gICAgICAxNjEsXG4gICAgICA1MixcbiAgICAgIDE5NSxcbiAgICAgIDQ4LFxuICAgICAgODgsXG4gICAgICAyMDAsXG4gICAgICAxMjgsXG4gICAgICAyNDQsXG4gICAgICAxMzgsXG4gICAgICAxOTQsXG4gICAgICAxOTUsXG4gICAgICAyMTUsXG4gICAgICA2NSxcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJENEZNM1NLVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNTc4MTcwOTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjIxNTMzNDE0MzE4MTc6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKM3gyb0VCRUllenlyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlMY2FRWmsxU1pQT2xSWU00UlpiRGV0NStGY0VGZk54THNiZ3lEdHptalE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwienV1Sjh0b08rQUROcDZtQkhrbnFndElOQVUwTG45VW9idVZjZ1ZuNER5SWxWN0ZreUc0UEpWK1RzWVN4TDBoQ1JNbVl0NUJjeTZGcUZkM1o0OFBuQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicVNEWjQ4TkVibUVhbkpyb1hhMGtGNkYyQUJZRzNNanQyK0lxMGgraklneXdPN2ZoeWR2NkI3Y01CbHlrRjJZZm4wZFRoTGJqTTFLVlM1d1oyL3NzaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxNTc4MTcwOTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3ODY0NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGclJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZyUi5qc29uIjogIntcImtleURhdGFcIjpcIjRHemk0ZXZKK1R6eTMwVGRVcTJzYklwNE9rYURmRGo0YWNxeGJ3NXNWZzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjcyMDIxNjYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg3ODY0NDcyNzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Legend king",


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
