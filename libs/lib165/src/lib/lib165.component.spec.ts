import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib165Component } from './lib165.component';

describe('Lib165Component', () => {
  let component: Lib165Component;
  let fixture: ComponentFixture<Lib165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib165Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
