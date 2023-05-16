import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProductComponent } from './content-product.component';

describe('ContentProductComponent', () => {
  let component: ContentProductComponent;
  let fixture: ComponentFixture<ContentProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
