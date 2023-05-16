import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentShoppingCartComponent } from './content-shopping-cart.component';

describe('ContentShoppingCartComponent', () => {
  let component: ContentShoppingCartComponent;
  let fixture: ComponentFixture<ContentShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentShoppingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
