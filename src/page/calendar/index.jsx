import React from "react";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridePlugin from "@fullcalendar/daygrid";
import timeGridePlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { format } from "date-fns";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  // Add event on selected date
  const handleDateClick = (selected) => {
    const title = prompt("PLEASE ENTER YOUR EVENT TITLE ");
    const calenderApi = selected.view.calendar;
    calenderApi.unselect();

    if (title) {
      calenderApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
    console.log(selected);
  };

  // Remove event from calendar
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`,
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full interactive calender page" />
      <Box display="flex" justifyContent="space-between">
        {/* Calendar sidebar */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((e) => (
              <ListItem
                key={e.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={e.title}
                  secondary={format(e.start, "yyyy-MM-dd")}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Calendar  and Events */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridePlugin,
              timeGridePlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(e) => setCurrentEvents(e)}
            initialEvents={[
              {
                id: "1",
                title: "All-day event",
                date: "2023-08-19",
              },
              {
                id: "2",
                title: "Day event",
                date: "2023-08-29",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
