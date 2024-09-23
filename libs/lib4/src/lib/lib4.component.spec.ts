import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Component } from './lib4.component';

describe('Lib4Component', () => {
  let component: Lib4Component;
  let fixture: ComponentFixture<Lib4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
