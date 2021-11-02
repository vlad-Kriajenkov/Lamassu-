/* График Статистика Оперций*/

const ctx = document.getElementById('operationStatisticsСhart').getContext('2d');
const operationStatisticsСhart = new Chart(ctx, {
        type: 'bubble',
        data:  {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', ],
        datasets: [{
            label: 'In',
            data: [48, 61, 23, 7, 4, 44, 72, 80, 3, 99, 49, 61, 1, 1, 73, 56, 39, 86, 62, 20, 97, 19, 7, 35, 44, 37, 73, 79, 53, 58],
            backgroundColor: [
                'rgba(91, 104, 255)',
                
            ],
            borderColor: [
                'rgba(34, 43, 94, 1)',
            ],
            borderWidth: 1
        },{
          label: 'Out',
            data: [1, 90, 71, 74, 7, 31, 96, 81, 20, 9, 76, 40, 40, 95, 89, 4, 52, 75, 36, 11, 67, 90, 70, 59, 36, 49, 23, 87, 64, 64],
            backgroundColor: [
                'rgba(89, 224, 224)',
            ],
            borderColor: [
                'rgba(34, 43, 94, 1)',
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
          },
          scales:{
            x:{
              title: {
                display: true,
                text: 'Месяц'
              },
            },
            y:{
              title: {
                display: true,
                text: 'Кол-во Операций',
              },
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