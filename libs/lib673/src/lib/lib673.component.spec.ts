import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib673Component } from './lib673.component';

describe('Lib673Component', () => {
  let component: Lib673Component;
  let fixture: ComponentFixture<Lib673Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib673Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
