import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, NEVER, Observable, switchMap} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class AiTranslateService {
  private ngxTranslate = inject(TranslateService);

  init(): void {
    this.ngxTranslate.addLangs(['de', 'ua']);
    this.ngxTranslate.setDefaultLang('de');
    const browserLang = this.ngxTranslate.getBrowserLang();
    this.use(browserLang?.match(/ru|ua/) ? 'ua' : 'de');
  }

  use(lang: 'de' | 'ua'): void {
    this.ngxTranslate.use(lang);
  }

  isDe(): boolean {
    return this.ngxTranslate.currentLang === 'de';
  }

  isUa(): boolean {
    return this.ngxTranslate.currentLang === 'ua';
  }

  translate(key: string): Observable<string> {
    const translationStream = this.ngxTranslate.stream(key);

    return translationStream.pipe(
      switchMap((value) =>
        this.fetchTranslation(value)
      ),
    );
  }

  private fetchTranslation(value: string): Observable<string> {
    const result = new BehaviorSubject(value);

    const subscription = this.requestTranslationApi(value).subscribe((translation) =>
      result.next(translation)
    );

    // If the translation API request takes too long, it does not make sense to wait for it,
    // otherwise we would have massive Cumulative Layout Shift (CLS) issues.
    setTimeout(() => subscription.unsubscribe(), 2000);

    return result;
  }

  private requestTranslationApi(value: string): Observable<string> {
    //TODO: Implement translation API request for languages other than 'de'
    // This could be either Deepl, Google Translate API, ChatGPT, Gemini, etc.

    return NEVER;
  }
}
