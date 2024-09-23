import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib779Component } from './lib779.component';

describe('Lib779Component', () => {
  let component: Lib779Component;
  let fixture: ComponentFixture<Lib779Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib779Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
