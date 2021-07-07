export const chartOptions = {
    lineHeightAnnotation: {
        always: true,
        hover: false,
        lineWeight: 1.5
    },
    animation: {
        duration: 3000
    },
    maintainAspectRation: true,
    responsive: true,
    scales: {
        xAxes: [{
            type: "time",
            distribution: "linear"
        }]
    }
}