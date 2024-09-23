import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib244Component } from './lib244.component';

describe('Lib244Component', () => {
  let component: Lib244Component;
  let fixture: ComponentFixture<Lib244Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib244Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
