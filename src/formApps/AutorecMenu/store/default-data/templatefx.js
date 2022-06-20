import * as common from "./common";

export const templatefx = [
   {
      ...common.main({ name: "calllightning" }),
      audio: common.audio({ source: true }),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         isMasked: false,
         occlusionAlpha: 0.7,
         occlusionMode: "3",
         opacity: 0.75,
         persistType: "overheadtile",
         persistent: true,
         removeTemplate: true,
         repeat: 1,
         scaleX: 1,
         scaleY: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "circle", animation: "calllightning", variant: '01', color: 'blueorange' })
   },

   {
      ...common.main({ name: "fogcloud" }),
      audio: common.audio({ source: true }),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         isMasked: false,
         occlusionAlpha: 0.65,
         occlusionMode: "3",
         opacity: 0.75,
         persistType: "overheadtile",
         persistent: true,
         removeTemplate: true,
         repeat: 1,
         scaleX: 1,
         scaleY: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "circle", animation: "fogcloud", variant: '01', color: 'white' })
   }
];
