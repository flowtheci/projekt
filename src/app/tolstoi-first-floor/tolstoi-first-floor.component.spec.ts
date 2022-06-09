import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TolstoiFirstFloorComponent } from './tolstoi-first-floor.component';

describe('TolstoiFirstFloorComponent', () => {
  let component: TolstoiFirstFloorComponent;
  let fixture: ComponentFixture<TolstoiFirstFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TolstoiFirstFloorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TolstoiFirstFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
