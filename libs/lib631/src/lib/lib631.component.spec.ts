import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib631Component } from './lib631.component';

describe('Lib631Component', () => {
  let component: Lib631Component;
  let fixture: ComponentFixture<Lib631Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib631Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
