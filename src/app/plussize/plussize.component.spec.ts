import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlussizeComponent } from './plussize.component';

describe('PlussizeComponent', () => {
  let component: PlussizeComponent;
  let fixture: ComponentFixture<PlussizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlussizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlussizeComponent);
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
