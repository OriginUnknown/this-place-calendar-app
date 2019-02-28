import * as fromCalendar from '../actions/calendar.actions';
import { CalendarState, initialState } from '../model/calendar.model';
import { EventsCollection, EventsInMonth, EventDetails } from '../../model/event.model';

let month: string, date: number, eventsCollection: EventsCollection,
    selectedMonth: EventsInMonth, eventId: number;

export function reducer (
    state: CalendarState = initialState, action: fromCalendar.ActionWithPayload
    ): CalendarState {
        switch (action.type) {
            case fromCalendar.ADD_EVENT:
                month = action.payload.metadata.month;
                date = action.payload.metadata.date;
                eventsCollection = { ...state.events };
                if (eventsCollection.hasOwnProperty(month)) {
                    selectedMonth = { ...eventsCollection[month] };
                    if (selectedMonth.hasOwnProperty(date)) {
                        selectedMonth[date] = [...selectedMonth[date], action.payload];
                    }
                    if (!selectedMonth.hasOwnProperty(date)) {
                        selectedMonth[date] = [action.payload];
                    }
                    eventsCollection[month] = selectedMonth;
                } else {
                    eventsCollection[month] = {};
                    eventsCollection.month[date] = [action.payload];
                }
                return {
                    ...state,
                    events: eventsCollection
                };
            case fromCalendar.EDIT_EVENT:
                return {
                    ...state,
                    events: action.payload
                };
            case fromCalendar.DELETE_EVENT:
                eventId = action.payload.id;
                month = action.payload.metadata.month;
                date = action.payload.metadata.date;
                eventsCollection = { ...state.events };
                selectedMonth = { ...eventsCollection[month] };
                const updateSelectedEvent: Array<EventDetails> = selectedMonth[date].filter(evt => evt.id !== eventId);
                if (!updateSelectedEvent.length) {
                    delete eventsCollection[month][date];
                } else {
                    eventsCollection[month][date] = updateSelectedEvent;
                }
                return {
                    ...state,
                    events: eventsCollection
                };
            default:
                return state;
        }
}
