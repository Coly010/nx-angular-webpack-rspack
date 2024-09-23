import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib632Component } from './lib632.component';

describe('Lib632Component', () => {
  let component: Lib632Component;
  let fixture: ComponentFixture<Lib632Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib632Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
