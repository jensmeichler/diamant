import {Routes} from '@angular/router';
import {HomeComponent} from "src/app/pages/home/home.component";
import {TreatmentsComponent} from "src/app/pages/treatments/treatments.component";
import {ProductsComponent} from "src/app/pages/products/products.component";
import {ConsultingComponent} from "src/app/pages/consulting/consulting.component";
import {ContactComponent} from "src/app/pages/contact/contact.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'behandlungen',
    component: TreatmentsComponent
  },
  {
    path: 'produkte',
    component: ProductsComponent
  },
  {
    path: 'beratung',
    component: ConsultingComponent
  },
  {
    path: 'kontakt',
    component: ContactComponent
  },
];
