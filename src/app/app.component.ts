import { Component } from '@angular/core';
import { WebsocketService } from './service/websocket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public isOnline: boolean = false;
  title = 'EXAMEN';
  constructor(public webSocket: WebsocketService) {}
}
