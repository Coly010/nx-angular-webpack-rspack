import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib200Component } from './lib200.component';

describe('Lib200Component', () => {
  let component: Lib200Component;
  let fixture: ComponentFixture<Lib200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib200Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
