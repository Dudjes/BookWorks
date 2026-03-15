import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import { colors } from './Theme/colors'

const root = document.documentElement;

root.style.setProperty('--color-primary-main', colors.primary.main);
root.style.setProperty('--color-primary-hover', colors.primary.hover);
root.style.setProperty('--color-primary-light', colors.primary.light);
root.style.setProperty('--color-primary-extra-light', colors.primary.extraLight);

root.style.setProperty('--color-neutral-background', colors.neutral.background);
root.style.setProperty('--color-neutral-card', colors.neutral.card);
root.style.setProperty('--color-neutral-border', colors.neutral.border);
root.style.setProperty('--color-neutral-text-primary', colors.neutral.textPrimary);
root.style.setProperty('--color-neutral-text-secondary', colors.neutral.textSecondary);

root.style.setProperty('--color-status-success', colors.status.success);
root.style.setProperty('--color-status-error', colors.status.error);
root.style.setProperty('--color-status-warning', colors.status.warning);
root.style.setProperty('--color-status-info', colors.status.info);

root.style.setProperty('--color-chart-revenue', colors.chart.revenue);
root.style.setProperty('--color-chart-expenses', colors.chart.expenses);
root.style.setProperty('--color-chart-profit', colors.chart.profit);
root.style.setProperty('--color-chart-neutral', colors.chart.neutral);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
