import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib700Component } from './lib700.component';

describe('Lib700Component', () => {
  let component: Lib700Component;
  let fixture: ComponentFixture<Lib700Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib700Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
