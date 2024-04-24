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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "09045054729";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_09_04_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2LFxuICAgICAgICA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNixcbiAgICAgICAgODgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTksXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY0LFxuICAgICAgICA5MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc4LFxuICAgICAgICA2LFxuICAgICAgICA4NSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5LFxuICAgICAgICAyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgODgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQzLFxuICAgICAgICA5MCxcbiAgICAgICAgNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NixcbiAgICAgICAgODAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZjlJMUQ1TEpXTGMrY3JDWGliVWdHU1lhY3pDSE5iVmN2M3JsZTkrU29XZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTEyMTcwMjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2QzJCQjM4Q0Q5MDMxNDMwODU2OTlGNUVCOTZFRkM4MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTM5ODU3NzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTEyMTcwMjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QTdGMUQ5NjY0QUUwNUIwNTEwRTZGOEM2RDYyNDJBQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTM5ODU3NzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidGZvWW1mUmtTNXVJeEd1N0huNW4wQVwiLFxuICBcInBob25lSWRcIjogXCJlY2I4ZTZkOS05OGM0LTRlMWYtYmFhMy02M2QzMzA3MDJhNTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAxMjAsXG4gICAgICAyMzMsXG4gICAgICA2NSxcbiAgICAgIDE1MixcbiAgICAgIDY1LFxuICAgICAgMTk3LFxuICAgICAgMTYwLFxuICAgICAgMTI3LFxuICAgICAgNTUsXG4gICAgICA1NCxcbiAgICAgIDE3OCxcbiAgICAgIDE4MSxcbiAgICAgIDIwNyxcbiAgICAgIDExNSxcbiAgICAgIDgxLFxuICAgICAgODMsXG4gICAgICAyMCxcbiAgICAgIDEyMSxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDE4NCxcbiAgICAgIDEzOSxcbiAgICAgIDEyLFxuICAgICAgMTIzLFxuICAgICAgMTgxLFxuICAgICAgMTksXG4gICAgICAyMTksXG4gICAgICA4MSxcbiAgICAgIDQwLFxuICAgICAgMjM3LFxuICAgICAgMjEsXG4gICAgICAxMSxcbiAgICAgIDk3LFxuICAgICAgOSxcbiAgICAgIDEzLFxuICAgICAgMjA3LFxuICAgICAgMjMyLFxuICAgICAgMjAzLFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRko1NVBMNEJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTIxNzAyNjY6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIllvdW5nIExlZ2VuZCAoT3JnKVwiLFxuICAgIFwibGlkXCI6IFwiMTE5NzA5NjMwNDk2OTM5OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3p3eXRzREVPT3hwYkVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaNmcwOFNDQUFHVmh2QXJFSTVWSkQvcis0eTBKVVNnQWxjWk9FOXhQaTE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFxZSt6cEJKOUZJVUpDRWY2NWhvbTNGb3B2Q3o2dHE0VHRlbkNvV2lVZkhhaWt3WnhPS0hxWitXN1dGZURXR3ZlenFKWWtySmFVZ0V2dTNOUlN1ckNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjQ4eDJUeXhMWjBSYkF4RVB5VU05aFM3ZlI4dTFPaGM2d3diMjI2S1Y5cmxQZGdYZ2hZbHlSaytQSjlselE3NkpJWjNzbHM5enhzNUd0ZUxqQUxmYmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTIxNzAyNjY6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTM5ODU3NjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUWxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZRbC5qc29uIjogIntcImtleURhdGFcIjpcIndzYWlzQ3J5b2NPbE5jRTFYbXgwVFlCQkd2L0JpUHBFcUhicU40clcyZkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTk3MzczOTk2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTM5ODU3NzIwNThcIn0iCn0="  // PUT your SESSION_ID 


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
