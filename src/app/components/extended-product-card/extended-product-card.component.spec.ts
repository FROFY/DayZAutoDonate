import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedProductCardComponent } from './extended-product-card.component';

describe('ExtendedProductCardComponent', () => {
  let component: ExtendedProductCardComponent;
  let fixture: ComponentFixture<ExtendedProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedProductCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtendedProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
