import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib728Component } from './lib728.component';

describe('Lib728Component', () => {
  let component: Lib728Component;
  let fixture: ComponentFixture<Lib728Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib728Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
