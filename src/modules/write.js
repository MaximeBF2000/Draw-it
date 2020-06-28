import getMousePosOnCanva from "./mousePosCanva"

export default function write(event, bool, canva, ctx){
  if(!bool) return

  const text = prompt("Enter your text here: ")

  if(!text) return

  ctx.fillText(text, getMousePosOnCanva(event, canva).x, getMousePosOnCanva(event, canva).y)
}