import React from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars'

const CalendarDate = ({ calendarStyle, selected, onSelect }) => {

    const currentDay = new Date().toDateString()
  
    LocaleConfig.locales['es'] = {
      monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene.', 'Feb.', 'Mar.','Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.','Oct.', 'Nov.', 'Dic.'],
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado','Domingo'],
      dayNamesShort: ['Do.', 'Lu.', 'Ma.', 'Mi.', 'Ju.', 'Vi.', 'Sa.'],
      today: 'Hoy'
    };
    
    LocaleConfig.defaultLocale= 'es';  

  return (
    <>
        <Calendar 
            initialDate={ currentDay }
            minDate={ currentDay }
            disableAllTouchEventsForDisabledDays={ true }
            markingType="custom"
            onDayPress={ day => onSelect(day.dateString) }
            markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedColor: "blue" }
            }}
            style={ calendarStyle } 
        />
    </>
  )
}

export default CalendarDate
