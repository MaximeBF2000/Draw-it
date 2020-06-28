export default function getMousePosOnCanva(e, canva) {
  const rect = canva.getBoundingClientRect()
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}