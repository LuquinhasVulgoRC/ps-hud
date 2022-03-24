import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type playerHudIcons = {
  voice: hudIconType,
  health: hudIconType,
  armor: hudIconType,
  hunger: hudIconType,
  thirst: hudIconType,
  stress: hudIconType,
  oxygen: hudIconType,
  armed: hudIconType,
  parachute: hudIconType,
  engine: hudIconType,
  harness: hudIconType,
  cruise: hudIconType,
  nos: hudIconType,
  dev: hudIconType,
}

export const layouts = ["standard" , "left-bottom-column" , "right-column" , "bottom-center" ,
"bottom-right" , "top-left-row" , "esx-hud-hard-to-let-go" ] as const;

export type layoutkind = typeof layouts[number];

export const shapes = [ "circle-ring"  , "circle-whole" ,"square-ring" , "star-ring" , "triangle-ring" ,
  "hexagon-ring" , "diamond-ring" , "square-circular-fill" , "square-whole" ,
  "vertical-bar" , "icon-percentage" , "circle-end" , "cylinder" , "horizontal-bar"] as const;

export type shapekind = typeof shapes[number];

// Text is only on Horizontal bar, TODO; create sub/parent types
export type hudIconType = {
  conditionalText: (val: number) => string,
  defaultColor: string,
  height: number,
  icon: IconDefinition,
  iconColor: string,
  iconScaling: number,
  iconTranslateX: number,
  iconTranslateY: number,
  isShowing: boolean,
  innerColor: string,
  name: string,
  outlineColor: string,
  outlineColorOpacity: number,
  progressColor: string,
  progressValue: number,
  ringSize: number,
  rotateDegree: number,
  shape: shapekind,
  text: string,
  translateX: number,
  translateY: number,
  width: number
}

export type optionalHudIconType = Partial<hudIconType>;

export type optionalPlayerHudIconsType = Partial<{ [Property in keyof playerHudIcons]: optionalHudIconType }>;

export function defaultHudIcon(name = "", showing=false, color="red", icon=null,): hudIconType {
  return {
    conditionalText: null,
    defaultColor: color,
    height: 50,
    icon: icon,
    iconColor: "white",
    iconScaling: 0.55,
    iconTranslateX: 0,
    iconTranslateY: 0,
    isShowing: showing,
    innerColor: "black",
    name: name,
    outlineColor: "",
    outlineColorOpacity: 0.4,
    progressColor: color,
    progressValue: 100,
    ringSize: 2,
    rotateDegree: 0,
    shape: "horizontal-bar",
    text: "",
    translateX: 0,
    translateY: 0,
    width: 50,
  }
}

export type shapePropsType =  Omit<hudIconType, "shape" | "isShowing" | "name" >;

export function defaultShapeProps(): shapePropsType {
  return (({ shape, isShowing, name, ...o }) => o)(defaultHudIcon());
}