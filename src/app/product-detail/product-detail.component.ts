import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product_id: string;
  constructor(private actRoute: ActivatedRoute) { 
    this.product_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
