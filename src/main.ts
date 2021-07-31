import {NestFactory} from '@nestjs/core'
import {Modules} from 'Modules'

async function bootstrap() {
  const app = await NestFactory.create(Modules)
  await app.listen(3000)
}

bootstrap()
