import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib393Component } from './lib393.component';

describe('Lib393Component', () => {
  let component: Lib393Component;
  let fixture: ComponentFixture<Lib393Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib393Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
