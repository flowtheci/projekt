import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TolstoiThirdFloorComponent } from './tolstoi-third-floor-component';

describe('TolstoiThirdFloorComponent', () => {
  let component: TolstoiThirdFloorComponent;
  let fixture: ComponentFixture<TolstoiThirdFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TolstoiThirdFloorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TolstoiThirdFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});