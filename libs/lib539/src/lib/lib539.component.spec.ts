import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib539Component } from './lib539.component';

describe('Lib539Component', () => {
  let component: Lib539Component;
  let fixture: ComponentFixture<Lib539Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib539Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
