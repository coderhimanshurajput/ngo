import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoginService {
  public Islogin: Subject<boolean> = new Subject<boolean>();
}

