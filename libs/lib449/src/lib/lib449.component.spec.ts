import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib449Component } from './lib449.component';

describe('Lib449Component', () => {
  let component: Lib449Component;
  let fixture: ComponentFixture<Lib449Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib449Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
