interface Speaker {
    name: string
    company: string
}

interface Slot {
    time: string
    bookings: Booking[]
}

interface Booking {
    title: string
    description?: string
    speakers?: Speaker[]
    room?: string
}

export interface Schedule {
    openingKeynote: Booking
    closingKeynote: Booking
    slots: Slot[]
}