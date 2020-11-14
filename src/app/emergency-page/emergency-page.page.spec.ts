import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmergencyPagePage } from './emergency-page.page';

describe('EmergencyPagePage', () => {
  let component: EmergencyPagePage;
  let fixture: ComponentFixture<EmergencyPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmergencyPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
