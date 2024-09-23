import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib203Component } from './lib203.component';

describe('Lib203Component', () => {
  let component: Lib203Component;
  let fixture: ComponentFixture<Lib203Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib203Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
