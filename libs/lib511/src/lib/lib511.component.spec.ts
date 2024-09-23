import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib511Component } from './lib511.component';

describe('Lib511Component', () => {
  let component: Lib511Component;
  let fixture: ComponentFixture<Lib511Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib511Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
