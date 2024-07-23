import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellersComponent } from './bestsellers.component';

describe('BestsellersComponent', () => {
  let component: BestsellersComponent;
  let fixture: ComponentFixture<BestsellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestsellersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show product details on mouse enter and hide on mouse leave', () => {
    const product = { image: 'path/to/image.jpg', details: 'Some details', showDetails: false };
    component.toggleDetails(product, true);
    expect(product.showDetails).toBeTrue();
    component.toggleDetails(product, false);
    expect(product.showDetails).toBeFalse();
  });
});
