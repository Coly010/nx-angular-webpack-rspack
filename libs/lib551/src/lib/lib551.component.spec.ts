import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib551Component } from './lib551.component';

describe('Lib551Component', () => {
  let component: Lib551Component;
  let fixture: ComponentFixture<Lib551Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib551Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
