import { trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  fadeInOutTransition,
  scaleAndOpaque,
} from '@core/animations/common-animations';
import { validateAllFormFields } from '@core/functions/validate-all-form-fields';
import {
  ICareer,
  ICareerData,
  ICareerInterchange,
} from '@core/interfaces/career.interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'admin-career-list',
  templateUrl: 'career-list.component.html',
  styleUrls: ['career-list.component.scss'],
  animations: [
    trigger('collapse', fadeInOutTransition),
    trigger('careerAction', scaleAndOpaque),
  ],
})
export class CareerListComponent implements OnChanges {
  @Input()
  public careerList: ICareerData[] = [];

  @Output()
  public addedCareer = new EventEmitter<ICareerInterchange>();

  @Output()
  public removedCareer = new EventEmitter<string>();

  public careerForm: FormGroup;
  public ckEditor = ClassicEditor;
  public isBeingDragged = { index: 0, displayed: true };

  constructor(private fb: FormBuilder) {
    this.careerForm = fb.group({
      careersFormArray: fb.array([]),
    });
  }

  ngOnChanges({ careerList: { currentValue } }: SimpleChanges): void {
    this.careers.clear();

    if (currentValue.length > 0) {
      currentValue.forEach((career: ICareer) =>
        this.careers.push(this.newCareerFormGroup(false))
      );

      this.careers.patchValue(currentValue);
    }
  }

  get careers(): FormArray {
    return this.careerForm.get('careersFormArray') as FormArray;
  }

  public collapseAndExpandCareer(index: number): void {
    const expandedValue = !this.careers.at(index).get('expanded')?.value;

    this.careers.at(index).get('expanded')?.setValue(expandedValue);
  }

  public deleteCareerFromCareerFormArray(index: number): void {
    this.removedCareer.emit(this.careers.at(index).get('id')?.value);
    this.careers.removeAt(index);
  }

  public newCareerFormGroup(isNewCareer: boolean): FormGroup {
    return this.fb.group({
      id: [uuidv4(), [Validators.required]],
      companyName: ['', [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      jobTitle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      weight: [0, [Validators.required]],
      isNew: [isNewCareer],
      expanded: [false],
    });
  }

  public sendAddedCareer(i: number): void {
    if (this.careers.at(i).invalid) {
      validateAllFormFields(this.careers.at(i) as FormGroup);

      return;
    }

    const { expanded, ...finalFormValue } = this.careers.at(i).value;
    this.addedCareer.emit({
      data: finalFormValue,
      index: this.careers.at(i).get('id')?.value,
    });
    this.careers.at(i).markAsPristine();
  }

  public dragHandler(formGroupIndex: number): void {
    this.isBeingDragged = { index: formGroupIndex, displayed: false };
  }

  public dragEndHandler(formGroupIndex: number): void {
    this.isBeingDragged = { index: formGroupIndex, displayed: true };
  }

  public dragStartsHandler(event: any, formGroupIndex: number): void {
    event.dataTransfer.setData('text/plain', formGroupIndex);
    event.dataTransfer.effectAllowed = 'copy';
  }

  public dropHandler(event: any, formGroupIndex: number): void {
    const itemToReplace = parseInt(
      event.dataTransfer.getData('text/plain'),
      10
    );

    const newItem = this.careers.at(itemToReplace);
    this.careers.removeAt(itemToReplace);
    this.careers.insert(formGroupIndex, newItem);
    // Change the weight
    this.refreshWeight();
  }

  public dragOverHandler(event: any): void {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  private refreshWeight(): void {
    this.careers.controls.forEach(
      (formGroup: AbstractControl, index: number) => {
        formGroup.get('weight')?.setValue(index);
        this.sendAddedCareer(index);
      }
    );
  }
}
