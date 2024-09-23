import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib181Component } from './lib181.component';

describe('Lib181Component', () => {
  let component: Lib181Component;
  let fixture: ComponentFixture<Lib181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib181Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
