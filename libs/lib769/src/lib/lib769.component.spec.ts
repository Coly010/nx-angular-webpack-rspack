import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib769Component } from './lib769.component';

describe('Lib769Component', () => {
  let component: Lib769Component;
  let fixture: ComponentFixture<Lib769Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib769Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
