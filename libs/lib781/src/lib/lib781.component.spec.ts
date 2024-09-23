import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib781Component } from './lib781.component';

describe('Lib781Component', () => {
  let component: Lib781Component;
  let fixture: ComponentFixture<Lib781Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib781Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
