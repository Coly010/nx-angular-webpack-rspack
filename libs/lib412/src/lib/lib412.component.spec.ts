import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib412Component } from './lib412.component';

describe('Lib412Component', () => {
  let component: Lib412Component;
  let fixture: ComponentFixture<Lib412Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib412Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
