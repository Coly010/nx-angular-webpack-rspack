import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib342Component } from './lib342.component';

describe('Lib342Component', () => {
  let component: Lib342Component;
  let fixture: ComponentFixture<Lib342Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib342Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
