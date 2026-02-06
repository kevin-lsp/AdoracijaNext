import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { Calendar } from "lucide-react";

const CalendarSection = () => {
  // Sample events with initials for each time slot
  const events = [
    // Monday
    { title: 'S.S.', start: '2025-01-20T19:00:00', end: '2025-01-20T20:00:00', color: '#D4AF37' },
    { title: 'A.S.', start: '2025-01-20T20:00:00', end: '2025-01-20T21:00:00', color: '#D4AF37' },
    // Tuesday
    { title: 'M.K.', start: '2025-01-21T19:00:00', end: '2025-01-21T20:00:00', color: '#D4AF37' },
    // Wednesday
    { title: 'J.N.', start: '2025-01-22T20:00:00', end: '2025-01-22T21:00:00', color: '#D4AF37' },
    // Thursday
    { title: 'P.T.', start: '2025-01-23T19:00:00', end: '2025-01-23T20:00:00', color: '#D4AF37' },
    { title: 'L.V.', start: '2025-01-23T20:00:00', end: '2025-01-23T21:00:00', color: '#D4AF37' },
    // Friday
    { title: 'K.R.', start: '2025-01-24T19:00:00', end: '2025-01-24T20:00:00', color: '#D4AF37' },
    // Saturday
    { title: 'D.M.', start: '2025-01-25T20:00:00', end: '2025-01-25T21:00:00', color: '#D4AF37' },
    // Sunday
    { title: 'S.S.', start: '2025-01-26T19:00:00', end: '2025-01-26T20:00:00', color: '#D4AF37' },
    { title: 'M.K.', start: '2025-01-26T20:00:00', end: '2025-01-26T21:00:00', color: '#D4AF37' },
  ];

  return (
    <section id="calendar" className="py-8 bg-sacred-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-sacred-gold" />
            <h2 className="text-2xl font-bold text-foreground">Urnik Adoracije</h2>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-card rounded-lg shadow-lg p-4">
          <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin, googleCalendarPlugin]}
            initialView="timeGridWeek"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: ''
            }}
            slotMinTime="19:00:00"
            slotMaxTime="21:00:00"
            slotDuration="01:00:00"
            allDaySlot={false}
            height="auto"
            events={events}
            eventClick={(info) => {
              const timeStr = info.event.start?.toLocaleTimeString('sl-SI', { hour: '2-digit', minute: '2-digit' });
              alert(`Častilec: ${info.event.title}\nUra: ${timeStr}`);
            }}
            slotLabelFormat={{
              hour: '2-digit',
              minute: '2-digit',
              hour12: false
            }}
            locale="sl"
            firstDay={1}
            weekends={true}
            editable={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            // For Google Calendar integration, add your API key:
            // googleCalendarApiKey: 'YOUR_GOOGLE_API_KEY'
            // Then add event sources:
            // eventSources: [{
            //   googleCalendarId: 'your-calendar-id@gmail.com'
            // }]
          />

          <div className="mt-4 p-3 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground">
              <strong>Navodila za integracijo:</strong> Za povezavo z Google Koledarjem ali Outlookom potrebujete API ključ. 
              Za Google Calendar odprite nastavitve v kodi in dodajte <code>googleCalendarApiKey</code> ter <code>googleCalendarId</code>. 
              Za Outlook lahko uporabite iCal URL in ga dodate kot event source.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
