import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logMessages: string[] = ["start"];

  constructor() { }

  add(newMessage: string): void {
    this.logMessages.push(newMessage);
  }

  clear(): void {
    this.logMessages = [];
  }
}
