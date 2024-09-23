import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib330Component } from './lib330.component';

describe('Lib330Component', () => {
  let component: Lib330Component;
  let fixture: ComponentFixture<Lib330Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib330Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
