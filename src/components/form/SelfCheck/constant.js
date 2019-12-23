// type: oneOf -> text, textField, dropdown, timePicker, photoUpload, number ?\
export default {
  formSchema: [
    { label: { id: 'Nomor Booking', en: 'Booking Number' }, name: 'bookingId', type: 'text' },
    { label: { id: 'Jenis Guest House', en: 'Guest House Type' }, name: 'type', type: 'text' },
    { label: { id: 'Nama Pesanan', en: 'Booking Name' }, name: 'bookingName', type: 'text' },
    { label: { id: 'Tanggal Check-In', en: 'Check-In Date' }, name: 'checkin', type: 'text', date: true },
    { label: { id: 'Tanggal Check-Out', en: 'Check-Out Date' }, name: 'checkout', type: 'text', date: true },
    { label: { id: 'Jumlah Tamu', en: 'Jumlah Tamu' }, name: 'guestNumber', type: 'number', min: 0 },
    {
      label: { id: 'Jam Check-In', en: 'Check-In Time' },
      name: 'checkinTime',
      type: 'timePicker',
      disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    },
    {
      label: { id: 'Jam Check-Out', en: 'Check-Out Time' },
      name: 'checkoutTime',
      type: 'timePicker',
      disabledHours: () => [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    }
  ],
  fieldArray: [
    {
      label: { id: 'Negara Asal', en: 'Origin' },
      name: 'origin',
      type: 'dropdown',
      options: [
        { label: 'Indonesia', value: 'Indonesia' },
        { label: 'Singapore', value: 'Singapore' },
        { label: 'Sweden', value: 'Sweden' }
      ]
    },
    { label: { id: 'Nama', en: 'Name' }, name: 'name', type: 'textField' },
    {
      label: { id: 'Jenis Kelamin', en: 'Gender' },
      name: 'gender',
      type: 'dropdown',
      options: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
      ]
    },
    { label: { id: 'Pekerjaan', en: 'Work' }, name: 'work', type: 'textField' },
    { label: { id: 'Umur', en: 'Age' }, name: 'age', type: 'number', min: 0 },
    { label: { id: 'No KTP/Passport', en: 'No KTP/Passport' }, name: 'ktp', type: 'textField' },
    { label: { id: 'No KTP/Passport', en: 'No KTP/Passport' }, name: 'loc', type: 'textField' },
    { label: { id: 'Foto KTP/Passport', en: 'Photo KTP/Passport' }, name: 'photo', type: 'image' }
  ]
};
