export const url = `${process.env.VUE_APP_SOCKET_HOST || 'localhost'}:${process.env.VUE_APP_SOCKET_PORT || '3000'}`

export const STATUS_OPTIONS = {
    available: 'available',
    absent: 'absent',
    unavailable: 'unavailable'
}