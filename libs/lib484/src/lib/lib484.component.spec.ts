import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib484Component } from './lib484.component';

describe('Lib484Component', () => {
  let component: Lib484Component;
  let fixture: ComponentFixture<Lib484Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib484Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
