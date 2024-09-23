import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib226Component } from './lib226.component';

describe('Lib226Component', () => {
  let component: Lib226Component;
  let fixture: ComponentFixture<Lib226Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib226Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
