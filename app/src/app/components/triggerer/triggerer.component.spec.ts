import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggererComponent } from './triggerer.component';

describe('TriggererComponent', () => {
  let component: TriggererComponent;
  let fixture: ComponentFixture<TriggererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriggererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TriggererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
