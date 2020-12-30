import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageFormComponent } from './message-form/message-form.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoomComponent, MessageListComponent, MessageFormComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RoomModule { }
