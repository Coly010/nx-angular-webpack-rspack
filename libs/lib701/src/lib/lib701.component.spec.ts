import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib701Component } from './lib701.component';

describe('Lib701Component', () => {
  let component: Lib701Component;
  let fixture: ComponentFixture<Lib701Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib701Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
