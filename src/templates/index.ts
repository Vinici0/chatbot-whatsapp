import { createFlow } from "@builderbot/bot";
import { sendVoiceFlow } from "./list_templates/sendVoiceFlow";
import { sendImageFlow } from "./list_templates/sendImageFlow";
import { sendPdfFlow } from "./list_templates/sendPdfFlow";
import { mainFlow } from "./mainFlow";
import { menuFlow } from "./menuFlow";

export default createFlow([
  mainFlow,
  menuFlow,
  sendImageFlow,
  sendPdfFlow,
  sendVoiceFlow,
]);
