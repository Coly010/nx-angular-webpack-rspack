import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib577Component } from './lib577.component';

describe('Lib577Component', () => {
  let component: Lib577Component;
  let fixture: ComponentFixture<Lib577Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib577Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
