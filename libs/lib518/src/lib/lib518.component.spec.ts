import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib518Component } from './lib518.component';

describe('Lib518Component', () => {
  let component: Lib518Component;
  let fixture: ComponentFixture<Lib518Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib518Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
