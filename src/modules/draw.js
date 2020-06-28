import getMousePosOnCanva from "./mousePosCanva"

export default function draw(event, bool, canva, ctx) {
  if(!bool) return

  ctx.lineTo(getMousePosOnCanva(event, canva).x, getMousePosOnCanva(event, canva).y)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(getMousePosOnCanva(event, canva).x, getMousePosOnCanva(event, canva).y)
}