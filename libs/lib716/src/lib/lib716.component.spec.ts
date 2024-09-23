import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib716Component } from './lib716.component';

describe('Lib716Component', () => {
  let component: Lib716Component;
  let fixture: ComponentFixture<Lib716Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib716Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
