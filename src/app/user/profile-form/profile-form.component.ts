import { Profile } from './../model/profile.vm';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profileForm: FormGroup;

  @Output() $profile = new EventEmitter<Profile>();

  private initFormValue = {
    name: ''
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group(this.initFormValue);
  }

  onReset() {
    this.profileForm.reset(this.initFormValue);
  }

  onSubmit(value) {
    if (this.profileForm.valid) {
      const profile = new Profile(value.name);
      this.$profile.emit(profile);
    }
  }

}
