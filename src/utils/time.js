import dayjs from 'dayjs'
import 'dayjs/locale/id'

export function formatDate(date, format = 'DD MMM YYYY HH:mm:ss') {
    if (!date) {
      return '-'
    }
    return dayjs(date).format(format)
  }