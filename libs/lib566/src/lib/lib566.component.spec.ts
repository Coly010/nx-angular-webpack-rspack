import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib566Component } from './lib566.component';

describe('Lib566Component', () => {
  let component: Lib566Component;
  let fixture: ComponentFixture<Lib566Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib566Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
