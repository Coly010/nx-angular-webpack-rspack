import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib792Component } from './lib792.component';

describe('Lib792Component', () => {
  let component: Lib792Component;
  let fixture: ComponentFixture<Lib792Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib792Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
