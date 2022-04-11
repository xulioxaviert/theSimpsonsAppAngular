import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  public results: any[] = [];

  constructor(private http: HttpClient) { }

  searchCharacter(value: string) {
    value = value.trim().toLocaleLowerCase();

    this.http.get(`https://thesimpsonsquoteapi.glitch.me/quotes?&character=${value}`)
      .subscribe((res: any) => {
                
        if (res == 0) {
        
          this.results[0] = 'Empty Search';
        } else {
             
          this.results = res;
        }

      })

  }
}
