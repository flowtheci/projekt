import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TolstoiSecondFloorComponent } from './tolstoi-second-floor.component';

describe('TolstoiSecondFloorComponent', () => {
  let component: TolstoiSecondFloorComponent;
  let fixture: ComponentFixture<TolstoiSecondFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TolstoiSecondFloorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TolstoiSecondFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
