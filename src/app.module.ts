import {Module} from '@nestjs/common'
import {PersonModule} from 'src/person/PersonModule'
import {PersonController} from 'src/person/PersonController'
import {PersonService} from 'src/person/PersonService'

@Module({
  imports: [PersonModule],
  controllers: [PersonController],
  providers: [PersonService],
})
export class AppModule {
}
