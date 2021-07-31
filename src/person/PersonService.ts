import {Injectable} from '@nestjs/common'

@Injectable()
export class PersonService {
  getCost(): number {
    return 10
  }
}
