import { AssignmentIcon, DiscussionIcon, QuizIcon } from '../icons';
import { AssignmentType, FinalAssignment } from '../types';
import JSONAssignmentDefaults from './defaults/assignmentDefaults.json';

export const MAX_MARKED_ASSIGNMENTS = 1000;

export const ASSIGNMENT_ICON: Record<AssignmentType, JSX.Element> = {
  [AssignmentType.ASSIGNMENT]: AssignmentIcon,
  [AssignmentType.DISCUSSION]: DiscussionIcon,
  [AssignmentType.QUIZ]: QuizIcon,
  [AssignmentType.NOTE]: AssignmentIcon,
  [AssignmentType.ANNOUNCEMENT]: AssignmentIcon,
  [AssignmentType.EVENT]: AssignmentIcon,
};

export const AssignmentDefaults = JSONAssignmentDefaults as FinalAssignment;
