import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib797Component } from './lib797.component';

describe('Lib797Component', () => {
  let component: Lib797Component;
  let fixture: ComponentFixture<Lib797Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib797Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
