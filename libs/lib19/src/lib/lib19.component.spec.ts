import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Component } from './lib19.component';

describe('Lib19Component', () => {
  let component: Lib19Component;
  let fixture: ComponentFixture<Lib19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
