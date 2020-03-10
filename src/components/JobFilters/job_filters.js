export const JOB_FILTERS = {
  FRONT_END: ["Web", "Frontend", "React", "Angular", "Vue"],
  BACK_END: ["Web", "Backend"],
  UI_UX: ["UI/UX"],
  NONE: "None"
};

export const FILTER_OPTIONS = [
  { text: "Frontend", filter: JOB_FILTERS.FRONT_END, emoji: "💅🏼" },
  { text: "Backend", filter: JOB_FILTERS.BACK_END, emoji: "🍑" },
  { text: "UI/UX", filter: JOB_FILTERS.UI_UX, emoji: "🎨" },
  { text: "All Jobs", filter: JOB_FILTERS.NONE, emoji: "👩🏽‍💻" }
];
