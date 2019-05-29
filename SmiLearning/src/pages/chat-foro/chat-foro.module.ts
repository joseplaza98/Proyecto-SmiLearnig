import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatForoPage } from './chat-foro';

@NgModule({
  declarations: [
    ChatForoPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatForoPage),
  ],
})
export class ChatForoPageModule {}
