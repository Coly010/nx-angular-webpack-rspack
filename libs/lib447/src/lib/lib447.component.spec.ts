import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib447Component } from './lib447.component';

describe('Lib447Component', () => {
  let component: Lib447Component;
  let fixture: ComponentFixture<Lib447Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib447Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
