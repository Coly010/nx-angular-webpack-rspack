import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib689Component } from './lib689.component';

describe('Lib689Component', () => {
  let component: Lib689Component;
  let fixture: ComponentFixture<Lib689Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib689Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
