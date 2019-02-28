import { CalendarState } from '../model/calendar.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getCalendarState = createFeatureSelector<CalendarState>('calendar');
const getAllEvents = (state: {[key: string]: any}): CalendarState => state.calendar;
export const getCalendar = createSelector(getCalendarState, getAllEvents);

