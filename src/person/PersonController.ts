import {Controller, Get} from '@nestjs/common'
import {PersonService} from 'person/PersonService'

@Controller()
export class PersonController {
	constructor(private readonly service: PersonService) {
	}

	@Get('cost')
	getCost(): number {
		console.log('Hello cost')
		return this.service.getCost()
	}

	@Get('redis')
	publishToRedis(): string {

		debugger;
		const crypto = require('crypto')

		// getting a random RFC 4122 Version 4 UUID
		// by using randomUUID() method
		const value = crypto.randomBytes(20).toString('hex')

		console.log('Publishing to redis value: ' + value)

		global.publisher.publish("redis-queue", value)

		return value
	}
}
