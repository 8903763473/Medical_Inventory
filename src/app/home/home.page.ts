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
      "purchasedate": "01 Dec 2020",
      "expairdat": "01 Mar 2045"
    },
    {
      "name": "Adderall",
      "manufacture": "VitaCare Solutions",
      "Quantity": 123,
      "purchasedate": "01 Dec 2023",
      "expairdat": "01 Mar 2012"
    },
    {
      "name": "Azel",
      "manufacture": "BioMed Innovations",
      "Quantity": 236,
      "purchasedate": "01 Dec 2021",
      "expairdat": "01 Mar 2045"
    },
    {
      "name": "Actos",
      "manufacture": "HealthTech Laboratories",
      "Quantity": 69,
      "purchasedate": "01 Feb 2020",
      "expairdat": "01 May 2045"
    },
    {
      "name": "Actemra",
      "manufacture": "MediCo Pharmaceuticals",
      "Quantity": 21,
      "purchasedate": "01 Dec 2023",
      "expairdat": "01 Mar 2045"
    }
  ]

  Table2: any = [
    {
      name: "Paracetamol",
      manufacture: "ABC Pharmaceuticals",
      Quantity: "100 tablets",
      purchasedate: "2022 Dec 28",
      expairdat: "2025-03-28"
    },
    {
      name: "Ibuprofen",
      manufacture: "XYZ Pharma",
      Quantity: "50 capsules",
      purchasedate: "2022 Mar 28",
      expairdat: "2025-03-28"
    },
    {
      name: "Amoxicillin",
      manufacture: "PQR Pharmaceuticals",
      Quantity: "20 tablets",
      purchasedate: "2021 Apr 28",
      expairdat: "2025-03-28"
    },
    {
      name: "Loratadine",
      manufacture: "LMN Pharma",
      Quantity: "30 tablets",
      purchasedate: "2020 Oct 28",
      expairdat: "2025-03-28"
    },
    {
      name: "Omeprazole",
      manufacture: "EFG Pharmaceuticals",
      Quantity: "40 capsules",
      purchasedate: "2022 May 28",
      expairdat: "2025-03-28"
    }
  ]

  Table3: any = [
    {
      "name": "HealWell Tablets",
      "manufacture": "PureCare Pharmaceuticals",
      "Quantity": 32,
      "purchasedate": "01 Dec 2023",
      "expairdat": "01 June 2045"
    },
    {
      "name": "BioGuard Capsules",
      "manufacture": "BioGen Medical",
      "Quantity": 20,
      "purchasedate": "01 Dec 2020",
      "expairdat": "01 July 2045"
    },
    {
      "name": "PureRelief Injection",
      "manufacture": "WellnessTech Pharmaceuticals",
      "Quantity": 76,
      "purchasedate": "01 Dec 2022",
      "expairdat": "01 Apr 2045"
    },
    {
      "name": "VitaCure Syrup",
      "manufacture": "VitalHealth Labs",
      "Quantity": 16,
      "purchasedate": "01 Feb 2023",
      "expairdat": "01 Aug 2045"
    },
    {
      "name": "BioFlex Plus",
      "manufacture": "MediPharm Solutions",
      "Quantity": 45,
      "purchasedate": "01 Jan 2024",
      "expairdat": "01 Sep 2045"
    }
  ]

  @Input() BarcanvasId: any;
  @Input() LinecanvasId: any;
  @Input() data: number[] = [95, 120, 155, 230, 100];
  @Input() labels: string[] = ['Vita', 'Heal', 'Cure', 'BioX', 'Pure'];
  @Input() data1: number[] = [250, 110, 185, 280, 190, 120, 90, 89, 145, 200, 210, 100];
  @Input() data2: any[] = [100, 70, 80, 100, 90, 60, 40, 30, 50, 70, 80, 60];
  @Input() labels1: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  @Input() labels2: string[] = ['2021', '2022', '2023', '2024'];

  @ViewChild('BarchartCanvas') BarchartCanvas: ElementRef | any;
  @ViewChild('LinechartCanvas') LinechartCanvas: ElementRef | any;


  private barChartInstance: Chart | null = null;
  private lineChartInstance: Chart | null = null;


  constructor(public app: AppComponent) {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.BarChart();
    this.LineChart();
  }

  ionViewWillEnter() {
    this.app.ind = 1


    this.app.loader = true
    setTimeout(() => {
      this.app.loader = false
    }, 500)


    // this.app.loader = true
    this.BarChart();
    this.LineChart();
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
            beginAtZero: false,
            stacked: false,
            ticks: {
              callback: (value: any, index: any, values: any) => {
                console.log(values);
                console.log(value);
                if (values.includes(value)) {
                  return value;
                } else {
                  return '';
                }
              }
            }
          },
          x: {
            beginAtZero: true,
            stacked: true,
            title: {
              display: true,
              text: ''
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
          labels: this.labels1,
          datasets: [
            {
              ...Object.assign({}, datasetProperties),
              label: 'Yearly Loss',
              data: this.data1,
              borderColor: '#007AFF',
            },
            {
              ...Object.assign({}, datasetProperties),
              label: 'Monthly Loss',
              data: this.data2,
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
