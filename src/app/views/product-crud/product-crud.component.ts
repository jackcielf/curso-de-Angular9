import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent {
  // Necessario receber o Router no construtor
  constructor(private router: Router) {}

  ngOnInit(): void { }
  
  navegateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
