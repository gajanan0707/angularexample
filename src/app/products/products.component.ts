import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Products = [
    {
      id: "ABC8441189035",
      name: "Tshirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:'https://source.unsplash.com/6oUsyeYXgTg'
    },
    {
      id: "DEF6510463347",
      name: "Shoes",
      description: "Proin ac metus in diam porttitor viverra eu sit amet ligula.",
      image:'https://source.unsplash.com/6oUsyeYXgTg'
    },
    {
      id: "GHI0831819467",
      name: "Handbags",
      description: "Duis sodales dui vitae urna varius, at ullamcorper purus tempor.",
      image:'https://source.unsplash.com/6oUsyeYXgTg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
