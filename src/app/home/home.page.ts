import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  @Input() BarcanvasId: any;
  @Input() LinecanvasId: any;
  @Input() data: number[] = [95, 120, 155, 230, 100, 200, 137];
  @Input() data1: number[] = [210, 110, 185, 280, 190, 120, 90, 89, 145, 200, 210, 100];
  @Input() labels: string[] = ['Vita', 'Heal', 'Cure', 'BioX'];
  @Input() labels1: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  @ViewChild('BarchartCanvas') BarchartCanvas: ElementRef | undefined;
  @ViewChild('LinechartCanvas') LinechartCanvas: ElementRef | undefined;


  private barChartInstance: Chart | null = null;
  private lineChartInstance: Chart | null = null;


  constructor(public app: AppComponent) { }

  ngAfterViewInit(): void {
    this.BarChart();
    this.LineChart();
  }

  ionViewWillEnter() {
    this.app.ind = 1


    // this.app.loader = true
    // setTimeout(() => {
    //   this.app.loader = false
    // }, 3000)


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
    const ctx = this.LinechartCanvas?.nativeElement?.getContext('2d');

    if (ctx) {

      if (this.lineChartInstance) {
        this.lineChartInstance.destroy();
      }

      const datasetProperties = {
        borderWidth: 2, // Set the width of the line
        fill: false,
      };

      const salesGradient = ctx.createLinearGradient(0, 0, 0, 400);
      salesGradient.addColorStop(0, '#C9E3FF');
      salesGradient.addColorStop(1, 'rgba(99, 170, 248, 0.00)');

      const revenueGradient = ctx.createLinearGradient(0, 0, 0, 400);
      revenueGradient.addColorStop(0, 'transparent');
      revenueGradient.addColorStop(1, 'transparent');

      const salesWaveData = this.createWaveData(this.data1.length, 150); // Adjust the amplitude (50 in this case)
      const revenueWaveData = this.createWaveData(this.data1.length, 100); // Adjust the amplitude for the second line

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
                  // chartCtx.fillText(chartData.toLocaleString(), xPos, yPos);     // Values Displayed here
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
              data: salesWaveData,
              borderColor: '#007AFF',
              backgroundColor: salesGradient,
            },
            {
              ...Object.assign({}, datasetProperties),
              label: 'Monthly Loss',
              data: revenueWaveData,
              borderColor: '#FF5733',
              backgroundColor: revenueGradient,
            },
          ],
        },
        options: Object.assign({}, chartOptions),
      });
    }
  }

  private createWaveData(length: number, amplitude: number): number[] {
    const waveData = [];
    const pointsPerCycle = 100; // Increase the number of points for smoother curve

    for (let i = 0; i < length; i++) {
      const theta = (i / (length - 1)) * Math.PI * 2 * pointsPerCycle;
      const y = Math.sin(theta) * amplitude;
      waveData.push(y);
    }
    return waveData;
  }


}
