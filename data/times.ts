export type DisplayTimeObjectType = {
  '08:00:00.000Z': string
  '09:00:00.000Z': string
  '10:00:00.000Z': string
  '11:00:00.000Z': string
  '12:00:00.000Z': string
  '13:00:00.000Z': string
  '14:00:00.000Z': string
  '15:00:00.000Z': string
  '16:00:00.000Z': string
  [key: string]: string
}

export const displayTimeObject: DisplayTimeObjectType = {
  '08:00:00.000Z': '8:00 AM',
  '09:00:00.000Z': '9:00 AM',
  '10:00:00.000Z': '10:00 AM',
  '11:00:00.000Z': '11:00 AM',
  '12:00:00.000Z': '12:00 PM',
  '13:00:00.000Z': '1:00 PM',
  '14:00:00.000Z': '2:00 PM',
  '15:00:00.000Z': '3:00 PM',
  '16:00:00.000Z': '4:00 PM',
}
