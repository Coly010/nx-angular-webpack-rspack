import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib158Component } from './lib158.component';

describe('Lib158Component', () => {
  let component: Lib158Component;
  let fixture: ComponentFixture<Lib158Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib158Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
