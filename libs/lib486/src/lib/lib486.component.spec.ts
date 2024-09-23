import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib486Component } from './lib486.component';

describe('Lib486Component', () => {
  let component: Lib486Component;
  let fixture: ComponentFixture<Lib486Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib486Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
