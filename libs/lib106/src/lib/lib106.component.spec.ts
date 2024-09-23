import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib106Component } from './lib106.component';

describe('Lib106Component', () => {
  let component: Lib106Component;
  let fixture: ComponentFixture<Lib106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib106Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
