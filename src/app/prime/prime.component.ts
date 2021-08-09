import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css'],
  providers: [MessageService],
})
export class PrimeComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  showSuccess() {
    console.log('object')
    this.messageService.add({
      severity: 'error',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
}
