import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalkService {
  // sendData = new EventEmitter<string>();
  sendData = new Subject<string>();
}
