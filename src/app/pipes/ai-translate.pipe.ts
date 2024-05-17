import {inject, Pipe} from '@angular/core';
import {Observable} from "rxjs";
import {AiTranslateService} from "src/app/services/ai-translate.service";

@Pipe({
  name: 'aiTranslate',
  standalone: true,
})
export class AiTranslatePipe {
  aiTranslateService = inject(AiTranslateService);

  transform(key: string): Observable<string> {
    return this.aiTranslateService.translate(key);
  }
}
