import { post } from '../../../http';

export const createExpense = expenseData => post('/expenses', expenseData);
