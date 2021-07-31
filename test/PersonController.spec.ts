import {Test, TestingModule} from '@nestjs/testing'
import {PersonController} from "person/PersonController"
import {PersonService} from "person/PersonService"

describe('PersonController', () => {
	let personController: PersonController

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [PersonController],
			providers: [PersonService],
		}).compile()

		personController = app.get<PersonController>(PersonController)
	})

	describe('root', () => {
		it('should return 10', () => {
			expect(personController.getCost()).toBe(10)
		})
	})
})
