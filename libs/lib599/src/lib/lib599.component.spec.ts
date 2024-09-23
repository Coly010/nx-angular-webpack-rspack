import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib599Component } from './lib599.component';

describe('Lib599Component', () => {
  let component: Lib599Component;
  let fixture: ComponentFixture<Lib599Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib599Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
