import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'logging',
  templateUrl: './logging.component.html'
})
export class LoggingComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

}
