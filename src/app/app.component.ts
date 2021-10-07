import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  form: FormGroup;

  secretQuestionsSet = [
    {
      id: 1,
      question: 'Which is your place of birth?',
    },
    {
      id: 2,
      question: 'What was the brand name of your first mobile handset?',
    },
    {
      id: 3,
      question: 'What was the brand name of your first vehicle?',
    },
    {
      id: 4,
      question: 'What is your favourite color?',
    },
    {
      id: 5,
      question: 'What is the brand name of your first watch?',
    },
    {
      id: 6,
      question: 'In which bank did you open your first savings account?',
    },
    {
      id: 7,
      question: 'Who was your favourite cartoon character?',
    },
    {
      id: 8,
      question: 'Name the month in which your birthday falls?',
    },
  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      credentials: this.fb.array([]),
    });
  }

  addCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      question: ['', [Validators.required]],
      answer: ['', [Validators.required]]
    }));
  }
}
