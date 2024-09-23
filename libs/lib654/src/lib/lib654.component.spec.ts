import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib654Component } from './lib654.component';

describe('Lib654Component', () => {
  let component: Lib654Component;
  let fixture: ComponentFixture<Lib654Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib654Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
