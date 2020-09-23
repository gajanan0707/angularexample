import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { SearchServiceService } from '../search-service.service';

declare var jsPDF: any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public loading: boolean = false;
   showSpinner: boolean = true;
   @ViewChild('htmlData') htmlData:ElementRef;
  constructor(public itunes:SearchServiceService,public authService: AuthService) { }

  ngOnInit(): void {
  }
  doSearch(term:string) {
    this.loading = true;
    this.itunes.search(term).then(_ => (this.loading = false));
  }

  public downloadPDF():void {
    const docs = new jsPDF('p', 'pt', 'letter');
    let DATA = this.htmlData.nativeElement;
    let doc = docs

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
  }


}
