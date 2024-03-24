import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-manage-inventory',
  templateUrl: './manage-inventory.component.html',
  styleUrls: ['./manage-inventory.component.scss'],
})
export class ManageInventoryComponent {

  constructor(public app: AppComponent) { }

  CategoryList: boolean = false


  localData: any = [
    {
      id: 1,
      category: 'Tablets',
      productName: 'Vitamin C',
      manufacturer: 'Pharmavit',
      size: '1 Stripe',
    },
    {
      id: 2,
      category: 'Tablets',
      productName: 'MediTech Pro',
      manufacturer: 'HealthCare Innovations Ltd.',
      size: '1 Stripe',
    },
    {
      id: 3,
      category: 'Tablets',
      productName: 'HealthGuard Plus',
      manufacturer: 'MedTech Solutions Inc.',
      size: '3 Stripe',
    },
    {
      id: 4,
      category: 'Tablets',
      productName: 'VitaTab Ultra',
      manufacturer: 'LifeScience Pharmaceuticals',
      size: '2 Stripe',
    },
    {
      id: 5,
      category: 'Tablets',
      productName: 'CureCapsule Max',
      manufacturer: 'Wellness Labs',
      size: '1 Stripe',
    },
    {
      id: 6,
      category: 'Tablets',
      productName: 'LifePill Essential',
      manufacturer: 'NatureCure Biotech',
      size: '2 Stripe',
    },
    {
      id: 7,
      category: 'Tablets',
      productName: 'BioVita Gold',
      manufacturer: 'BioHealth Industries',
      size: '1 Stripe',
    },
    {
      id: 8,
      category: 'Tablets',
      productName: 'NutriCaps Advanced',
      manufacturer: 'NutraLife Technologies',
      size: '1 Stripe',
    },
    {
      id: 9,
      category: 'Tablets',
      productName: 'VitalEase',
      manufacturer: 'MedEase Corp.',
      size: '3 Stripe',
    },
    {
      id: 10,
      category: 'Tablets',
      productName: 'PureHealth Tablets',
      manufacturer: 'HealthPure Labs',
      size: '1 Stripe',
    },
    {
      id: 11,
      category: 'Tablets',
      productName: 'WellnessWave',
      manufacturer: 'WaveLife Pharma',
      size: '1 Stripe',
    },
    {
      id: 12,
      category: 'Syrups',
      productName: 'CoughEx',
      manufacturer: 'PharmaRelief',
      size: '100ml',
    },
    {
      id: 13,
      category: 'Syrups',
      productName: 'SootheCough',
      manufacturer: 'HealthCare Solutions Inc.',
      size: '200ml',
    },
    {
      id: 14,
      category: 'Syrups',
      productName: 'FluGone',
      manufacturer: 'QuickRelief Pharma',
      size: '180ml',
    },
    {
      id: 15,
      category: 'Syrups',
      productName: 'ColdRelief',
      manufacturer: 'ColdCare Labs',
      size: '100ml',
    },
    {
      id: 16,
      category: 'Syrups',
      productName: 'CoughEase',
      manufacturer: 'BioCure Pharmaceuticals',
      size: '130ml',
    },
    {
      id: 17,
      category: 'Syrups',
      productName: 'ThroatSoothe',
      manufacturer: 'MediCalm Corp.',
      size: '115ml',
    },
    {
      id: 18,
      category: 'Injections',
      productName: 'HealthBoost Injectable',
      manufacturer: 'MediLife Pharmaceuticals',
      size: '1',
    },
    {
      id: 19,
      category: 'Injections',
      productName: 'VitaShot Pro',
      manufacturer: 'NutraVaccines Inc.',
      size: '2',
    },
    {
      id: 20,
      category: 'Injections',
      productName: 'BioInj Advanced',
      manufacturer: 'BioTech Therapeutics Ltd.',
      size: '3',
    },
    {
      id: 21,
      category: 'Injections',
      productName: 'WellnessInject Max',
      manufacturer: 'HealthGuard Biotech',
      size: '1',
    },
    {
      id: 22,
      category: 'Injections',
      productName: 'NutriDrip Elite',
      manufacturer: 'NutriVita Injectables Corp.',
      size: '1',
    },
    {
      id: 23,
      category: 'Injections',
      productName: 'PureFlow Inject',
      manufacturer: 'PureHealth Pharma',
      size: '1',
    },
    {
      id: 24,
      category: 'Injections',
      productName: 'ReviveShot Gold',
      manufacturer: 'Revive Meds',
      size: '2',
    },
    {
      id: 25,
      category: 'Injections',
      productName: 'VitalInfuse Plus',
      manufacturer: 'VitalHealth Injections',
      size: '1',
    },
    {
      id: 26,
      category: 'Injections',
      productName: 'EcoPure Injections',
      manufacturer: 'EcoLife Pharma',
      size: '2',
    },
    {
      id: 27,
      category: 'Injections',
      productName: 'OptiFlow Injector',
      manufacturer: 'OptiHealth Solutions',
      size: '1',
    },
    {
      id: 28,
      category: 'Capsules',
      productName: 'CapsiHealth Omega',
      manufacturer: 'HealthWell Labs Inc.',
      size: '1 Stripe',
    },
    {
      id: 29,
      category: 'Capsules',
      productName: 'VitaCaps Pro',
      manufacturer: 'NutriLife Pharmaceuticals',
      size: '2 Stripe',
    },
    {
      id: 30,
      category: 'Capsules',
      productName: 'BioCaps Advanced',
      manufacturer: 'BioTech Solutions Ltd.',
      size: '1 Stripe',
    },
    {
      id: 31,
      category: 'Capsules',
      productName: 'WellnessCaps Max',
      manufacturer: 'HealthGuard Innovations',
      size: '3 Stripe',
    },
    {
      id: 32,
      category: 'Capsules',
      productName: 'NutraPill Elite',
      manufacturer: 'NutriVita Corp.',
      size: '1 Stripe',
    },
    {
      id: 33,
      category: 'Capsules',
      productName: 'PureLife Capsules',
      manufacturer: 'PureHealth Labs',
      size: '1 Stripe',
    },
    {
      id: 34,
      category: 'Capsules',
      productName: 'ReviveCaps Gold',
      manufacturer: 'Revive Pharmaceuticals',
      size: '1 Stripe',
    },
    {
      id: 35,
      category: 'Capsules',
      productName: 'VitalBlend Caps',
      manufacturer: 'VitalHealth Inc.',
      size: '1 Stripe',
    },
    {
      id: 36,
      category: 'Capsules',
      productName: 'EcoGreen Capsules',
      manufacturer: 'EcoLife Wellness',
      size: '1 Stripe',
    },
    {
      id: 37,
      category: 'Capsules',
      productName: 'OptiCaps Plus',
      manufacturer: 'OptiHealth Solutions',
      size: '2 Stripe',
    }
  ];




  ionViewWillEnter() {
    this.app.ind = 7;
    const localInventory: any = localStorage.getItem('InventoryData');
    console.log(localInventory);
    if (JSON.parse(localInventory) == null) {
      localStorage.setItem('InventoryData', JSON.stringify(this.localData))
    }
  }



}
