import { bookingTypes } from "../types";

const { BOOKING } = bookingTypes


export const booking = ({ date, guest }) => ({
    type: BOOKING,
    date: date,
    guest: guest
})

