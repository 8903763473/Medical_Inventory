import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-inventory',
  templateUrl: './manage-inventory.component.html',
  styleUrls: ['./manage-inventory.component.scss'],
})
export class ManageInventoryComponent {

  CategoryList: boolean = false
  Addpage: any
  ActionPopup: boolean = false

  localData: any = [
    {
      id: 1,
      category: 'Tablets',
      productName: 'Vitamin C',
      manufacturer: [
        {
          manufacturers: 'Pharmavit',
        },
        {
          manufacturers: 'HealthCare Innovations Ltd.',
        },
        {
          manufacturers: 'MedTech Solutions Inc.',
        },
      ],
      size: [
        {
          sizes: '1 Stripe',
        },
        {
          sizes: '2 Stripe',
        },
        {
          sizes: '3 Stripe',
        },
      ],
    },
    {
      id: 2,
      category: 'Tablets',
      productName: 'MediTech Pro',
      manufacturer: [
        {
          manufacturers: 'Pharmavit',
        },
        {
          manufacturers: 'HealthCare Innovations Ltd.',
        },
        {
          manufacturers: 'MedTech Solutions Inc.',
        },
      ],
      size: [
        {
          sizes: '1 Stripe',
        },
        {
          sizes: '2 Stripe',
        },
        {
          sizes: '3 Stripe',
        },
      ]
    },
    {
      id: 3,
      category: 'Tablets',
      productName: 'HealthGuard Plus',
      manufacturer: [
        {
          manufacturers: 'Pharmavit',
        },
        {
          manufacturers: 'HealthCare Innovations Ltd.',
        },
        {
          manufacturers: 'MedTech Solutions Inc.',
        },
      ],
      size: [
        {
          sizes: '1 Stripe',
        },
        {
          sizes: '2 Stripe',
        },
        {
          sizes: '3 Stripe',
        },
      ]
    },
    {
      id: 4,
      category: 'Tablets',
      productName: 'VitaTab Ultra',
      manufacturer: [
        {
          manufacturers: 'LifeScience Pharmaceuticals',
        },
        {
          manufacturers: 'Wellness Labs',
        },
        {
          manufacturers: 'NatureCure Biotech',
        },
      ],
      size: [
        {
          sizes: '1 Stripe',
        },
        {
          sizes: '2 Stripe',
        },
        {
          sizes: '3 Stripe',
        },
      ]
    },
    {
      id: 5,
      category: 'Tablets',
      productName: 'CureCapsule Max',
      manufacturer: [
        {
          manufacturers: 'LifeScience Pharmaceuticals',
        },
        {
          manufacturers: 'Wellness Labs',
        },
        {
          manufacturers: 'NatureCure Biotech',
        },
      ],
      size: [
        {
          sizes: '1 Stripe',
        },
        {
          sizes: '2 Stripe',
        },
        {
          sizes: '3 Stripe',
        },
      ]
    },
    {
      id: 6,
      category: 'Tablets',
      productName: 'LifePill Essential',
      manufacturer: [
        {
          manufacturers: 'LifeScience Pharmaceuticals',
        },
        {
          manufacturers: 'Wellness Labs',
        },
        {
          manufacturers: 'NatureCure Biotech',
        },
      ],
      size: [
        {
          sizes: '1 Stripe',
        },
        {
          sizes: '2 Stripe',
        },
        {
          sizes: '3 Stripe',
        },
      ]
    },
    {
      id: 7,
      category: 'Tablets',
      productName: 'BioVita Gold',
      manufacturer: [
        {
          manufacturers: 'Pharmavit',
        },
        {
          manufacturers: 'NutraLife Technologies',
        },
      ],
      size: [
        {
          sizes: '1 Stripe',
        },
        {
          sizes: '2 Stripe',
        },
        {
          sizes: '3 Stripe',
        },
      ]
    },
    {
      id: 8,
      category: 'Tablets',
      productName: 'NutriCaps Advanced',
      manufacturer: [
        {
          manufacturers: 'Pharmavit',
        },
        {
          manufacturers: 'NutraLife Technologies',
        },
      ],
      size: [
        {
          sizes: '1 Stripe',
        },
        {
          sizes: '2 Stripe',
        },
        {
          sizes: '3 Stripe',
        },
      ]
    },
    {
      id: 9,
      category: 'Tablets',
      productName: 'VitalEase',
      manufacturer: [
        {
          manufacturers: 'MedEase Corp.',
        },
        {
          manufacturers: 'NutraLife Technologies',
        },
      ],
      size: [
        {
          sizes: '1 Stripe',
        },
        {
          sizes: '2 Stripe',
        }
      ]
    },
    {
      id: 10,
      category: 'Tablets',
      productName: 'PureHealth Tablets',
      manufacturer: [
        {
          manufacturers: 'HealthPure Labs',
        },
        {
          manufacturers: 'NutraLife Technologies',
        },
      ],
      size: [
        {
          sizes: '1 Stripe',
        },
        {
          sizes: '2 Stripe',
        },
        {
          sizes: '3 Stripe',
        },
      ]
    },
    {
      id: 11,
      category: 'Tablets',
      productName: 'WellnessWave',
      manufacturer: [
        {
          manufacturers: 'HealthPure Labs',
        },
        {
          manufacturers: 'WaveLife Pharma',
        },
      ],
      size: [
        {
          sizes: '1 Stripe',
        },
        {
          sizes: '2 Stripe',
        },
        {
          sizes: '3 Stripe',
        },
      ]
    },
    {
      id: 12,
      category: 'Syrups',
      productName: 'CoughEx',
      manufacturer: [
        {
          manufacturers: 'PharmaRelief',
        },
        {
          manufacturers: 'WaveLife Pharma',
        },
      ],
      size: [
        {
          sizes: '50 ML',
        },
        {
          sizes: '80 ML',
        },
        {
          sizes: '150 ML',
        },
      ]
    },
    {
      id: 13,
      category: 'Syrups',
      productName: 'SootheCough',
      manufacturer: [
        {
          manufacturers: 'PharmaRelief',
        },
        {
          manufacturers: 'WaveLife Pharma',
        },
      ],
      size: [
        {
          sizes: '50 ML',
        },
        {
          sizes: '80 ML',
        },
        {
          sizes: '150 ML',
        },
      ]
    },
    {
      id: 14,
      category: 'Syrups',
      productName: 'FluGone',
      manufacturer: [
        {
          manufacturers: 'PharmaRelief',
        },
        {
          manufacturers: 'QuickRelief Pharma',
        },
      ],
      size: [
        {
          sizes: '50 ML',
        },
        {
          sizes: '80 ML',
        },
        {
          sizes: '150 ML',
        },
      ]
    },
    {
      id: 15,
      category: 'Syrups',
      productName: 'ColdRelief',
      manufacturer: [
        {
          manufacturers: 'PharmaRelief',
        },
        {
          manufacturers: 'QuickRelief Pharma',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '50 ML',
        },
        {
          sizes: '80 ML',
        },
        {
          sizes: '150 ML',
        },
      ]
    },
    {
      id: 16,
      category: 'Syrups',
      productName: 'CoughEase',
      manufacturer: [
        {
          manufacturers: 'BioCure Pharmaceuticals',
        },
        {
          manufacturers: 'QuickRelief Pharma',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '50 ML',
        },
        {
          sizes: '80 ML',
        },
        {
          sizes: '150 ML',
        },
      ]
    },
    {
      id: 17,
      category: 'Syrups',
      productName: 'ThroatSoothe',
      manufacturer: [
        {
          manufacturers: 'BioCure Pharmaceuticals',
        },
        {
          manufacturers: 'MediCalm Corp.',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '50 ML',
        },
        {
          sizes: '80 ML',
        },
        {
          sizes: '150 ML',
        },
      ]
    },
    {
      id: 18,
      category: 'Injections',
      productName: 'HealthBoost Injectable',
      manufacturer: [
        {
          manufacturers: 'BioCure Pharmaceuticals',
        },
        {
          manufacturers: 'MediLife Pharmaceuticals',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '1',
        },
        {
          sizes: '2',
        }
      ]
    },
    {
      id: 19,
      category: 'Injections',
      productName: 'VitaShot Pro',
      manufacturer: [
        {
          manufacturers: 'NutraVaccines Inc.',
        },
        {
          manufacturers: 'MediLife Pharmaceuticals',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '1',
        },
        {
          sizes: '2',
        }
      ]
    },
    {
      id: 20,
      category: 'Injections',
      productName: 'BioInj Advanced',
      manufacturer: [
        {
          manufacturers: 'BioTech Therapeutics Ltd.',
        },
        {
          manufacturers: 'MediLife Pharmaceuticals',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '1',
        },
        {
          sizes: '2',
        }
      ]
    },
    {
      id: 21,
      category: 'Injections',
      productName: 'WellnessInject Max',
      manufacturer: [
        {
          manufacturers: 'BioTech Therapeutics Ltd.',
        },
        {
          manufacturers: 'HealthGuard Biotech',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '1',
        },
        {
          sizes: '2',
        }
      ]
    },
    {
      id: 22,
      category: 'Injections',
      productName: 'NutriDrip Elite',
      manufacturer: [
        {
          manufacturers: 'BioTech Therapeutics Ltd.',
        },
        {
          manufacturers: 'HealthGuard Biotech',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '1',
        },
        {
          sizes: '2',
        }
      ]
    },
    {
      id: 23,
      category: 'Injections',
      productName: 'PureFlow Inject',
      manufacturer: [
        {
          manufacturers: 'BioTech Therapeutics Ltd.',
        },
        {
          manufacturers: 'HealthGuard Biotech',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '1',
        },
        {
          sizes: '2',
        }
      ]
    },
    {
      id: 24,
      category: 'Injections',
      productName: 'ReviveShot Gold',
      manufacturer: [
        {
          manufacturers: 'BioTech Therapeutics Ltd.',
        },
        {
          manufacturers: 'HealthGuard Biotech',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '1',
        },
        {
          sizes: '2',
        }
      ]
    },
    {
      id: 25,
      category: 'Injections',
      productName: 'VitalInfuse Plus',
      manufacturer: [
        {
          manufacturers: 'BioTech Therapeutics Ltd.',
        },
        {
          manufacturers: 'HealthGuard Biotech',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '1',
        },
        {
          sizes: '2',
        }
      ]
    },
    {
      id: 26,
      category: 'Injections',
      productName: 'EcoPure Injections',
      manufacturer: [
        {
          manufacturers: 'BioTech Therapeutics Ltd.',
        },
        {
          manufacturers: 'HealthGuard Biotech',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '1',
        },
        {
          sizes: '2',
        }
      ]
    },
    {
      id: 27,
      category: 'Injections',
      productName: 'OptiFlow Injector',
      manufacturer: [
        {
          manufacturers: 'OptiHealth Solutions',
        },
        {
          manufacturers: 'HealthGuard Biotech',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '1',
        },
        {
          sizes: '2',
        }
      ]
    },
    {
      id: 28,
      category: 'Capsules',
      productName: 'CapsiHealth Omega',
      manufacturer: [
        {
          manufacturers: 'OptiHealth Solutions',
        },
        {
          manufacturers: 'HealthWell Labs Inc.',
        }
      ],
      size: [
        {
          sizes: '5 pieces',
        },
        {
          sizes: '10 pieces',
        },
        {
          sizes: '15 pieces',
        }
      ]
    },
    {
      id: 29,
      category: 'Capsules',
      productName: 'VitaCaps Pro',
      manufacturer: [
        {
          manufacturers: 'NutriLife Pharmaceuticals',
        },
        {
          manufacturers: 'HealthWell Labs Inc.',
        }
      ],
      size: [
        {
          sizes: '5 pieces',
        },
        {
          sizes: '10 pieces',
        },
        {
          sizes: '15 pieces',
        }
      ]
    },
    {
      id: 30,
      category: 'Capsules',
      productName: 'BioCaps Advanced',
      manufacturer: [
        {
          manufacturers: 'NutriLife Pharmaceuticals',
        },
        {
          manufacturers: 'HealthWell Labs Inc.',
        }
      ],
      size: [
        {
          sizes: '5 pieces',
        },
        {
          sizes: '10 pieces',
        },
        {
          sizes: '15 pieces',
        }
      ]
    },
    {
      id: 31,
      category: 'Capsules',
      productName: 'WellnessCaps Max',
      manufacturer: [
        {
          manufacturers: 'NutriLife Pharmaceuticals',
        },
        {
          manufacturers: 'HealthWell Labs Inc.',
        }
      ],
      size: [
        {
          sizes: '5 pieces',
        },
        {
          sizes: '10 pieces',
        },
        {
          sizes: '15 pieces',
        }
      ]
    },
    {
      id: 32,
      category: 'Capsules',
      productName: 'NutraPill Elite',
      manufacturer: [
        {
          manufacturers: 'NutriLife Pharmaceuticals',
        },
        {
          manufacturers: 'NutriVita Corp.',
        }
      ],
      size: [
        {
          sizes: '5 pieces',
        },
        {
          sizes: '10 pieces',
        },
        {
          sizes: '15 pieces',
        }
      ]
    },
    {
      id: 33,
      category: 'Capsules',
      productName: 'PureLife Capsules',
      manufacturer: [
        {
          manufacturers: 'BioTech Therapeutics Ltd.',
        },
        {
          manufacturers: 'HealthGuard Biotech',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '5 pieces',
        },
        {
          sizes: '10 pieces',
        },
        {
          sizes: '15 pieces',
        }
      ]
    },
    {
      id: 34,
      category: 'Capsules',
      productName: 'ReviveCaps Gold',
      manufacturer: [
        {
          manufacturers: 'BioTech Therapeutics Ltd.',
        },
        {
          manufacturers: 'HealthGuard Biotech',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '5 pieces',
        },
        {
          sizes: '10 pieces',
        },
        {
          sizes: '15 pieces',
        }
      ]
    },
    {
      id: 35,
      category: 'Capsules',
      productName: 'VitalBlend Caps',
      manufacturer: [
        {
          manufacturers: 'BioTech Therapeutics Ltd.',
        },
        {
          manufacturers: 'VitalHealth Inc.',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '5 pieces',
        },
        {
          sizes: '10 pieces',
        },
        {
          sizes: '15 pieces',
        }
      ]
    },
    {
      id: 36,
      category: 'Capsules',
      productName: 'EcoGreen Capsules',
      manufacturer: [
        {
          manufacturers: 'EcoLife Wellness',
        }
      ],
      size: [
        {
          sizes: '5 pieces',
        },
        {
          sizes: '10 pieces',
        },
        {
          sizes: '15 pieces',
        }
      ]
    },
    {
      id: 37,
      category: 'Capsules',
      productName: 'OptiCaps Plus',
      manufacturer: [
        {
          manufacturers: 'OptiHealth Solutions',
        },
        {
          manufacturers: 'VitalHealth Inc.',
        },
        {
          manufacturers: 'ColdCare Labs'
        }
      ],
      size: [
        {
          sizes: '5 pieces',
        },
        {
          sizes: '10 pieces',
        },
        {
          sizes: '15 pieces',
        }
      ]
    }
  ];
  constructor(public app: AppComponent, public router: Router) { }

  ionViewWillEnter() {
    this.app.ind = 2;
    this.Addpage = 1
    this.app.loader = true
    setTimeout(() => {
      this.app.loader = false
    }, 500)
    
    const localInventory: any = localStorage.getItem('InventoryData');
    console.log(localInventory);
    if (JSON.parse(localInventory) == null) {
      localStorage.setItem('InventoryData', JSON.stringify(this.localData))
    }
  }

  See(data: any) {
    this.router.navigate(['/' + data]);
  }

}
