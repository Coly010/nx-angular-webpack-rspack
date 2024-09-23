import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib621Component } from './lib621.component';

describe('Lib621Component', () => {
  let component: Lib621Component;
  let fixture: ComponentFixture<Lib621Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib621Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
