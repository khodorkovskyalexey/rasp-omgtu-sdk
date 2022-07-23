export enum RaspOmgtuScheduleFor {
  GROUP = 'group',
  AUDITORIUM = 'auditorium',
  PERSON = 'person',
  STUDENT = 'student',
  LECTURER = 'lecturer',
}

export type SearchResponse = {
  description: string;
  id: number;
  label: string;
  type: RaspOmgtuScheduleFor;
};

export type ScheduleResponse = {
  auditorium: string;
  auditoriumAmount: number;
  auditoriumOid: number;
  author: string;
  beginLesson: string;
  building: string;
  buildingGid: number;
  buildingOid: number;
  contentOfLoadOid: number;
  contentOfLoadUID?: unknown;
  contentTableOfLessonsName: string;
  contentTableOfLessonsOid: number;
  createddate: string;
  date: string;
  dateOfNest: string;
  dayOfWeek: number;
  dayOfWeekString: string;
  detailInfo: string;
  discipline: string;
  disciplineOid: number;
  disciplineinplan?: string | null;
  disciplinetypeload: number;
  duration: number;
  endLesson: string;
  group: string;
  groupOid: number;
  groupUID?: unknown;
  group_facultyoid: number;
  hideincapacity: number;
  isBan: boolean;
  kindOfWork: string;
  kindOfWorkComplexity: number;
  kindOfWorkOid: number;
  kindOfWorkUid?: unknown;
  lecturer: string;
  lecturerCustomUID?: unknown;
  lecturerEmail: string;
  lecturerOid: number;
  lecturerUID?: unknown;
  lecturer_rank: string;
  lecturer_title: string;
  lessonNumberEnd: number;
  lessonNumberStart: number;
  lessonOid: number;
  listOfLecturers: LecturerResponse[];
  modifieddate: string;
  note?: unknown;
  note_description: string;
  parentschedule: string;
  replaces?: unknown;
  stream?: unknown;
  streamOid: number;
  stream_facultyoid: number;
  subGroup?: unknown;
  subGroupOid: number;
  subgroup_facultyoid: number;
  tableofLessonsName: string;
  tableofLessonsOid: number;
  url1: string;
  url1_description: string;
  url2: string;
  url2_description: string;
};

export type LecturerResponse = {
  lecturer: string;
  lecturerCustomUID?: unknown;
  lecturerEmail: string;
  lecturerOid: number;
  lecturerUID?: unknown;
  lecturer_rank: string;
  lecturer_title: string;
};
