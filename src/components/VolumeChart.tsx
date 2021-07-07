import React from 'react'
import { Bar } from 'react-chartjs-2'
import { chartOptions } from '../utils/chartOptions'

export interface Volumes{
    dailyVolumes: string,
    weeklyVolumes: string,
    yearlyVolumes: string
}
interface IVolumes{
    volumes : Volumes
    id: string
}
export const VolumeChart: React.FC<IVolumes> = ({volumes: {dailyVolumes, weeklyVolumes, yearlyVolumes}, id}) => {
    return (
        <div>
            <Bar data={{
                label: [],
                datasets: [{
                    label: `${id} daily volumes`,
                    backgroundColor: "rgba(199, 101, 255, 0.3)",
                    borderColor: "rgb(2, 121, 177)",
                    pointRadius: 0,
                    borderWidth: 1,
                    data: dailyVolumes
                }]
            }} options={chartOptions} width={800} height={250} />
        </div>
    )
}

export default VolumeChart
