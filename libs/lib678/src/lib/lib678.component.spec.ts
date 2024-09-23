import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib678Component } from './lib678.component';

describe('Lib678Component', () => {
  let component: Lib678Component;
  let fixture: ComponentFixture<Lib678Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib678Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
