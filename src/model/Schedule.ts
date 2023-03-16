interface Speaker {
    name: string
    company: string
    title?: string
    about?: string
}

interface Slot {
    time: string
    bookings: Booking[]
}

export interface Booking {
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