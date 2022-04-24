import { Client, Intents } from "discord.js"
import config from "./config.json"

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] })

client.once("ready", () => {
  console.log("Ready!")
})

client.login(config.token)
