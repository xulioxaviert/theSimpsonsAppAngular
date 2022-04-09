import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  
  constructor(private searchService: ServiceService) { }

  get results() {
    return this.searchService.results;
  }

  searchCharacter() {
    this.searchService.searchCharacter(this.txtSearch.nativeElement.value);
    this.txtSearch.nativeElement.value = '';
  }

  ngOnInit(): void {
  }

}
