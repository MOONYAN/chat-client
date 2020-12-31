import { NewedMessage } from './../model/newed-message.vm';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  messageForm: FormGroup;

  @Input() title: string;

  @Output() $newedMessage = new EventEmitter<NewedMessage>();

  private readonly initFormValue = {
    text: ''
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group(this.initFormValue);
  }

  onSubmit(value) {
    if (this.messageForm.valid) {
      const newedMessage = new NewedMessage();
      newedMessage.text = value.text;
      this.$newedMessage.emit(newedMessage);
      this.messageForm.reset(this.initFormValue);
    }
  }

  onReset() {
    this.messageForm.reset(this.initFormValue);
  }

}
