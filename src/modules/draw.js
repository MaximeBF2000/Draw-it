function getMousePosOnCanva(e, canva) {
  const rect = canva.getBoundingClientRect()
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

export default function draw(event, bool, canva, ctx) {
  if(!bool) return

  ctx.lineTo(getMousePosOnCanva(event, canva).x, getMousePosOnCanva(event, canva).y)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(getMousePosOnCanva(event, canva).x, getMousePosOnCanva(event, canva).y)
}