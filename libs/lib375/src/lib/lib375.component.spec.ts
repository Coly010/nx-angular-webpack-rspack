import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib375Component } from './lib375.component';

describe('Lib375Component', () => {
  let component: Lib375Component;
  let fixture: ComponentFixture<Lib375Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib375Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
