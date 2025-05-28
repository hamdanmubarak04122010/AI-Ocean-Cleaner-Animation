function getClosestTrash(currentPos, trashList) {
  let minDist = Infinity, closest = null;
  trashList.forEach(t => {
    const tTop = parseFloat(t.style.top);
    const tLeft = parseFloat(t.style.left);
    const dist = Math.hypot(currentPos.top - tTop, currentPos.left - tLeft);
    if (dist < minDist) {
      minDist = dist;
      closest = t;
    }
  });
  return closest;
}
