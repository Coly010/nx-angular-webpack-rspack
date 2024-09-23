import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib717Component } from './lib717.component';

describe('Lib717Component', () => {
  let component: Lib717Component;
  let fixture: ComponentFixture<Lib717Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib717Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
