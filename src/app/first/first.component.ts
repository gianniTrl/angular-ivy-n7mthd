import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  @Input() company: string;
  ceoName: string = 'Steve';

  constructor() {}

  ngOnInit() {}

  onButtonClick(evt: any) {
    this.company = 'Click binding works';
  }

  onKeyUp(evt: any) {
    this.ceoName = evt.target.value;
  }
}
