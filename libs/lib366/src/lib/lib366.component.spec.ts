import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib366Component } from './lib366.component';

describe('Lib366Component', () => {
  let component: Lib366Component;
  let fixture: ComponentFixture<Lib366Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib366Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
