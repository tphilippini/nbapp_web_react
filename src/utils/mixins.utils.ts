import { keyframes, css } from "styled-components";
/* eslint-disable import/prefer-default-export */

export const spinAround = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export function center(width:string, height:number = 0) {
  if (height) {
    return css`
      position: absolute;
      left: calc(50% - (${width} / 2));
      top: calc(50% - (${height} / 2));
    `;
  }
  return css`
    position: absolute;
    left: calc(50% - (${width} / 2));
    top: calc(50% - (${width} / 2));
  `;
}

export function LightenDarkenColor(col:any, amt:any) {
  var usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

export function hexToRgbA(hex:any, op:any) {
  let c:any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      ", " +
      op +
      ")"
    );
  }
  throw new Error("Bad Hex");
}

export const loader = css`
  animation: ${spinAround} 500ms infinite linear;
  border: 2px solid #ffffff;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
`;

const size = {
  desktop: "900px",
  tablet: "600px"
};

export const media = {
  desktop: `@media all and (min-width: ${size.desktop})`,
  tablet: `@media all and (min-width: ${size.tablet})`
};
