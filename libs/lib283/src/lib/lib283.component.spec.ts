import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib283Component } from './lib283.component';

describe('Lib283Component', () => {
  let component: Lib283Component;
  let fixture: ComponentFixture<Lib283Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib283Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
