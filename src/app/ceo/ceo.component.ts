import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ceo',
  templateUrl: './ceo.component.html',
  styleUrls: ['./ceo.component.css'],
})
export class CeoComponent implements OnInit {
  @Input() ceo: string = 'Steve';

  constructor() {}

  ngOnInit() {}
}
