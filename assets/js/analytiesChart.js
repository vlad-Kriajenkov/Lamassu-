/* График Статистика Оперций*/

const ctx = document.getElementById('operationStatisticsСhart').getContext('2d');
const operationStatisticsСhart = new Chart(ctx, {
        type: 'line',
        data:  {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', ],
        datasets: [{
            label: 'In',
            data: [48, 61, 23, 7, 4, 44, 72, 80, 3, 99, 49, 61, 1, 1, 73, 56, 39, 86, 62, 20, 97, 19, 7, 35, 44, 37, 73, 79, 53, 58],
            backgroundColor: [
                'rgba(218, 110, 0, 1)',
                
            ],
            borderColor: [
                'rgba(218, 110, 0, 1)',
            ],
            borderWidth: 1,
            pointRadius: 1 ,
        }],
    },
    
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
          },
          scales:{
            x:{
              title: {
                display: true,
                text: 'Месяц'
              },
              grid:{
                display: false,
              }
            },
            y:{
              title: {
                display: true,
                text: 'Кол-во Операций',
              },
              grid:{
                display: false,
              }
            },
            
          }
        },
});


/*  График  Прибыль от Комисии      */
const ctx2 = document.getElementById('profitFromCommissionСhart').getContext('2d');
const profitFromCommissionСhart = new Chart(ctx2, {
  
        type: 'line',
        data:  { 
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', ],
        datasets: [{
            label: 'Операций',
            data: [46, 21, 43, 30, 17, 99, 68, 55, 63, 20, 53, 29, 12, 22, 33, 4, 62, 81, 74, 58, 16, 67, 89, 71, 15, 35, 34, 56, 19, 73],
            borderColor: [
                'rgba(34, 43, 94, 1)',
            ],
            borderWidth: 1,
            pointRadius: 1 
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
              
            },
          },
          scales: {
            y:{
              suggestedMax: 200,
              title: {
                display: true,
                text: 'Кол-во Операций'
              },
              grid:{
              display: false,
           },
          },
          x:{
            title: {
              display: true,
              text: 'Месяц'
            },
            grid:{
            display: false,
          }
        },
        
      },
    }
});

/*  График  Статистика марженальности      */
const ctx3 = document.getElementById('marginStatisticsChart').getContext('2d');
const marginStatisticsChart = new Chart(ctx3, {
  
        type: 'line',
        data:  { 
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [{
            label: 'Truck 1. Средний чек Операции',
            data: [46, 21, 43, 30, 17, 99, 68, 55, 63, 20, 53, 29, 12, 22, 33, 4, 62, 81, 74, 58, 16, 67, 89, 71, 15, 35, 34, 56, 19, 73],
           
            borderColor: [
                'rgba(34, 43, 94, 1)',
            ],
            borderWidth: 1,
            pointRadius: 1 
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
              
            },
          },
          scales: {
            y:{
              
              title: {
                display: true,
                text: 'Основной Показатель (Средний чек)'
              },
              suggestedMax: 200,
              grid:{
              display: false,
           },
          },
          x:{
            title: {
              display: true,
              text: 'Показатель Маржинальности'
            },
            grid:{
            display: false,
          }
        },
        
      },
    }
});
/* График Недельная Операция*/
const ctx4 = document.getElementById('weeklyOperationChart').getContext('2d');
const weeklyOperationChart = new Chart(ctx4, {
  
        type: 'bar',
        data:  { labels: ['Понедельник','Вторник','Среда','Четверг','Пятница','Субота','Воскресенье ', ],
        datasets: [{
            label: 'truck 1. кол-во Оперций',
            data: [46, 21, 43, 30, 17, 99, 68],
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
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
              
            },
          },
          scales: {
            y:{
              title:{
                display: true,
                text:'Кол-во Операций'
              },
              suggestedMax: 200,
              grid:{
              display: false,
           },
          },
          x:{
            grid:{
            display: false,
          }
        },
        
      },
    }
});

/*  График  Сравнение по периодам    */
const ctx5 = document.getElementById('periodComparison').getContext('2d');
const periodComparison = new Chart(ctx5, {
  
        type: 'line',
        data:  { labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', ],
        datasets: [{
            label: 'Сумма операция в USD',
            data: [46, 21, 43, 30, 17, 99, 68, 55, 63, 20, 53, 29, 12, 22, 33, 4, 62, 81, 74, 58, 16, 67, 89, 71, 15, 35, 34, 56, 19, 73],
            borderColor: [
                'rgba(34, 43, 94, 1)',
            ],
            borderWidth: 1,
            pointRadius: 1 
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
              
            },
          },
          scales: {
            y:{
              ticks: {
                callback: function(value,) {
                    return  value + ' $';
                }
              },
              suggestedMax: 200,
              title: {
                display: true,
                text: 'Сумма операция в USD'
              },
              grid:{
              display: false,
           },
          },
          x:{
            title: {
              display: true,
              text: 'Месяц'
            },
            grid:{
            display: false,
          }
        },
        
      },
    }
});
