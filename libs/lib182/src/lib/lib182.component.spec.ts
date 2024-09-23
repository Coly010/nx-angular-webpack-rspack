import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib182Component } from './lib182.component';

describe('Lib182Component', () => {
  let component: Lib182Component;
  let fixture: ComponentFixture<Lib182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib182Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
