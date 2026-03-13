export const colors = {
  primary: {
    main: "#1E3A8A",
    hover: "#1E40AF",
    light: "#3B82F6",
    extraLight: "#DBEAFE",
  },

  neutral: {
    background: "#F8FAFC",
    card: "#FFFFFF",
    border: "#E5E7EB",
    textPrimary: "#111827",
    textSecondary: "#6B7280",
  },

  status: {
    success: "#16A34A",
    error: "#DC2626",
    warning: "#F5590B",
    info: "#0EA5E9",
  },

  chart: {
    revenue: "#2563EB",
    expenses: "#EF4444",
    profit: "#22C55E",
    neutral: "#64748B",
  },
} as const;

export type Colors = typeof colors;
