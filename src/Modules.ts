import {Module} from '@nestjs/common'
import {PersonModule} from 'person/PersonModule'
import {PersonController} from 'person/PersonController'
import {PersonService} from 'person/PersonService'

@Module({
  imports: [PersonModule],
  controllers: [PersonController],
  providers: [PersonService],
})
export class Modules {
}
