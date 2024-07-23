import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MomsComponent } from './moms.component';

describe('MomsComponent', () => {
  let component: MomsComponent;
  let fixture: ComponentFixture<MomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MomsComponent);
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
