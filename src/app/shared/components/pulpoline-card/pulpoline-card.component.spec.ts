import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulpolineCardComponent } from './pulpoline-card.component';

describe('PulpolineCardComponent', () => {
  let component: PulpolineCardComponent;
  let fixture: ComponentFixture<PulpolineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PulpolineCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulpolineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
