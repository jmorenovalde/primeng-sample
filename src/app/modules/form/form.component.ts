import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

export interface ItemDropDown {
  name: string;
  code: string;
}

/**
 * The form component to show a sample of forms with PrimenNG
 */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterViewInit, OnDestroy {
  /**
   * The form of the reactive form.
   */
  public myForm: FormGroup;

  /**
   * To unsubscribe at the ngOnDestroy event.
   */
  private unsubscribe$: Subject<boolean> = new Subject<boolean>();

  selectedState: any = null;

  states: ItemDropDown[] = [];

  /**
   * The constructor method
   */
  constructor(private translateService: TranslateService) {}

  /**
   * @ignore
   * The init method.
   */
  ngOnInit(): void {
    this.initForm();
    setTimeout(() => {
      this.states = this.loadStates();
    }, 200);
  }

  /**
   * @ignore
   * The after view init method.
   */
  ngAfterViewInit(): void {}

  /**
   * @ignore
   * The
   */
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  private loadStates(): ItemDropDown[] {
    const listStates = [
      { name: this.translateService.instant('andalusia'), code: '1' },
      { name: this.translateService.instant('catalonia'), code: '2' },
      { name: this.translateService.instant('madrid'), code: '3' },
      { name: this.translateService.instant('valencia'), code: '4' },
      { name: this.translateService.instant('galicia'), code: '5' },
      { name: this.translateService.instant('castilla-leon'), code: '6' },
      { name: this.translateService.instant('pais-vasco'), code: '7' },
      { name: this.translateService.instant('canarias'), code: '8' },
      { name: this.translateService.instant('castilla-mancha'), code: '9' },
      { name: this.translateService.instant('murcia'), code: '10' },
      { name: this.translateService.instant('aragon'), code: '11' },
      { name: this.translateService.instant('baleares'), code: '12' },
      { name: this.translateService.instant('extremadura'), code: '13' },
      { name: this.translateService.instant('asturias'), code: '14' },
      { name: this.translateService.instant('navarra'), code: '15' },
      { name: this.translateService.instant('cantabria'), code: '16' },
      { name: this.translateService.instant('rioja'), code: '17' },
      { name: this.translateService.instant('melilla'), code: '18' },
      { name: this.translateService.instant('ceuta'), code: '19' },
    ];
    listStates.sort((a, b) => a.name.localeCompare(b.name));
    return listStates;
  }

  private initForm(): void {
    this.myForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('', [Validators.min(10000), Validators.max(99999)]),
    });
  }
}
