import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib213Component } from './lib213.component';

describe('Lib213Component', () => {
  let component: Lib213Component;
  let fixture: ComponentFixture<Lib213Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib213Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
