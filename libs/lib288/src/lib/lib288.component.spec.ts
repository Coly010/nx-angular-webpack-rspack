import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib288Component } from './lib288.component';

describe('Lib288Component', () => {
  let component: Lib288Component;
  let fixture: ComponentFixture<Lib288Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib288Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
