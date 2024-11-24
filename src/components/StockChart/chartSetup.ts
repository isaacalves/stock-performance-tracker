import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale, // For the x-axis
  LinearScale, // For the y-axis
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
