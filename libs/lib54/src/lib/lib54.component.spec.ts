import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Component } from './lib54.component';

describe('Lib54Component', () => {
  let component: Lib54Component;
  let fixture: ComponentFixture<Lib54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib54Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
