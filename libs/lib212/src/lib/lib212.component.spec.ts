import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib212Component } from './lib212.component';

describe('Lib212Component', () => {
  let component: Lib212Component;
  let fixture: ComponentFixture<Lib212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib212Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
