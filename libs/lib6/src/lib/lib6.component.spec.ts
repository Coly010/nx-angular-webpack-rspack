import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Component } from './lib6.component';

describe('Lib6Component', () => {
  let component: Lib6Component;
  let fixture: ComponentFixture<Lib6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
