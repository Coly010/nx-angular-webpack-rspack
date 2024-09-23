import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib206Component } from './lib206.component';

describe('Lib206Component', () => {
  let component: Lib206Component;
  let fixture: ComponentFixture<Lib206Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib206Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
