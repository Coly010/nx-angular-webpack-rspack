import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib628Component } from './lib628.component';

describe('Lib628Component', () => {
  let component: Lib628Component;
  let fixture: ComponentFixture<Lib628Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib628Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
