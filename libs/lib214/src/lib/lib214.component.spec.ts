import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib214Component } from './lib214.component';

describe('Lib214Component', () => {
  let component: Lib214Component;
  let fixture: ComponentFixture<Lib214Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib214Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
