// @flow
/**
 * Name: tasks
 * Type: Redux Reducer
 * Description:
 */
import type { TaskActionsType } from '../../constants/ActionTypes';
import type { TasksState } from './state';
import initialState from './state';

export default function tasks(
	state: TasksState = initialState,
	action: TaskActionsType | any
): TasksState {
	console.log(state);
	switch (action.type) {
		case 'ADD_TASK':
			return [].concat(state, action.task);

		case 'REMOVE_TASK':
			state.forEach(task => {
				if (task.id === action.id) {
					task.cronJob.cancel();
				}
			});
			return state.filter(task => task.id !== action.id);

		case 'PAUSE_TASK':
			state.forEach(task => {
				if (task.id === action.id) {
					task.cronJob.cancel();
				}
			});
			return state.map(task => ({
				...task,
				enabled: task.id === action.id ? false : task.enabled
			}));

		case 'PLAY_TASK':
			state.forEach(task => {
				if (task.id === action.id) {
					task.cronJob.reschedule(task.date);
				}
			});
			return state.map(task => ({
				...task,
				enabled: task.id === action.id ? true : task.enabled
			}));

		case 'INCREMENT_TASK':
			return state.map(task => ({
				...task,
				timesRun: task.id === action.id ? task.timesRun + 1 : task.timesRun
			}));

		default:
			return state;
	}
}