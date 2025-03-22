document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('trendChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 22 }, (_, i) => i.toString()),
            datasets: [
                {
                    label: 'Today',
                    data: [5, 8, 12, 20, 15, 18, 22, 30, 28, 25, 19, 15, 20, 30, 38, 35, 29, 22, 20, 18, 15, 12],
                    borderColor: '#4f46e5',
                    backgroundColor: 'rgba(79, 70, 229, 0.05)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                },
                {
                    label: 'Yesterday',
                    data: [3, 5, 10, 13, 10, 12, 17, 24, 20, 19, 14, 13, 15, 21, 26, 28, 24, 20, 18, 16, 13, 10],
                    borderColor: '#9ca3af',
                    backgroundColor: 'rgba(156, 163, 175, 0.05)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        usePointStyle: true,
                        boxWidth: 10
                    }
                },
                tooltip: {
                    intersect: false,
                    mode: 'index'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 10
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
});
