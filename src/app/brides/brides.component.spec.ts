import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BridesComponent } from './brides.component';

describe('BridesComponent', () => {
  let component: BridesComponent;
  let fixture: ComponentFixture<BridesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BridesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BridesComponent);
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
