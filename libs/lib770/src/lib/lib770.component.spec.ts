import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib770Component } from './lib770.component';

describe('Lib770Component', () => {
  let component: Lib770Component;
  let fixture: ComponentFixture<Lib770Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib770Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
