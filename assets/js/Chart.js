const ctx = document.getElementById('bubbleChart').getContext('2d');
const bubbleChart = new Chart(ctx, {
        type: 'bubble',
        data:  {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', ],
        
        datasets: [{
            label: 'of Votes',
            data: [36, 48, 34, 50, 11, 56, 87, 3, 32, 92, 70, 23, 91, 25, 19, 22, 43, 97, 55, 41, 52, 74, 81, 20, 40, 83, 38, 9, 93, 15, 96, 86, 6, 21, 42, 53, 59, 16, 10, 33, 76, 39, 60, 85, 94, 68, 45, 54, 44, 57],
            backgroundColor: [
                'rgba(91, 104, 255)',
                'rgba(89, 224, 224)',

            ],
            borderColor: [
                'rgba(34, 43, 94, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',bubbleChart
                // 'rgba(153, 102, 255, 1)',lineChart
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
    },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
            // title: {
            //   display: true,
            //   position: 'top',
            //   text: 'Операции'
            // }
          }
        },
});

const ctx2 = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx2, {
  
        type: 'line',
        data:  { labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', ],
        datasets: [{
            label: 'of Votes',
            data: [46, 21, 43, 30, 17, 99, 68, 55, 63, 20, 53, 29, 12, 22, 33, 4, 62, 81, 74, 58, 16, 67, 89, 71, 15, 35, 34, 56, 19, 73],
            // backgroundColor: [
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 159, 64, 0.2)'
            // ],
            borderColor: [
                'rgba(34, 43, 94, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
    },
        options: {
          responsive: true,
          y:{
            suggestedMax: 200,
          },
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: false,
              
            },
          },
          scales: {
            y:{
              grid:{
              display: false,
           },
          },
          x:{
            grid:{
            display: false,
          }
        }
      },
    }
});