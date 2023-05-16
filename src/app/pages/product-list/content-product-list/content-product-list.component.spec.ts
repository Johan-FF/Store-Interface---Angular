import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProductListComponent } from './content-product-list.component';

describe('ContentProductListComponent', () => {
  let component: ContentProductListComponent;
  let fixture: ComponentFixture<ContentProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
