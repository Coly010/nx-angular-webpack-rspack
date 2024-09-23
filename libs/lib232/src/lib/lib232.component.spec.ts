import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib232Component } from './lib232.component';

describe('Lib232Component', () => {
  let component: Lib232Component;
  let fixture: ComponentFixture<Lib232Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib232Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
