import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GeneralProduct } from 'src/app/models/general-product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Output() customEvent = new EventEmitter<any>()
  @Input() public product!: GeneralProduct
  public amount: number = 0

  public get_type_title(stock: String): string {
    const stock_num: number = parseInt(stock.valueOf());
    if( stock_num<=30 )
      return 'tertiary'
    else if( 30<stock_num && stock_num<=60 )
      return 'secondary'
    return 'primary'
  }

  public set_amount(pass: number): void {
    this.amount+=pass
    if( this.amount<0 )
      this.amount=0
  }

  public triggerCustomEvent() {
    this.customEvent.emit(this.amount)
    this.amount = 0
  }
}