import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib655Component } from './lib655.component';

describe('Lib655Component', () => {
  let component: Lib655Component;
  let fixture: ComponentFixture<Lib655Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib655Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
