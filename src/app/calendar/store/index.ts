import { ActionReducerMap } from '@ngrx/store';
import { CalendarState } from './model/calendar.model';
import * as fromCalendarReducer from './reducers/calendar.reducer';

export * from './actions';
export * from './reducers';
export * from './selectors';
export { CalendarState } from '../store/model/calendar.model';

export interface CalendarAppState {
    readonly calendar: CalendarState;
}

export const calendarReducers: ActionReducerMap<CalendarAppState> = {
    calendar: fromCalendarReducer.reducer
};

