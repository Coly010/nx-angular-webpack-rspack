import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib602Component } from './lib602.component';

describe('Lib602Component', () => {
  let component: Lib602Component;
  let fixture: ComponentFixture<Lib602Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib602Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
