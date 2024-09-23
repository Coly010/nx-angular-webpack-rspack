import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib709Component } from './lib709.component';

describe('Lib709Component', () => {
  let component: Lib709Component;
  let fixture: ComponentFixture<Lib709Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib709Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
