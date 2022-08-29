import React, { useMemo } from 'react';
import { Course } from '../../../types';
import CourseDropdown from '../../course-dropdown';

function fmtTime(minutes: number): string {
  const h =
    Math.floor(minutes / 60) % 12 === 0 ? 12 : Math.floor(minutes / 60) % 12;
  const mm = (minutes % 60 < 10 ? '0' : '') + (minutes % 60);
  const ampm = minutes / 60 >= 12 ? 'PM' : 'AM';
  return `${h}:${mm} ${ampm}`;
}

type Props = {
  selected: number;
  setSelected: (value: number) => void;
};

export default function TimePick({
  selected,
  setSelected,
}: Props): JSX.Element {
  const timeChoices = useMemo(() => {
    const times: Course[] = [];
    for (let i = 0; i < 48; i++) {
      times.push({
        id: i * 30,
        name: fmtTime(i * 30),
        position: i,
        color: '#2d3b45',
      });
    }

    times.push({
      id: 1439,
      name: fmtTime(1439),
      position: 48,
      color: '#2d3b45',
    });

    return times;
  }, []);

  function chooseTime(id: number) {
    setSelected(id);
  }

  return (
    <CourseDropdown
      courses={timeChoices}
      instructureStyle
      maxHeight={150}
      noDefault
      onCoursePage={false}
      selectedCourseId={selected}
      setCourse={chooseTime}
      zIndex={30} // above the course dropdown under this
    />
  );
}
