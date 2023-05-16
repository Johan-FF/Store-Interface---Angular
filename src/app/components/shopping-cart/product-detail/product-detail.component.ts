import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SingularProduct } from 'src/app/models/singular-product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Output() customEvent_1 = new EventEmitter<any>()
  @Output() customEvent_2 = new EventEmitter<any>()
  @Input() public product!: SingularProduct

  public update_amount(pass: number): void {
    this.product.amount+=pass
    if(this.product.amount<0)
      this.product.amount = 0
    this.product.total = this.product.amount*parseInt(this.product.price.valueOf())*parseInt(this.product.discount_percentage.valueOf())
    this.triggerCustomEvent_1()
  }

  public triggerCustomEvent_1() {
    this.customEvent_1.emit()
  }

  public triggerCustomEvent_2() {
    this.customEvent_2.emit(this.product.id)
  }
}
