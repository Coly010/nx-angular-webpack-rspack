import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib260Component } from './lib260.component';

describe('Lib260Component', () => {
  let component: Lib260Component;
  let fixture: ComponentFixture<Lib260Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib260Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
