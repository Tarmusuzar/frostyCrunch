<template>
    <div>
      <canvas ref="lineChart"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    data() {
      return {
        chartData: {
          labels: Array.from({ length: 32 }, (_, index) => (index + 1).toString()),
          datasets: [
            {
              label: 'Sales Data',
              borderColor: '#3498db',
              data: this.generateRandomData(),
              fill: false,
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Days',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Sales',
              },
            },
          },
        },
      };
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.lineChart.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'line',
          data: this.chartData,
          options: this.chartOptions,
        });
      },
      generateRandomData() {
        // Replace this with your actual logic for the y-axis (e.g., using real data)
        return Array.from({ length: 32 }, () => Math.floor(Math.random() * 300)); // Adjust this based on your data range
      },
    },
    watch: {
      chartData: {
        handler() {
          this.chart.destroy();
          this.renderChart();
        },
        deep: true,
      },
    },
  };
  </script>
  
  <style>
  canvas {
    width: 100%;
    max-width: 600px; /* Set your preferred max-width for small screens */
    height: 300px;
  }
  </style>
  