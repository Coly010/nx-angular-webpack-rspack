import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib452Component } from './lib452.component';

describe('Lib452Component', () => {
  let component: Lib452Component;
  let fixture: ComponentFixture<Lib452Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib452Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
