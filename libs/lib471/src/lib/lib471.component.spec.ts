import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib471Component } from './lib471.component';

describe('Lib471Component', () => {
  let component: Lib471Component;
  let fixture: ComponentFixture<Lib471Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib471Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
