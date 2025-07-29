import { ComponentFixture, TestBed } from '@angular/core/testing';

import Bilaterals from './bilaterals';
import { ActivatedRoute } from '@angular/router';

describe('Bilaterals', () => {
  let component: Bilaterals;
  let fixture: ComponentFixture<Bilaterals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bilaterals],
      providers: [{ provide: ActivatedRoute, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(Bilaterals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
