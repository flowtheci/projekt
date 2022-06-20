import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TolstoiBasementComponent } from './tolstoi-basement.component';

describe('TolstoiBasementComponent', () => {
  let component: TolstoiBasementComponent;
  let fixture: ComponentFixture<TolstoiBasementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TolstoiBasementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TolstoiBasementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
