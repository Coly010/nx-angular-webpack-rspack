import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib692Component } from './lib692.component';

describe('Lib692Component', () => {
  let component: Lib692Component;
  let fixture: ComponentFixture<Lib692Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib692Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
