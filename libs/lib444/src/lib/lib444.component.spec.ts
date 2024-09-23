import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib444Component } from './lib444.component';

describe('Lib444Component', () => {
  let component: Lib444Component;
  let fixture: ComponentFixture<Lib444Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib444Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
