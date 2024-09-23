import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib755Component } from './lib755.component';

describe('Lib755Component', () => {
  let component: Lib755Component;
  let fixture: ComponentFixture<Lib755Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib755Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
