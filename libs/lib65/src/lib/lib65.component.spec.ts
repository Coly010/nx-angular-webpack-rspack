import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Component } from './lib65.component';

describe('Lib65Component', () => {
  let component: Lib65Component;
  let fixture: ComponentFixture<Lib65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib65Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
