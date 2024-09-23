import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib113Component } from './lib113.component';

describe('Lib113Component', () => {
  let component: Lib113Component;
  let fixture: ComponentFixture<Lib113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib113Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
