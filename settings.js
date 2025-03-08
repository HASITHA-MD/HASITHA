const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=nr4VACDI#CfnNyfuuN1ew900ATpSZ_YC2-4lS5p31TD9K2fokvPE' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SUDO: process.env.SUDO === undefined ? '9473737373,9363636367' : process.env.SUDO,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? "*Hello , I am alive now!!*" : process.env.ALIVE_MSG,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS,
MODE: process.env.MODE === undefined ?"public" : process.env.MODE,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? "false" : process.env.AUTO_VOICE,
AUTO_REPLY: process.env.AUTO_REPLY === undefined ? "false" : process.env.AUTO_REPLY,
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? "true" : process.env.AUTO_STICKER,
ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
ANTI_LINK: process.env.ANTI_LINK === undefined ? "true" : process.env.ANTI_LINK,
ANTI_CALL: process.env.ANTI_CALL === undefined ? "true" : process.env.ANTI_CALL,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
ANTI_BOT: process.env.ANTI_BOT === undefined ? "true" : process.env.ANTI_BOT,
WELCOME_GOODBYE: process.env.WELCOME_GOODBYE === undefined ? "false" : process.env.WELCOME_GOODBYE,
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE === undefined ? "false" : process.env.ALLWAYS_OFFLINE,
READ_CMD: process.env.READ_CMD === undefined ? "true" : process.env.READ_CMD,
RECORDING: process.env.RECORDING === undefined ? "true" : process.env.RECORDING,
AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
AUTO_REACT: process.env.AUTO_REACT === undefined ? "false" : process.env.AUTO_REACT,
NEWS_SEND_JID: process.env.NEWS_SEND_JID === undefined ? "" : process.env.NEWS_SEND_JID,
AUTO_NEWS_SENDER: process.env.AUTO_NEWS_SENDER === undefined ? "falsw" : process.env.AUTO_NEWS_SENDER,
TIKTOK_SEND_JID: process.env.TIKTOK_SEND_JID === undefined ? "" : process.env.TIKTOK_SEND_JID,
AUTO_TIKTOK_SENDER: process.env.AUTO_TIKTOK_SENDER === undefined ? "false" : process.env.AUTO_TIKTOK_SENDER,
SEEDER_GMAIL: process.env.SEEDER_GMAIL === undefined ? "" : process.env.SEEDER_GMAIL,
SEEDER_PASSWORD: process.env.SEEDER_PASSWORD === undefined ? "" : process.env.SEEDER_PASSWORD,
BAD_NO_BLOCK: process.env.BAD_NO_BLOCK === undefined ? "false" : process.env.BAD_NO_BLOCK,  
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:@Asitha2005b@db.waiqbrnuxkjebghzhovz.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL,
};
