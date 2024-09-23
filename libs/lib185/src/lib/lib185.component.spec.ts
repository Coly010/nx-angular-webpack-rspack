import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib185Component } from './lib185.component';

describe('Lib185Component', () => {
  let component: Lib185Component;
  let fixture: ComponentFixture<Lib185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib185Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
