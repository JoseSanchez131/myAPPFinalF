import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MegustasPage } from './megustas.page';

describe('MegustasPage', () => {
  let component: MegustasPage;
  let fixture: ComponentFixture<MegustasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegustasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MegustasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
