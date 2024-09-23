import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib531Component } from './lib531.component';

describe('Lib531Component', () => {
  let component: Lib531Component;
  let fixture: ComponentFixture<Lib531Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib531Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
