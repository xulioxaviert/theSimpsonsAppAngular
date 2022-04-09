import { ServiceService } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  public characters: any[] = [];

  constructor(private http: HttpClient) {


    this.http.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=50')
      .subscribe((res: any) => {
        //console.log(res);

        this.characters = res;
      })
  }
  ngOnInit(): void {
  }

}
