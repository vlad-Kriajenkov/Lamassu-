const ctx = document.getElementById('bubbleChart').getContext('2d');
const bubbleChart = new Chart(ctx, {
        type: 'bubble',
        data:  { labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', ],
        datasets: [{
            label: 'of Votes',
            data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3, ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
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
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: false,
              
            }
          }
        },
      

   
});