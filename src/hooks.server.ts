import type { Handle } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import PocketBase from "pocketbase";
import pretty from "pino-pretty";
import pino from "pino";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase(env.POCKETBASE_URL);
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  event.locals.logger = pino(pretty({ colorize: true }));

  try {
    if (event.locals.pb.authStore.isValid) {
      await event.locals.pb.collection("users").authRefresh();
      event.locals.user = structuredClone(event.locals.pb.authStore.record);
    }
  } catch {
    event.locals.pb.authStore.clear();
    event.locals.user = null;
  }

  const response = await resolve(event);
  // TODO: secure this in production
  response.headers.set(
    "set-cookie",
    event.locals.pb.authStore.exportToCookie({
      secure: false,
    }),
  );

  return response;
};
