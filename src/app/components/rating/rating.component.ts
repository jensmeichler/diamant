import {Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {ViewService} from "src/app/services/view.service";
import {map} from "rxjs";
import {AiTranslatePipe} from "src/app/pipes/ai-translate.pipe";

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [AiTranslatePipe, AsyncPipe],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  protected readonly link$ = inject(ViewService).mobile$.pipe(
    map(mobile => mobile
      ? 'https://www.google.com/search?sca_esv=5278b46dd4ebd301&q=rezensionen+f%C3%BCr+diamant+kosmetik+-+sch%C3%B6nheit+neu+erleben+-+das+freundliche+kosmetikstudio+in+braunschweig&uds=AMwkrPvEd_vOTsYtQXrfxVQPLWqt0GI5cxdrBg_CLt0TfsrrblLiKbpu-X0uib1Yxs7XJEIvPilH5zB2gDuLfCkdn87ByyQSIvp2E9gnFXqB9WYIvaLEWv3LpVXvfzQLcNyu_ZrsbqLBIup3JTHQiQtdRrXNF20rNnpjBvfg836gHPSNqq3a2KV8u8ruJGSxqppgAHSEYSR_iL7oZUcfMubL8jJDWa8kw9vQ-VxdlmasQQUEs541gj7kmFuScTxudB3D7LsHFI1FbcXRm7Yd31Rp6TwGSYm6bFOHDkO7YvhZV2gyZL4bnSs&si=AKbGX_oXOTjHK3vNPxrwAU4tsC2W_rsdJDrrSHpqUAOdbOh1qx6h835Glr_rIjHQMFXOWSOzW1jsx9tVnXz0oHlIDHXWycjSX5MFKH6BIdWimqd_j93_f07JGhF9FNhdhqWYcLEvZF2t-_eeX38tGjqL1zPlXywlV854JpoTUyzCO-I_eiMdxkfX5BhOttg7Nmg81GtPDXGVhs8_07QGk0scI_Ki-ZKdyfqpC2Z9DSE6emrwxPEOy73YBEPOT5gdRxKXoR_izLd7&sa=X&ictx=1&lei=983KZZ7BHKDc7_UP_6aa0AM#sbfbu=1&pi=rezensionen%20f%C3%BCr%20diamant%20kosmetik%20-%20sch%C3%B6nheit%20neu%20erleben%20-%20das%20freundliche%20kosmetikstudio%20in%20braunschweig'
      : 'https://www.google.com/search?q=Diamant+Kosmetik+-+Sch%C3%B6nheit+neu+erleben+Braunschweig&sca_esv=5278b46dd4ebd301&ei=ZcvKZbakOabY7_UPlP2vkA0&ved=0ahUKEwj26vCwmqeEAxUm7LsIHZT-C9IQ4dUDCBA&uact=5&oq=Diamant+Kosmetik+-+Sch%C3%B6nheit+neu+erleben+Braunschweig&gs_lp=Egxnd3Mtd2l6LXNlcnAiNkRpYW1hbnQgS29zbWV0aWsgLSBTY2jDtm5oZWl0IG5ldSBlcmxlYmVuIEJyYXVuc2Nod2VpZzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYR0jQDVDfB1jfB3ABeAKQAQCYAQCgAQCqAQC4AQPIAQD4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp#lrd=0x47aff6652241fb7f:0x2b38557e468741f1,3,,,,')
  )
}
