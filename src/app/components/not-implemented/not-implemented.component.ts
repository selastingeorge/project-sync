import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationLoader, AnimationOptions, LottieModule, provideLottieOptions } from 'ngx-lottie';

@Component({
  selector: 'app-not-implemented',
  standalone: true,
  providers: [
    provideLottieOptions({
      player: () => import(/* webpackChunkName: 'lottie-web' */ 'lottie-web'),
    }),
    AnimationLoader,
  ],
  imports: [CommonModule,LottieModule],
  templateUrl: './not-implemented.component.html',
  styleUrl: './not-implemented.component.scss'
})
export class NotImplementedComponent {
  options: AnimationOptions = {
    path: 'https://lottie.host/511e144f-43b4-495a-8fb5-0325d4c938df/mU5liPMeAZ.json',
  };
}
