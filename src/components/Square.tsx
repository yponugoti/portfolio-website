/** Small colored square used as a bullet. */
const Square = ({ color = "#000" }: { color?: string }) => (
  <span
    aria-hidden
    className="inline-block size-[5px] shrink-0"
    style={{ backgroundColor: color }}
  />
)

export default Square
