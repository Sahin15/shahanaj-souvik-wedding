import { useState, useEffect } from 'react';

/**
 * Returns the current date string (YYYY-MM-DD) in Asia/Kolkata timezone.
 */
function getKolkataDateString(dateObj) {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return formatter.format(dateObj);
  } catch {
    return dateObj.toISOString().slice(0, 10);
  }
}

function calculateRemaining(targetISO) {
  const targetTime = new Date(targetISO).getTime();
  const now = new Date();
  const nowTime = now.getTime();

  const kolkataToday = getKolkataDateString(now);
  const weddingDayStr = '2026-11-30';

  const diff = targetTime - nowTime;

  if (diff <= 0) {
    const isSameWeddingDay = kolkataToday === weddingDayStr;
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      status: isSameWeddingDay ? 'wedding-day' : 'completed',
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    status: 'counting',
  };
}

export function useCountdown(targetISO = '2026-11-30T12:00:00+05:30') {
  const [timeLeft, setTimeLeft] = useState(() => calculateRemaining(targetISO));

  useEffect(() => {
    setTimeLeft(calculateRemaining(targetISO));
    const timer = window.setInterval(() => {
      setTimeLeft(calculateRemaining(targetISO));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetISO]);

  return timeLeft;
}

export default useCountdown;

