import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { ChatService } from './services/chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public chats: Observable<any[]>;
  constructor(public chatService: ChatService) {
    
  }
}
