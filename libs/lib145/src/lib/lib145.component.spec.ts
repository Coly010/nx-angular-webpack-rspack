import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib145Component } from './lib145.component';

describe('Lib145Component', () => {
  let component: Lib145Component;
  let fixture: ComponentFixture<Lib145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib145Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
