/* @flow */
export default function makeRemotePagination(
  pages: Object,
  nextCurrent: number,
  current: number,
  last: number,
  updateActive,
) {
  const afterNearCount = current + 1;
  const afterDistantCount = current + 2;
  const beforeNearCount = current - 1;
  const beforeDistantCount = current - 2;

  if (nextCurrent === 1) {
    updateActive(pages.first);
  } else if (nextCurrent === last) {
    updateActive(pages.last);
  } else if (current === last && nextCurrent === last - 1) {
    updateActive(pages.after_distant);
  } else if (current === last && nextCurrent === last - 2) {
    updateActive(pages.after_near);
  } else if (current === last && nextCurrent === last - 3) {
    updateActive(pages.before_near);
  } else if (current === last && nextCurrent === last - 4) {
    updateActive(pages.before_distant);
  } else if (current === last - 1 && nextCurrent === last) {
    updateActive(pages.after_distant);
  } else if (current === last - 1 && nextCurrent === last - 2) {
    updateActive(pages.after_near);
  } else if (current === last - 1 && nextCurrent === last - 3) {
    updateActive(pages.before_near);
  } else if (current === last - 1 && nextCurrent === last - 4) {
    updateActive(pages.before_distant);
  } else if (nextCurrent === 2 && current === 1) {
    updateActive(pages.before_distant);
  } else if (nextCurrent === 3 && current === 1) {
    updateActive(pages.before_near);
  } else if (nextCurrent === 4 && current === 1) {
    updateActive(pages.after_near);
  } else if (nextCurrent === 5 && current === 1) {
    updateActive(pages.after_distant);
  } else if (nextCurrent === 3 && current === 2) {
    updateActive(pages.before_near);
  } else if (nextCurrent === 4 && current === 2) {
    updateActive(pages.after_near);
  } else if (nextCurrent === 5 && current === 2) {
    updateActive(pages.after_distant);
  } else if (nextCurrent === afterNearCount) {
    updateActive(pages.after_near);
  } else if (nextCurrent === afterDistantCount) {
    updateActive(pages.after_distant);
  } else if (nextCurrent === beforeNearCount) {
    updateActive(pages.before_near);
  } else if (nextCurrent === beforeDistantCount) {
    updateActive(pages.before_distant);
  }
}
