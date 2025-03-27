"use client";

import React, { useEffect, useState } from "react";
import eventsData from "@/data/events.json";
import SingleEvent from "./SingleEvent";
import Image from "next/image";

interface Poc {
  name: string;
  phone: string;
}

interface EventItem {
  name: string;
  start_time: string; // e.g. "9:00 AM"
  start_date: string; // e.g. "27-28 March" or "27 March"
  description: string;
  mode: string;
  duration: string;
  rules: string[];
  poc: Poc[];
}

interface CategoryData {
  title: string;
  events: EventItem[];
}

interface EventsData {
  [key: string]: CategoryData;
}

interface EventDetailsProps {
  eventName: string; // e.g., "foss", "ml", etc.
  bg_img: string;    // Background image class or URL
}

/**
 * Splits a title string into an array of lines with at most 2 words per line.
 */
const splitTitle = (title: string): string[] => {
  const words = title.split(" ");
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += 2) {
    lines.push(words.slice(i, i + 2).join(" "));
  }
  return lines;
};

/**
 * Parses the event start_time and start_date (which may be a range) into Date objects.
 * Assumes start_time is in the format "9:00 AM" and start_date is either "27-28 March" or "27 March".
 */
const parseEventDateTime = (
  start_date: string,
  start_time: string
): { start: Date; end: Date } => {
  // Parse time (e.g., "9:00 AM")
  const [timeStr, meridiem] = start_time.split(" ");
  const [hourStr, minuteStr] = timeStr.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  if (meridiem.toUpperCase() === "PM" && hour !== 12) {
    hour += 12;
  } else if (meridiem.toUpperCase() === "AM" && hour === 12) {
    hour = 0;
  }

  // Parse date.
  // Expected formats: "27-28 March" or "27 March"
  const parts = start_date.split(" ");
  const dayPart = parts[0]; // "27-28" or "27"
  const monthName = parts.slice(1).join(" "); // e.g., "March"
  const monthMap: { [key: string]: number } = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };
  const month = monthMap[monthName];
  const currentYear = new Date().getFullYear();

  if (dayPart.includes("-")) {
    // Date range provided
    const [startDayStr, endDayStr] = dayPart.split("-");
    const startDay = parseInt(startDayStr, 10);
    const endDay = parseInt(endDayStr, 10);
    const startDate = new Date(currentYear, month, startDay, hour, minute, 0);
    // Consider the event live until the end of the end day (23:59:59)
    const endDate = new Date(currentYear, month, endDay, 23, 59, 59);
    return { start: startDate, end: endDate };
  } else {
    // Single date provided
    const day = parseInt(dayPart, 10);
    const startDate = new Date(currentYear, month, day, hour, minute, 0);
    // For single-day events, we can consider the event live if the current time is >= start time.
    // Here, we set end equal to start so that the check becomes: now >= start.
    return { start: startDate, end: startDate };
  }
};

const EventDetails: React.FC<EventDetailsProps> = ({ eventName, bg_img }) => {
  // Access the category data by converting eventName to lowercase for consistency
  const categoryData: CategoryData | undefined = (eventsData as EventsData)[
    eventName.toLowerCase()
  ];

  // Track which event (if any) is selected
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  useEffect(() => {
    setSelectedEvent(null);
  }, [eventName]);

  if (!categoryData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-red-500">
        <p>No event data found for &quot;{eventName}&quot;.</p>
      </div>
    );
  }

  const { title, events } = categoryData;
  const titleLines = splitTitle(title);

  return (
    <div className="flex flex-col md:flex-row items-stretch text-white bg-[#120303] md:px-6 py-8 mx-auto max-w-6xl font-atelier md:gap-12">
      {/* Left side: vertical title column (always visible) */}
      <div className="w-full md:w-1/4 flex flex-col justify-center items-center md:pr-8">
        <div
          className={`text-6xl md:mt-8 mb-10 ${bg_img} bg-cover bg-center font-extrabold md:rotate-270 text-center bg-clip-text text-transparent`}
        >
          {titleLines.map((line, idx) => (
            <div className="px-4" key={idx}>
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Right side: conditionally show either the list of events OR single event */}
      <div className="w-full md:w-3/4">
        {selectedEvent ? (
          // Single Event View
          <SingleEvent
            event={selectedEvent}
            onBack={() => setSelectedEvent(null)}
          />
        ) : (
          // List of Events
          <div className="flex flex-col space-y-6">
            {events.map((item, index) => {
              // Parse the event's start time and date.
              const { start, end } = parseEventDateTime(
                item.start_date,
                item.start_time
              );
              const now = new Date();
              // For events with a range, check if now is between start and end.
              // For a single date, live if now is greater than or equal to start.
              const isLive = now >= start && now <= end;
              const lampSrc = isLive
                ? "/events/lamp-glow.png"
                : "/events/lamp-red.png";

              return (
                <div
                  key={index}
                  className="relative bg-[#120303] p-6 border border-[#c9c2b6] shadow-md md:w-[80%] cursor-pointer hover:opacity-80 transition duration-300 ease-in-out"
                  onClick={() => setSelectedEvent(item)}
                >
                  <div className="flex flex-row justify-between">
                    {/* Event name */}
                    <h2 className="text-2xl font-semibold mb-2 text-[#EAE3BA]">
                      {item.name}
                    </h2>
                    <div className="mr-4">
                      <Image
                        src={lampSrc}
                        alt="Lamp Status"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  {/* Time and date */}
                  <p className="text-sm text-[#977864] mb-4">
                    Start Time: {item.start_time} | {item.start_date}
                  </p>

                  {/* Description */}
                  <p className="text-base text-[#D9D9D9]">{item.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
