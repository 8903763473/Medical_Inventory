import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
// import { Chart } from 'chart.js/auto';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  Table1: any = [
    {
      "name": "Abilify",
      "manufacture": "PureLife Pharmaceuticals",
      "Quantity": 233,
      "purchasedate": "2020 Mar 16",
      "expairdat": "2024 June 05"
    },
    {
      "name": "Adderall",
      "manufacture": "VitaCare Solutions",
      "Quantity": 123,
      "purchasedate": "2023 Dec 22",
      "expairdat": "2012 Mar 16"
    },
    {
      "name": "Azel",
      "manufacture": "BioMed Innovations",
      "Quantity": 236,
      "purchasedate": "2021 Dec 28",
      "expairdat": "2024 Mar 11"
    },
    {
      "name": "Actos",
      "manufacture": "HealthTech Laboratories",
      "Quantity": 69,
      "purchasedate": "2020 Feb 13",
      "expairdat": "2024 May 30"
    },
    {
      "name": "Actemra",
      "manufacture": "MediCo Pharmaceuticals",
      "Quantity": 21,
      "purchasedate": "2023 Dec 19",
      "expairdat": "2024 Mar 09"
    }
  ]

  Table2: any = [
    {
      name: "Paracetamol",
      manufacture: "ABC Pharmaceuticals",
      Quantity: "100 tablets",
      purchasedate: "2022 Dec 11",
      expairdat: "2024 Mar 02"
    },
    {
      name: "Ibuprofen",
      manufacture: "XYZ Pharma",
      Quantity: "50 capsules",
      purchasedate: "2022 Mar 29",
      expairdat: "2024 Apr 28"
    },
    {
      name: "Amoxicillin",
      manufacture: "PQR Pharmaceuticals",
      Quantity: "20 tablets",
      purchasedate: "2021 Apr 10",
      expairdat: "2024 May 02"
    },
    {
      name: "Loratadine",
      manufacture: "LMN Pharma",
      Quantity: "30 tablets",
      purchasedate: "2020 Oct 10",
      expairdat: "2024 June 10"
    },
    {
      name: "Omeprazole",
      manufacture: "EFG Pharmaceuticals",
      Quantity: "40 capsules",
      purchasedate: "2022 May 28",
      expairdat: "2024 Oct 08"
    }
  ]

  Table3: any = [
    {
      "name": "HealWell Tablets",
      "manufacture": "PureCare Pharmaceuticals",
      "Quantity": 32,
      "purchasedate": "2023 Dec 31",
      "expairdat": "2024 June 29"
    },
    {
      "name": "BioGuard Capsules",
      "manufacture": "BioGen Medical",
      "Quantity": 20,
      "purchasedate": "2020 Oct 29 ",
      "expairdat": "2024 July 18"
    },
    {
      "name": "PureRelief Injection",
      "manufacture": "WellnessTech Pharmaceuticals",
      "Quantity": 76,
      "purchasedate": "2022 Nov 23",
      "expairdat": "2024 Apr 09"
    },
    {
      "name": "VitaCure Syrup",
      "manufacture": "VitalHealth Labs",
      "Quantity": 16,
      "purchasedate": "2023 Feb 11",
      "expairdat": "2024 Aug 20"
    },
    {
      "name": "BioFlex Plus",
      "manufacture": "MediPharm Solutions",
      "Quantity": 45,
      "purchasedate": "2024 Jan 01",
      "expairdat": "2024 Sep 23"
    }
  ]

  @Input() BarcanvasId: any;
  @Input() LinecanvasId: any;
  @Input() data: number[] = [95, 120, 155, 230, 100];
  @Input() labels: string[] = ['Vita', 'Heal', 'Cure', 'BioX', 'Pure'];

  @Input() data1: number[] = [-110, 10, 185, 280, 190, 180, -130, 59, 145, -20, 210, 150];
  @Input() data2: any[] = [-110, 170, 20, -100, 90, 60, -40, 100, 20, -220, 110, 60];

  @Input() data3: any[] = [-0, -170, 20, 200, 50, 160, 10, 90, 150, 20, 180, 160];
  @Input() data4: any[] = [-0, 100, 120, 95, 130, 70, 140, 90, 150, 30, 180, 10];


  @Input() labels1: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  @Input() labels2: string[] = ['2021', '2022', '2023', '2024'];

  @ViewChild('BarchartCanvas') BarchartCanvas: ElementRef | any;
  @ViewChild('LinechartCanvas') LinechartCanvas: ElementRef | any;


  private barChartInstance: Chart | null = null;
  private lineChartInstance: Chart | null = null;


  screenHeight: any
  screenWidth: any

  constructor(public app: AppComponent) {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.BarChart();
    this.LineChart();
  }



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


  ionViewWillEnter() {
    this.app.ind = 1
    localStorage.setItem('InventoryData', JSON.stringify(this.localData));

    this.app.loader = true
    setTimeout(() => {
      this.app.loader = false
    }, 500)


    // this.app.loader = true
    this.BarChart();
    this.LineChart();
    this.FetchScreenHeight()
  }


  FetchScreenHeight() {
    this.screenHeight = window.innerHeight
    this.screenWidth = window.innerWidth

    setTimeout(() => {
      this.FetchScreenHeight()
    }, 500)
  }



  private BarChart(): void {
    const ctx = this.BarchartCanvas?.nativeElement?.getContext('2d');

    if (ctx) {

      if (this.barChartInstance) {
        this.barChartInstance.destroy();
      }

      const datasetProperties = {
        borderColor: 'transparent',
        borderWidth: 0,
        fill: false,
        barThickness: 25,
        borderRadius: 6,
      };

      const chartOptions = {
        scales: {
          y: {
            beginAtZero: true,
            stacked: false,
            ticks: {
              callback: (value: any, index: any, values: any) => {
                if (index === 0 || index === values.length - 1 || index === Math.floor(values.length / 2)) {
                  return value.toLocaleString();
                } else {
                  return '';
                }
              }
            }
          },
          x: {
            beginAtZero: true,
            stacked: true,
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const label = context.dataset.label || 'Bar';
                const chartValue = context.parsed.y || 0;
                return label + ': ' + chartValue.toLocaleString();
              }
            }
          },
        },
        animation: {
          onComplete: (context: any) => {
            const chartInstance = context.chart;
            const chartCtx = chartInstance.ctx;

            chartInstance.data.datasets.forEach((dataset: any, i: any) => {
              const meta = chartInstance.getDatasetMeta(i);
              meta.data.forEach((point: any, index: any) => {
                const chartData = dataset.data[index];
                if (chartData !== null && chartData !== 0) {
                  const xPos = point.x;
                  const yPos = point.y - 10;

                  chartCtx.fillStyle = 'black';
                  chartCtx.font = 'bold 12px sans-serif';
                  chartCtx.textAlign = 'center';
                  chartCtx.textBaseline = 'middle';
                  // chartCtx.fillText(chartData.toLocaleString(), xPos, yPos);     // Values Displayed here
                }
              });
            });
          }
        }
      };

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [{
            ...Object.assign({}, datasetProperties),
            label: 'Quantity',
            data: this.data,
            backgroundColor: '#0F82FF', // Set Revenue color
            barPercentage: 1.0,
            categoryPercentage: 1.0,
          }],
        },
        options: Object.assign({}, chartOptions),
      });
    }
  }

  private LineChart(): void {
    const ctx = this.LinechartCanvas.nativeElement.getContext('2d');

    if (ctx) {
      const datasetProperties = {
        borderWidth: 2,
        fill: false,
      };

      const chartOptions = {
        scales: {
          y: {
            beginAtZero: false, // Set to false to allow displaying years
            stacked: false,
            ticks: {
              stepSize: 1, // Each step represents one year
              callback: (value: any, index: any, values: any) => {
                return value; // Set the label to 'Year' + the year value
              }
            }
          },
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Month'
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const label = context.dataset.label || 'Line';
                const chartValue = context.parsed.y || 0;
                return label + ': ' + chartValue.toLocaleString();
              }
            }
          },
        },
        animation: {
          onComplete: (context: any) => {
            const chartInstance = context.chart;
            const chartCtx = chartInstance.ctx;

            chartInstance.data.datasets.forEach((dataset: any, i: any) => {
              const meta = chartInstance.getDatasetMeta(i);
              meta.data.forEach((point: any, index: any) => {
                const chartData = dataset.data[index];
                if (chartData !== null && chartData !== 0) {
                  const xPos = point.x;
                  const yPos = point.y;

                  chartCtx.fillStyle = 'black';
                  chartCtx.font = 'bold 12px sans-serif';
                  chartCtx.textAlign = 'center';
                  chartCtx.textBaseline = 'middle';
                }
              });
            });
          }
        }
      };

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              ...Object.assign({}, datasetProperties),
              label: '2021',
              data: [1200, 1300, 1100, 1400, 1250, 1350, 1150, 1450, 1225, 1325, 1125, 1425], // Example data for yearly loss for 2021
              borderColor: 'grey',
            },

            {
              ...Object.assign({}, datasetProperties),
              label: '2022',
              data: [1300, 1400, 1200, 1500, 1350, 1450, 1250, 1550, 1325, 1425, 1225, 1525], // Example data for yearly loss for 2022
              borderColor: '#FFC300',
            },

            {
              ...Object.assign({}, datasetProperties),
              label: '2023',
              data: [1150, 1250, 1050, 1350, 1200, 1300, 1100, 1400, 1175, 1275, 1075, 1375], // Example data for yearly loss for 2023
              borderColor: '#009dff',
            },

            {
              ...Object.assign({}, datasetProperties),
              label: '2024',
              data: [1100, 1200, 1000, 1300, 1150, 1250, 1050, 1350, 1125, 1225, 1025, 1325], // Example data for yearly loss for 2024
              borderColor: '#FF5733',
            }
          ],
        },
        options: Object.assign({}, chartOptions),
      });
    }
  }



  private createWaveData(length: number, amplitude: number): number[] {
    const waveData = [];
    const pointsPerCycle = 100;

    for (let i = 0; i < length; i++) {
      const theta = (i / (length - 1)) * Math.PI * 2 * pointsPerCycle;
      const y = Math.sin(theta) * amplitude;
      waveData.push(y);
    }
    return waveData;
  }


}
