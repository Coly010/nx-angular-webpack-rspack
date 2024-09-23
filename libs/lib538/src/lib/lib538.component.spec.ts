import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib538Component } from './lib538.component';

describe('Lib538Component', () => {
  let component: Lib538Component;
  let fixture: ComponentFixture<Lib538Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib538Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
