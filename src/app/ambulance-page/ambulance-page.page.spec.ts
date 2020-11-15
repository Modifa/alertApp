import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmbulancePagePage } from './ambulance-page.page';

describe('AmbulancePagePage', () => {
  let component: AmbulancePagePage;
  let fixture: ComponentFixture<AmbulancePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulancePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmbulancePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
