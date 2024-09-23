import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib422Component } from './lib422.component';

describe('Lib422Component', () => {
  let component: Lib422Component;
  let fixture: ComponentFixture<Lib422Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib422Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
