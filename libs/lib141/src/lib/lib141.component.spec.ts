import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib141Component } from './lib141.component';

describe('Lib141Component', () => {
  let component: Lib141Component;
  let fixture: ComponentFixture<Lib141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib141Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
