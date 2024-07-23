import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BridesmadeComponent } from './bridesmade.component';

describe('BridesmadeComponent', () => {
  let component: BridesmadeComponent;
  let fixture: ComponentFixture<BridesmadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BridesmadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BridesmadeComponent);
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
