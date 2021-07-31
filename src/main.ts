import {NestFactory} from '@nestjs/core'
import {Modules} from 'Modules'

import {createClient} from "redis"

global.publisher = createClient()
global.subscriber = createClient()

global.subscriber.on("connect", () => {
	console.log("Connected to redis successfully")
	global.subscriber.subscribe("redis-queue")
})

global.subscriber.on("message", (channel, message) => {
	console.log("Data from " + channel + " with message: " + message)
})


async function bootstrap() {
	const app = await NestFactory.create(Modules)
	await app.listen(3000)
}

bootstrap()
