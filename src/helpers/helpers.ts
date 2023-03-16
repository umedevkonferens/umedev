import { Schedule } from "@/model/Schedule";

export const extractSpeakers = (schedule: Schedule) => {
    return schedule.slots.map(slot => slot.bookings.map(booking => {
        if (booking.speakers) {
            return booking.speakers
        }
    })).flat()

}