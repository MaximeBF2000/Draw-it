import draw from "./modules/draw"
import { d, w } from "./modules/utils"
import "./styles/app.scss"


// DOM
const canvas = d.querySelector("#draw_canvas")
const lineWidth_input = document.querySelector(".option.linewidth input")
const color_input = document.querySelector(".option.strokeStyle input")

// Canvas options
canvas.width = .7 * w.innerWidth
canvas.height = .8 * w.innerHeight
const ctx = canvas.getContext("2d")
ctx.strokeStyle = color_input.value
ctx.lineCap = "round"
ctx.lineWidth = lineWidth_input.value
let is_drawing = false


// Draw events
canvas.addEventListener("mousedown", () => is_drawing = true)
canvas.addEventListener("mouseup", () => {
  is_drawing = false
  ctx.beginPath()
})
w.addEventListener("mousemove", e => {
  if(e.target.classList.contains("canvas")){
    draw(e, is_drawing, canvas, ctx)
  } else {
    is_drawing = false
  }
})

// Options event
lineWidth_input.addEventListener("input", e => {
  ctx.lineWidth = e.target.value
})
color_input.addEventListener("input", e => {
  ctx.strokeStyle = e.target.value
})

// Clear drawing
function clear_drawing() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
d.querySelector("#clear_drawing").addEventListener("click", clear_drawing)

// Dowload file
function download_drawing(el) {
  const image = canvas.toDataURL("image/jpg")
  el.href = image
}
d.querySelector("#save_drawing").addEventListener("click", e => download_drawing(e.target))