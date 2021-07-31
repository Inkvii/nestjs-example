import {Module} from '@nestjs/common'
import {PersonController} from 'src/person/PersonController'
import {PersonService} from 'src/person/PersonService'

@Module({
  imports: [],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {
}
