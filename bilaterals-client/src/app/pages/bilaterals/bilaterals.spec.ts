import { ComponentFixture, TestBed } from '@angular/core/testing';

import  Bilaterals  from './bilaterals';

describe('Bilaterals', () => {
  let component: Bilaterals;
  let fixture: ComponentFixture<Bilaterals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bilaterals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bilaterals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
