import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib771Component } from './lib771.component';

describe('Lib771Component', () => {
  let component: Lib771Component;
  let fixture: ComponentFixture<Lib771Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib771Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
