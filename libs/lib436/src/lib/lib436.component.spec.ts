import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib436Component } from './lib436.component';

describe('Lib436Component', () => {
  let component: Lib436Component;
  let fixture: ComponentFixture<Lib436Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib436Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
