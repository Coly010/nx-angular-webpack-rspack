import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib442Component } from './lib442.component';

describe('Lib442Component', () => {
  let component: Lib442Component;
  let fixture: ComponentFixture<Lib442Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib442Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
