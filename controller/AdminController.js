import DashboardAction from "../actions/admin/AnalyticsAction.js";

export const Dashboard = async (req, res) => {
    await DashboardAction(req, res);
};