import { Component, OnInit } from '@angular/core';
import { faTrain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = "CzyDojadeBezposrednio"
  faTrain = faTrain;

  constructor() { }

  ngOnInit(): void {
  }

}
