import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib162Component } from './lib162.component';

describe('Lib162Component', () => {
  let component: Lib162Component;
  let fixture: ComponentFixture<Lib162Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib162Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
