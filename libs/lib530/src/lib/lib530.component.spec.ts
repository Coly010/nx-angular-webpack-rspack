import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib530Component } from './lib530.component';

describe('Lib530Component', () => {
  let component: Lib530Component;
  let fixture: ComponentFixture<Lib530Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib530Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
