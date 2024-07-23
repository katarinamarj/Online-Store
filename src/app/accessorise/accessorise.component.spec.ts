import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessoriseComponent } from './accessorise.component';

describe('AccessoriseComponent', () => {
  let component: AccessoriseComponent;
  let fixture: ComponentFixture<AccessoriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessoriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessoriseComponent);
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
