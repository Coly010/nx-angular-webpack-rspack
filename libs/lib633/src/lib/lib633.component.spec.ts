import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib633Component } from './lib633.component';

describe('Lib633Component', () => {
  let component: Lib633Component;
  let fixture: ComponentFixture<Lib633Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib633Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
