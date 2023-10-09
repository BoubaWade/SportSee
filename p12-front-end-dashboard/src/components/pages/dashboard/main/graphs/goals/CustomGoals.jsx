export function getMouseHover(event) {
  if (event.isTooltipActive) {
    const goalsWidth = goals.clientWidth;
    const mouseXposition = Math.round(
      (event.activeCoordinate.x / goalsWidth) * 100
    );
    goals.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXposition}%, rgba(175,0,0,1.5) ${mouseXposition}%, rgba(175,0,0,1.5) 100%)`;
  } else {
    goals.style.background = "";
  }
}
