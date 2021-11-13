import { Component, OnInit } from '@angular/core';
import { TramService } from 'src/app/services/tram.service';
import { Tramstop } from '../../Tramstop';

@Component({
  selector: 'app-trams-view',
  templateUrl: './trams-view.component.html',
  styleUrls: ['./trams-view.component.scss']
})
export class TramsViewComponent implements OnInit {
  tramstops: Tramstop[] = [];
  from = 0;
  to = 0;
  tramsOk: number[] = [];
  show: boolean = false;

  constructor(private tramService: TramService) { }

  ngOnInit(): void {
    this.tramService.getTramstops().subscribe((data) => {
      this.tramstops = data;
    });
  }

  check() {
    let tramsFrom: number[] = [];
    let tramsTo: number[] = [];
    this.tramsOk = [];

    this.tramstops[this.from].trams.forEach(element => {
      tramsFrom.push(element);
    });

    this.tramstops[this.to].trams.forEach(element => {
      tramsTo.push(element);
    });

    for(let i=0;i<tramsFrom.length;i++) {
      for (let j=0;j<tramsTo.length;j++) {
        if (tramsFrom[i]==tramsTo[j]) {
          this.tramsOk.push(tramsFrom[i]);
        }
      }
    }
    return this.show=true;
  }
}
