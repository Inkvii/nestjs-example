import {Controller, Get} from '@nestjs/common'
import {PersonService} from 'src/person/PersonService'

@Controller()
export class PersonController {
  constructor(private readonly service: PersonService) {
  }

  @Get('cost')
  getCost(): number {
    console.log('Hello cost')
    return this.service.getCost()
  }
}
