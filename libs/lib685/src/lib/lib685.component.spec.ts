import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib685Component } from './lib685.component';

describe('Lib685Component', () => {
  let component: Lib685Component;
  let fixture: ComponentFixture<Lib685Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib685Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
