import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib241Component } from './lib241.component';

describe('Lib241Component', () => {
  let component: Lib241Component;
  let fixture: ComponentFixture<Lib241Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib241Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
