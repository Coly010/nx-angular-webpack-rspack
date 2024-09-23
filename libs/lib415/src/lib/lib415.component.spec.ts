import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib415Component } from './lib415.component';

describe('Lib415Component', () => {
  let component: Lib415Component;
  let fixture: ComponentFixture<Lib415Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib415Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
