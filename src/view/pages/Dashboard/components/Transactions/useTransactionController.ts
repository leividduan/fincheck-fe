import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionController() {
  const { areValuesVisible } = useDashboard();

  return {
    areValuesVisible,
    transactions: [],
    isInitialLoading: false,
    isLoading: true,
  };
}