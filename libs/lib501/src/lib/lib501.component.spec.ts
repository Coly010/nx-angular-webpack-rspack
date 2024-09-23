import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib501Component } from './lib501.component';

describe('Lib501Component', () => {
  let component: Lib501Component;
  let fixture: ComponentFixture<Lib501Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib501Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
