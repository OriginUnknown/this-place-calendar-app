import { ActionReducerMap } from '@ngrx/store';
import { CalendarState } from './model/calendar.model';
import * as fromCalendarReducer from './reducers/calendar.reducer';

export * from './actions';
export * from './reducers';
export { CalendarState } from '../store/model/calendar.model';

// AppState interface is a consolidation of each of the domain state's interfaces
export interface AppState {
    readonly calendar: CalendarState;
}

// the AppReducer is maps the relevant reducers to the domain states
export const calendarReducers: ActionReducerMap<AppState> = {
    calendar: fromCalendarReducer.reducer
};

