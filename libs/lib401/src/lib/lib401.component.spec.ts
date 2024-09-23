import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib401Component } from './lib401.component';

describe('Lib401Component', () => {
  let component: Lib401Component;
  let fixture: ComponentFixture<Lib401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib401Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
