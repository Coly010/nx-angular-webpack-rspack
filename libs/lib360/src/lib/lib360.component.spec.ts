import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib360Component } from './lib360.component';

describe('Lib360Component', () => {
  let component: Lib360Component;
  let fixture: ComponentFixture<Lib360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib360Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
