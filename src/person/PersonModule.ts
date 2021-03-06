import {Module} from '@nestjs/common'
import {PersonController} from 'person/PersonController'
import {PersonService} from 'person/PersonService'

@Module({
  imports: [],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {
}
